-- Create contact_submissions table for storing contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  replied_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy allowing public to insert (no auth required for contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy preventing public read access (only admin should see submissions)
CREATE POLICY "No public read access to contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

-- Add index for better performance on created_at
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- Add constraint for status values
ALTER TABLE public.contact_submissions 
ADD CONSTRAINT contact_submissions_status_check 
CHECK (status IN ('new', 'replied', 'archived'));