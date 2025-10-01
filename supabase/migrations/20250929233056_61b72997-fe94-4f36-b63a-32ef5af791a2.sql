-- Fix critical security vulnerability: Strengthen authentication checks for appointments access
-- Ensure only properly authenticated users can access their own appointment data

-- Drop the existing vulnerable policy
DROP POLICY IF EXISTS "Users can view their own appointments by email" ON public.appointments;

-- Create a more secure policy that:
-- 1. Requires user to be authenticated (auth.uid() IS NOT NULL)
-- 2. Verifies the authenticated user's email matches the customer_email
-- 3. Uses auth.email() function which is more secure than extracting from JWT claims manually
CREATE POLICY "Authenticated users can view only their own appointments"
ON public.appointments
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND customer_email = auth.email()
);

-- Also strengthen the INSERT policy to ensure only authenticated users can create appointments
-- and that they can only use their own email address
DROP POLICY IF EXISTS "Anyone can create appointments" ON public.appointments;

CREATE POLICY "Authenticated users can create appointments with their own email"
ON public.appointments
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND customer_email = auth.email()
);