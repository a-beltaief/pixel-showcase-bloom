import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, User, Mail, Phone, Building, Globe } from "lucide-react";

interface AppointmentType {
  id: string;
  name: string;
  duration_minutes: number;
  icon: string;
}

interface BookingFormProps {
  selectedService: AppointmentType;
  selectedDate: Date;
  selectedTime: string;
  onBookingComplete: () => void;
}

const bookingSchema = z.object({
  customer_name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  customer_email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  customer_phone: z.string().optional(),
  customer_company: z.string().optional(),
  customer_website: z.string().optional(),
  project_description: z.string().optional(),
  privacy_accepted: z.boolean().refine(val => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen"
  })
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookingForm = ({ selectedService, selectedDate, selectedTime, onBookingComplete }: BookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      customer_company: "",
      customer_website: "",
      project_description: "",
      privacy_accepted: false
    }
  });

  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} Min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      return `${hours} Std`;
    }
    return `${hours}h ${remainingMinutes}min`;
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create appointment in database
      const appointmentData = {
        appointment_type_id: selectedService.id,
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        customer_phone: data.customer_phone || null,
        customer_company: data.customer_company || null,
        customer_website: data.customer_website || null,
        project_description: data.project_description || null,
        appointment_date: format(selectedDate, 'yyyy-MM-dd'),
        appointment_time: selectedTime,
        status: 'confirmed'
      };

      const { data: appointmentResult, error: appointmentError } = await supabase
        .from('appointments')
        .insert([appointmentData])
        .select()
        .single();

      if (appointmentError) {
        throw new Error(appointmentError.message);
      }

      // Send confirmation email
      const emailData = {
        appointment_id: appointmentResult.id,
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        service_name: selectedService.name,
        service_duration: selectedService.duration_minutes,
        appointment_date: format(selectedDate, 'yyyy-MM-dd'),
        appointment_time: selectedTime,
        service_icon: selectedService.icon
      };

      const { error: emailError } = await supabase.functions.invoke('send-booking-confirmation', {
        body: emailData
      });

      if (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't throw error here as the appointment was already created
        toast({
          title: "Termin erfolgreich gebucht!",
          description: "Ihr Termin wurde bestätigt. Die E-Mail-Bestätigung konnte nicht versendet werden, aber Ihr Termin ist gespeichert.",
          variant: "default"
        });
      } else {
        toast({
          title: "Termin erfolgreich gebucht!",
          description: "Sie erhalten in Kürze eine Bestätigung per E-Mail mit allen Details.",
          variant: "default"
        });
      }

      onBookingComplete();
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: "Fehler beim Buchen",
        description: error instanceof Error ? error.message : "Ein unbekannter Fehler ist aufgetreten.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Termin bestätigen</h2>
        
        {/* Booking Summary */}
        <Card className="max-w-md mx-auto">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center justify-center gap-2">
              <span className="text-2xl">{selectedService.icon}</span>
              {selectedService.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{format(selectedDate, 'EEEE, d. MMMM yyyy', { locale: de })}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{selectedTime} Uhr</span>
              <Badge variant="secondary" className="ml-2">
                {formatDuration(selectedService.duration_minutes)}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="customer_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Name *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ihr vollständiger Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customer_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-Mail *
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="ihre.email@beispiel.de" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customer_phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefon (optional)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="+49 123 456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customer_company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Unternehmen (optional)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ihr Unternehmen" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="customer_website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Website (optional)
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://ihre-website.de" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="project_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Projektbeschreibung (optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Erzählen Sie uns kurz von Ihrem Projekt oder Ihren Zielen..."
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacy_accepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm">
                    Ich stimme der{" "}
                    <a href="/datenschutz" target="_blank" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu und bin damit einverstanden, dass meine Daten zur Terminbearbeitung gespeichert werden. *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gebucht..." : "Termin verbindlich buchen"}
            </Button>
          </div>

          <div className="text-xs text-foreground-muted text-center">
            * Pflichtfelder • Der Termin kann bis 24h vorher kostenlos storniert werden
          </div>
        </form>
      </Form>
    </div>
  );
};