-- Create appointment types table
CREATE TABLE public.appointment_types (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  duration_minutes INTEGER NOT NULL,
  price_cents INTEGER DEFAULT 0,
  description TEXT,
  icon TEXT,
  color TEXT DEFAULT 'primary',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create availability settings table
CREATE TABLE public.availability_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0 = Sunday, 1 = Monday, etc.
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(day_of_week, start_time, end_time)
);

-- Create blocked dates table for holidays/vacation
CREATE TABLE public.blocked_dates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blocked_date DATE NOT NULL,
  reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(blocked_date)
);

-- Create appointments table
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  appointment_type_id UUID NOT NULL REFERENCES public.appointment_types(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  customer_company TEXT,
  customer_website TEXT,
  project_description TEXT,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'completed', 'no_show')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.appointment_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_dates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create policies for appointment_types (public read access)
CREATE POLICY "Anyone can view active appointment types"
ON public.appointment_types
FOR SELECT
USING (is_active = true);

-- Create policies for availability_settings (public read access)
CREATE POLICY "Anyone can view availability settings"
ON public.availability_settings
FOR SELECT
USING (is_available = true);

-- Create policies for blocked_dates (public read access)
CREATE POLICY "Anyone can view blocked dates"
ON public.blocked_dates
FOR SELECT
USING (true);

-- Create policies for appointments
CREATE POLICY "Anyone can create appointments"
ON public.appointments
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Users can view their own appointments by email"
ON public.appointments
FOR SELECT
USING (customer_email = current_setting('request.jwt.claims', true)::json->>'email' OR customer_email IS NOT NULL);

-- Insert default appointment types
INSERT INTO public.appointment_types (name, duration_minutes, price_cents, description, icon) VALUES
('Kostenlose Erstberatung', 15, 0, 'Unverbindliche Beratung zu Ihrem Projekt. Wir besprechen Ihre Ziele und Möglichkeiten.', '📞'),
('Projektbesprechung', 60, 0, 'Detaillierte Besprechung Ihres Projekts mit Konzept-Entwicklung und Planung.', '💻'),
('Website-Check & Optimierung', 45, 0, 'Analyse Ihrer bestehenden Website mit konkreten Verbesserungsvorschlägen.', '🔧'),
('SEO-Analyse & Strategie', 90, 0, 'Umfassende SEO-Analyse mit detaillierter Strategie für bessere Rankings.', '📈');

-- Insert default availability settings (MO-DO: 11:00-16:00, FR: 10:00-11:00 + 15:00-16:00)
INSERT INTO public.availability_settings (day_of_week, start_time, end_time) VALUES
-- Monday to Thursday: 11:00-16:00
(1, '11:00:00', '16:00:00'),
(2, '11:00:00', '16:00:00'),
(3, '11:00:00', '16:00:00'),
(4, '11:00:00', '16:00:00'),
-- Friday: 10:00-11:00 and 15:00-16:00
(5, '10:00:00', '11:00:00'),
(5, '15:00:00', '16:00:00');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_appointments_updated_at
BEFORE UPDATE ON public.appointments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();