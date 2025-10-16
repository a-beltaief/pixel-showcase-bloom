import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceSelection } from "@/components/booking/ServiceSelection";
import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { BookingForm } from "@/components/booking/BookingForm";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface AppointmentType {
  id: string;
  name: string;
  duration_minutes: number;
  price_cents: number;
  description: string;
  icon: string;
}

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<AppointmentType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointmentTypes, setAppointmentTypes] = useState<AppointmentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointmentTypes = async () => {
      try {
        const { data, error } = await supabase
          .from('appointment_types')
          .select('*')
          .eq('is_active', true)
          .order('duration_minutes');

        if (error) throw error;
        setAppointmentTypes(data || []);
        
        // Check for pre-selected service from URL
        const params = new URLSearchParams(window.location.search);
        const serviceParam = params.get('service');
        
        if (serviceParam && data) {
          const preSelectedService = data.find(
            service => service.name.toLowerCase().replace(/\s+/g, '-') === serviceParam
          );
          
          if (preSelectedService) {
            setSelectedService(preSelectedService);
            setCurrentStep(2);
          }
        }
      } catch (error) {
        console.error('Error fetching appointment types:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentTypes();
  }, []);

  const handleServiceSelect = (service: AppointmentType) => {
    setSelectedService(service);
    setCurrentStep(2);
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setCurrentStep(3);
  };

  const handleBookingComplete = () => {
    // Reset form and go back to step 1
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 2) {
        setSelectedService(null);
      } else if (currentStep === 3) {
        setSelectedDate(null);
        setSelectedTime(null);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Termin buchen
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Wählen Sie einen passenden Service und buchen Sie direkt online einen Termin.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                1
              </div>
              <div className={`w-16 h-0.5 ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                2
              </div>
              <div className={`w-16 h-0.5 ${currentStep >= 3 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                3
              </div>
            </div>
          </div>

          {/* Back Button */}
          {currentStep > 1 && (
            <div className="mb-8">
              <Button variant="ghost" onClick={goBack} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Zurück
              </Button>
            </div>
          )}

          {/* Step Content */}
          <div className="bg-card rounded-lg border border-card-border p-8">
            {currentStep === 1 && (
              <ServiceSelection
                appointmentTypes={appointmentTypes}
                onServiceSelect={handleServiceSelect}
              />
            )}

            {currentStep === 2 && selectedService && (
              <BookingCalendar
                selectedService={selectedService}
                onDateTimeSelect={handleDateTimeSelect}
              />
            )}

            {currentStep === 3 && selectedService && selectedDate && selectedTime && (
              <BookingForm
                selectedService={selectedService}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onBookingComplete={handleBookingComplete}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;