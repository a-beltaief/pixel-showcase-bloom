import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { format, addDays, isSameDay, isToday, isBefore, startOfDay } from "date-fns";
import { de } from "date-fns/locale";
import { Clock } from "lucide-react";

interface AppointmentType {
  id: string;
  name: string;
  duration_minutes: number;
  icon: string;
}

interface BookingCalendarProps {
  selectedService: AppointmentType;
  onDateTimeSelect: (date: Date, time: string) => void;
}

interface AvailabilitySlot {
  time: string;
  available: boolean;
}

export const BookingCalendar = ({ selectedService, onDateTimeSelect }: BookingCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [availableSlots, setAvailableSlots] = useState<AvailabilitySlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);

  // Load blocked dates on component mount
  useEffect(() => {
    const fetchBlockedDates = async () => {
      try {
        const { data, error } = await supabase
          .from('blocked_dates')
          .select('blocked_date');

        if (error) throw error;
        
        const dates = data?.map(item => new Date(item.blocked_date)) || [];
        setBlockedDates(dates);
      } catch (error) {
        console.error('Error fetching blocked dates:', error);
      }
    };

    fetchBlockedDates();
  }, []);

  // Generate available time slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      generateTimeSlots(selectedDate);
    }
  }, [selectedDate, selectedService]);

  const generateTimeSlots = async (date: Date) => {
    setLoading(true);
    try {
      const dayOfWeek = date.getDay();
      
      // Get availability settings for this day of week
      const { data: availabilityData, error: availabilityError } = await supabase
        .from('availability_settings')
        .select('start_time, end_time')
        .eq('day_of_week', dayOfWeek)
        .eq('is_available', true);

      if (availabilityError) throw availabilityError;
      
      if (!availabilityData || availabilityData.length === 0) {
        setAvailableSlots([]);
        setLoading(false);
        return;
      }

      // Get existing appointments for this date
      const { data: appointmentsData, error: appointmentsError } = await supabase
        .from('appointments')
        .select('appointment_time, appointment_type_id')
        .eq('appointment_date', format(date, 'yyyy-MM-dd'))
        .eq('status', 'confirmed');

      if (appointmentsError) throw appointmentsError;

      // Get appointment type durations for existing appointments
      const appointmentTypeIds = appointmentsData?.map(apt => apt.appointment_type_id) || [];
      let appointmentTypes: { [key: string]: number } = {};
      
      if (appointmentTypeIds.length > 0) {
        const { data: typesData, error: typesError } = await supabase
          .from('appointment_types')
          .select('id, duration_minutes')
          .in('id', appointmentTypeIds);

        if (typesError) throw typesError;
        
        typesData?.forEach(type => {
          appointmentTypes[type.id] = type.duration_minutes;
        });
      }

      const slots: AvailabilitySlot[] = [];
      const slotDuration = 15; // 15 minute slots
      const bufferTime = 15; // 15 minute buffer between appointments

      // Generate slots for each availability period
      availabilityData.forEach(period => {
        const startTime = period.start_time;
        const endTime = period.end_time;
        
        // Convert time strings to minutes
        const startMinutes = timeToMinutes(startTime);
        const endMinutes = timeToMinutes(endTime);
        
        // Generate 15-minute slots
        for (let minutes = startMinutes; minutes < endMinutes; minutes += 30) { // 30 min intervals (15 min slot + 15 min buffer)
          const timeString = minutesToTime(minutes);
          
          // Check if this slot conflicts with existing appointments
          const isConflicted = appointmentsData?.some(appointment => {
            const appointmentTime = appointment.appointment_time;
            const appointmentStartMinutes = timeToMinutes(appointmentTime);
            const appointmentDuration = appointmentTypes[appointment.appointment_type_id] || 15;
            const appointmentEndMinutes = appointmentStartMinutes + appointmentDuration;
            
            // Check if the new appointment would overlap
            const newAppointmentEndMinutes = minutes + selectedService.duration_minutes;
            
            return (
              (minutes < appointmentEndMinutes && newAppointmentEndMinutes > appointmentStartMinutes)
            );
          }) || false;

          // Check if there's enough time for this appointment before the period ends
          const hasEnoughTime = minutes + selectedService.duration_minutes <= endMinutes;
          
          // Don't show slots in the past (with 2 hour buffer)
          const now = new Date();
          const slotDateTime = new Date(date);
          slotDateTime.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
          const twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000);
          const isInPast = isBefore(slotDateTime, twoHoursFromNow);

          if (hasEnoughTime && !isInPast) {
            slots.push({
              time: timeString,
              available: !isConflicted
            });
          }
        }
      });

      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error generating time slots:', error);
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

  const timeToMinutes = (timeString: string): number => {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const minutesToTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  const isDateDisabled = (date: Date) => {
    // Disable past dates
    if (isBefore(date, startOfDay(new Date()))) {
      return true;
    }
    
    // Disable blocked dates
    if (blockedDates.some(blockedDate => isSameDay(date, blockedDate))) {
      return true;
    }
    
    // Disable dates too far in the future (8 weeks)
    const maxDate = addDays(new Date(), 56);
    if (isBefore(maxDate, date)) {
      return true;
    }
    
    return false;
  };

  const formatSelectedService = () => {
    const duration = selectedService.duration_minutes;
    if (duration < 60) {
      return `${duration} Min`;
    }
    const hours = Math.floor(duration / 60);
    const remainingMinutes = duration % 60;
    if (remainingMinutes === 0) {
      return `${hours} Std`;
    }
    return `${hours}h ${remainingMinutes}min`;
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Wählen Sie Datum und Uhrzeit</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">{selectedService.icon}</span>
          <span className="font-medium">{selectedService.name}</span>
          <Badge variant="secondary">{formatSelectedService()}</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={isDateDisabled}
            locale={de}
            className="rounded-md border shadow-sm"
          />
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Verfügbare Zeiten
          </h3>
          
          {!selectedDate && (
            <p className="text-foreground-muted text-center py-8">
              Bitte wählen Sie zunächst ein Datum aus.
            </p>
          )}

          {selectedDate && loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            </div>
          )}

          {selectedDate && !loading && availableSlots.length === 0 && (
            <p className="text-foreground-muted text-center py-8">
              Keine verfügbaren Termine an diesem Tag.
            </p>
          )}

          {selectedDate && !loading && availableSlots.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {availableSlots.map((slot) => (
                <Button
                  key={slot.time}
                  variant={slot.available ? "outline" : "ghost"}
                  disabled={!slot.available}
                  onClick={() => onDateTimeSelect(selectedDate, slot.time)}
                  className="justify-center"
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          )}

          {selectedDate && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm">
              <p className="font-medium mb-2">
                {isToday(selectedDate) ? 'Heute' : format(selectedDate, 'EEEE, d. MMMM yyyy', { locale: de })}
              </p>
              <p className="text-foreground-muted">
                Alle Zeiten sind in Deutschland (MEZ/MESZ). 
                Sie erhalten eine Bestätigung per E-Mail mit allen Details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};