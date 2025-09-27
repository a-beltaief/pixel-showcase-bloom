import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingConfirmationRequest {
  appointment_id: string;
  customer_name: string;
  customer_email: string;
  service_name: string;
  service_duration: number;
  appointment_date: string;
  appointment_time: string;
  service_icon: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const booking: BookingConfirmationRequest = await req.json();
    
    console.log('📅 Booking confirmation request:', booking);

    // Format duration
    const formatDuration = (minutes: number) => {
      if (minutes < 60) {
        return `${minutes} Minuten`;
      }
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours} Stunde${hours > 1 ? 'n' : ''}`;
      }
      return `${hours}h ${remainingMinutes}min`;
    };

    // Format date
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    // Create calendar event (.ics file content)
    const createCalendarEvent = () => {
      const startDateTime = new Date(`${booking.appointment_date}T${booking.appointment_time}:00`);
      const endDateTime = new Date(startDateTime.getTime() + booking.service_duration * 60000);
      
      const formatICSDate = (date: Date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      };

      return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Princeberg//Appointment//DE
BEGIN:VEVENT
UID:appointment-${booking.appointment_id}@princeberg.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDateTime)}
DTEND:${formatICSDate(endDateTime)}
SUMMARY:${booking.service_name} - Princeberg
DESCRIPTION:Termin bei Princeberg\\n\\nService: ${booking.service_name}\\nDauer: ${formatDuration(booking.service_duration)}\\n\\nKontakt: info@princeberg.com
LOCATION:Online (Details folgen per E-Mail)
ORGANIZER;CN=Princeberg:mailto:info@princeberg.com
ATTENDEE;CN=${booking.customer_name}:mailto:${booking.customer_email}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
    };

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Princeberg <info@princeberg.com>",
      to: [booking.customer_email],
      subject: `Terminbestätigung: ${booking.service_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Terminbestätigung</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Ihr Termin bei Princeberg</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 24px;">${booking.service_icon}</span>
                ${booking.service_name}
              </h2>
              
              <div style="background: #f1f5f9; padding: 20px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 5px 0; color: #475569;"><strong>📅 Datum:</strong> ${formatDate(booking.appointment_date)}</p>
                <p style="margin: 5px 0; color: #475569;"><strong>🕐 Uhrzeit:</strong> ${booking.appointment_time} Uhr (MEZ)</p>
                <p style="margin: 5px 0; color: #475569;"><strong>⏱️ Dauer:</strong> ${formatDuration(booking.service_duration)}</p>
                <p style="margin: 5px 0; color: #475569;"><strong>👤 Ansprechpartner:</strong> Princeberg Team</p>
              </div>
              
              <h3 style="color: #333; margin-top: 25px;">Was passiert als nächstes?</h3>
              <ul style="color: #666; line-height: 1.6;">
                <li>Sie erhalten 24 Stunden vor dem Termin eine Erinnerungs-E-Mail</li>
                <li>Die Zugangsdaten für den Video-Call werden separat versendet</li>
                <li>Bei Fragen erreichen Sie uns unter info@princeberg.com</li>
              </ul>
              
              <div style="margin: 25px 0; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
                <p style="margin: 0; color: #92400e;">
                  <strong>Termin ändern oder stornieren:</strong><br>
                  Falls Sie den Termin verschieben oder absagen möchten, antworten Sie einfach auf diese E-Mail. 
                  Stornierungen sind bis 24 Stunden vor dem Termin kostenlos möglich.
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
              <p>Mit freundlichen Grüßen<br><strong>Ihr Princeberg Team</strong></p>
              <p style="margin-top: 15px;">
                📧 info@princeberg.com<br>
                🌐 <a href="https://princeberg.com" style="color: #667eea;">princeberg.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'termin.ics',
          content: btoa(createCalendarEvent()),
        },
      ],
    });

    // Send notification email to Princeberg
    const adminEmailResponse = await resend.emails.send({
      from: "Buchungssystem <info@princeberg.com>",
      to: ["info@princeberg.com"],
      subject: `Neue Terminbuchung: ${booking.service_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1f2937; padding: 20px; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Neue Terminbuchung</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.8;">Buchungsdetails von der Website</p>
          </div>
          
          <div style="padding: 20px; background: #f9fafb;">
            <h2 style="color: #333; margin-top: 0; display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 20px;">${booking.service_icon}</span>
              ${booking.service_name}
            </h2>
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin: 15px 0;">
              <h3 style="color: #333; margin-top: 0;">Kundeninformationen</h3>
              <p><strong>Name:</strong> ${booking.customer_name}</p>
              <p><strong>E-Mail:</strong> ${booking.customer_email}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin: 15px 0;">
              <h3 style="color: #333; margin-top: 0;">Termindetails</h3>
              <p><strong>Datum:</strong> ${formatDate(booking.appointment_date)}</p>
              <p><strong>Uhrzeit:</strong> ${booking.appointment_time} Uhr</p>
              <p><strong>Dauer:</strong> ${formatDuration(booking.service_duration)}</p>
              <p><strong>Buchungs-ID:</strong> ${booking.appointment_id}</p>
            </div>
            
            <div style="background: #dbeafe; padding: 15px; border-radius: 6px; margin: 15px 0;">
              <p style="margin: 0; color: #1e40af;">
                <strong>Nächste Schritte:</strong><br>
                • Termin im Kalender eintragen<br>
                • 24h vor Termin: Video-Call Link an Kunde senden<br>
                • Bei Bedarf Kunde kontaktieren
              </p>
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'termin.ics',
          content: btoa(createCalendarEvent()),
        },
      ],
    });

    console.log('✅ Confirmation emails sent:', {
      customer: customerEmailResponse,
      admin: adminEmailResponse
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        customer_email: customerEmailResponse,
        admin_email: adminEmailResponse
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
    console.error("❌ Error in send-booking-confirmation function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);