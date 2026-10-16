import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType, fullName, email, message, destination, travelDate, guests } = body;

    if (!fullName || !email) {
      return NextResponse.json({ success: false, error: "Missing required core contact credentials." }, { status: 400 });
    }

    // Contextual HTML formatting templates matching your layout guidelines
    const emailHtml = formType === 'booking' 
      ? `
        <div style="font-family: sans-serif; padding: 24px; color: #0D0F12; max-width: 600px; border: 1px solid #f1f5f9; border-radius: 16px;">
          <h2 style="color: #E5A922; margin-bottom: 4px; text-transform: uppercase; font-size: 18px; tracking: -0.05em;">New Booking Dispatch</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 0; margin-bottom: 24px;">Papouasie Travel&Tour Agency Operations Portal</p>
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 20px;" />
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Lead Client Name:</strong> ${fullName}</p>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Contact Email Address:</strong> ${email}</p>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Selected Destination:</strong> ${destination}</p>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Target Departure Date:</strong> ${travelDate}</p>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Configured Seats / Guests:</strong> ${guests}</p>
        </div>
      `
      : `
        <div style="font-family: sans-serif; padding: 24px; color: #0D0F12; max-width: 600px; border: 1px solid #f1f5f9; border-radius: 16px;">
          <h2 style="color: #E5A922; margin-bottom: 4px; text-transform: uppercase; font-size: 18px; tracking: -0.05em;">New Advisory Enquiry</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 0; margin-bottom: 24px;">Papouasie Travel&Tour Agency Operations Portal</p>
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 20px;" />
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Client Identity Reference:</strong> ${fullName}</p>
          <p style="font-size: 14px; margin-bottom: 16px;"><strong>Contact Email Address:</strong> ${email}</p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0;">
            <p style="font-size: 13px; margin-top: 0; font-weight: bold; color: #475569;">Enquiry Details:</p>
            <p style="font-size: 13px; line-height: 1.6; margin-bottom: 0; color: #0D0F12;">${message}</p>
          </div>
        </div>
      `;

    const data = await resend.emails.send({
      from: 'Papouasie Portal <operations@yourverifieddomain.com>',
      to: ['operations@yourverifieddomain.com'],
      subject: formType === 'booking' ? `🚨 BOOKING REQUEST: ${fullName}` : `✉️ NEW GENERAL ENQUIRY: ${fullName}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
