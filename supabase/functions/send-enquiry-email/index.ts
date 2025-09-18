import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  property: string;
  message: string;
}

interface ResourcesFormData {
  name: string;
  email: string;
  suburb: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data } = await req.json();

    let emailContent = "";
    let subject = "";

    if (type === "contact") {
      const formData = data as ContactFormData;
      subject = "New Contact Form Submission - Hostworthy";
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Property Location:</strong> ${formData.property}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>Submitted from: Hostworthy Contact Form</em></p>
      `;
    } else if (type === "resources") {
      const formData = data as ResourcesFormData;
      subject = "New Report Download Request - Hostworthy";
      emailContent = `
        <h2>New Report Download Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Property Suburb:</strong> ${formData.suburb || "Not provided"}</p>
        <hr>
        <p><em>Submitted from: Hostworthy Resources Page</em></p>
      `;
    }

    console.log("Sending email with subject:", subject);

    const emailResponse = await resend.emails.send({
      from: "Hostworthy Website <onboarding@resend.dev>",
      to: ["hello@hostworthy.com.au"],
      subject: subject,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-enquiry-email function:", error);
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