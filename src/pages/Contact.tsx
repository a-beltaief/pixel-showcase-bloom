import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name ist erforderlich" }).max(100, { message: "Name muss weniger als 100 Zeichen sein" }),
  email: z.string().trim().email({ message: "Ungültige E-Mail-Adresse" }).max(255, { message: "E-Mail muss weniger als 255 Zeichen sein" }),
  phone: z.string().trim().min(1, { message: "Handynummer ist erforderlich" }).max(20, { message: "Handynummer muss weniger als 20 Zeichen sein" }),
  message: z.string().trim().min(1, { message: "Nachricht ist erforderlich" }).max(1000, { message: "Nachricht muss weniger als 1000 Zeichen sein" })
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) throw error;

      toast.success("Nachricht erfolgreich gesendet!");
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Kontakt</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">Name</Label>
              <Input
                id="name"
                placeholder="Ihr vollständiger Name"
                {...register("name")}
                className="h-14 text-base border-border/50 focus:border-primary rounded-xl"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">E-Mail Adresse</Label>
              <Input
                id="email"
                type="email"
                placeholder="ihre.email@example.com"
                {...register("email")}
                className="h-14 text-base border-border/50 focus:border-primary rounded-xl"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-semibold">Handynummer</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+43 123 456 7890"
                {...register("phone")}
                className="h-14 text-base border-border/50 focus:border-primary rounded-xl"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-semibold">Nachricht</Label>
              <Textarea
                id="message"
                placeholder="Erzählen Sie mir von Ihrem Projekt..."
                {...register("message")}
                className="min-h-[200px] text-base border-border/50 focus:border-primary rounded-xl resize-none"
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-16 text-base font-semibold rounded-xl bg-foreground text-background hover:bg-foreground/90"
            >
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
