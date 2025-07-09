import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ReservationData {
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  numberOfGuests: string;
  creditCardNumber: string;
  expiryDate: string;
  cvv: string;
  specialRequests: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const reservationData: ReservationData = await req.json();
    
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Create email HTML content
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
          New Reservation Request - AppleTree Inn
        </h1>
        
        <p style="background-color: #ecf0f1; padding: 10px; border-radius: 5px; font-weight: bold;">
          Submitted on: ${timestamp}
        </p>
        
        <h2 style="color: #27ae60; margin-top: 30px;">Guest Information</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Guest Name:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reservationData.guestName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reservationData.email}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reservationData.phone}</td>
          </tr>
        </table>
        
        <h2 style="color: #27ae60;">Reservation Details</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Check-in Date:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reservationData.checkIn}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Check-out Date:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reservationData.checkOut}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Room Type:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reservationData.roomType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Number of Guests:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reservationData.numberOfGuests}</td>
          </tr>
        </table>
        
        <h2 style="color: #27ae60;">Payment Information (for room hold)</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Credit Card:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">**** **** **** ${reservationData.creditCardNumber.slice(-4)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Expiry Date:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reservationData.expiryDate}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">CVV:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">***</td>
          </tr>
        </table>
        
        <h2 style="color: #27ae60;">Special Requests</h2>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3498db;">
          ${reservationData.specialRequests || 'None'}
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;">
          <p style="margin: 0; font-weight: bold; color: #856404;">
            📝 Important Note: This reservation request requires confirmation. Please contact the guest to confirm availability and finalize the booking.
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px;">
          <p>This email was automatically generated from the AppleTree Inn website reservation form.</p>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "AppleTree Inn <onboarding@resend.dev>",
      to: ["appletreeks2016@gmail.com"],
      subject: "New Reservation Request - AppleTree Inn",
      html: emailHTML,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-reservation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);