-- Fix critical security issue: Remove public access to all appointments
-- Only allow users to view appointments where their authenticated email matches the customer_email

DROP POLICY IF EXISTS "Users can view their own appointments by email" ON public.appointments;

CREATE POLICY "Users can view their own appointments by email"
ON public.appointments
FOR SELECT
USING (customer_email = ((current_setting('request.jwt.claims'::text, true))::json ->> 'email'::text));