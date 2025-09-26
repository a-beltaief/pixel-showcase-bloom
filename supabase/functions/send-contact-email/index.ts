import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    console.log("Starting contact email processing...");

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { name, email, message }: ContactEmailRequest = await req.json();

    // Validate input
    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, or message");
    }

    if (name.length > 100) {
      throw new Error("Name must be less than 100 characters");
    }

    if (message.length > 1000) {
      throw new Error("Message must be less than 1000 characters");
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    console.log(`Processing contact form submission from: ${email}`);

    // Store in database
    const { data: submissionData, error: dbError } = await supabaseClient
      .from("contact_submissions")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        status: "new"
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Contact submission stored in database:", submissionData.id);

    // Send email notification to info@princeberg.com
    const emailResponse = await resend.emails.send({
      from: "Princeberg Contact <onboarding@resend.dev>", // You'll update this once domain is verified
      to: ["info@princeberg.com"],
      reply_to: email, // User can reply directly to the sender
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Princeberg Website</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Kontaktdaten</h2>
              <p style="margin: 15px 0 5px 0; color: #666;"><strong>Name:</strong></p>
              <p style="margin: 0 0 15px 0; color: #333; font-size: 16px;">${name}</p>
              
              <p style="margin: 15px 0 5px 0; color: #666;"><strong>E-Mail:</strong></p>
              <p style="margin: 0 0 15px 0; color: #333; font-size: 16px;">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Nachricht</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea; margin-top: 15px;">
                <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: white; font-size: 14px;">
                <strong>💡 Tipp:</strong> Sie können direkt auf diese E-Mail antworten, um ${name} zu kontaktieren.
              </p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 6px; text-align: center; border: 1px solid #bbdefb;">
              <p style="margin: 0; color: #1565c0; font-size: 12px;">
                Eingegangen am: ${new Date().toLocaleString("de-DE", { 
                  timeZone: "Europe/Berlin",
                  year: "numeric",
                  month: "long", 
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })} (MEZ)
              </p>
              <p style="margin: 5px 0 0 0; color: #1565c0; font-size: 12px;">
                Referenz-ID: ${submissionData.id.slice(0, 8)}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      throw new Error(`Email sending failed: ${emailResponse.error.message}`);
    }

    console.log("Email sent successfully:", emailResponse.data?.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Kontaktanfrage erfolgreich versendet",
        submissionId: submissionData.id,
        emailId: emailResponse.data?.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "Ein unerwarteter Fehler ist aufgetreten",
        success: false
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);