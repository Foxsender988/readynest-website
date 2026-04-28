import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.service) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, service" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    await resend.emails.send({
      from: "ReadyNest Website <noreply@readynestpa.com>",
      to: "info@readynestpa.com",
      subject: `New Quote Request from ${body.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B8975A; border-bottom: 2px solid #B8975A; padding-bottom: 8px;">
            New Quote Request — ReadyNest
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px; background: #F7F4EF; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #E8E5E0;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #F7F4EF; font-weight: bold;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #E8E5E0;">
                <a href="mailto:${body.email}">${body.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #F7F4EF; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #E8E5E0;">
                ${body.phone ? `<a href="tel:${body.phone}">${body.phone}</a>` : "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #F7F4EF; font-weight: bold;">Service</td>
              <td style="padding: 10px; border-bottom: 1px solid #E8E5E0;">${body.service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #F7F4EF; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 10px;">${body.message ?? "No message provided"}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #888; font-size: 13px;">
            Sent from the ReadyNestPA.com contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message received. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
