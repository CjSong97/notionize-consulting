import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, contactType, ...additionalFields } = body;

    // Format additional fields for the email
    const additionalFieldsHtml = Object.entries(additionalFields)
      .filter(([_, value]) => value) // Only include fields with values
      .map(([key, value]) => {
        // Format the key to be more readable
        const formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
        
        return `<p><strong>${formattedKey}:</strong> ${value}</p>`;
      })
      .join('');

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You can change this to your domain after setting it up
      to: 'notionizeconsulting@gmail.com',
      subject: `New ${contactType} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New ${contactType} Form Submission</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 1rem; border-radius: 0.375rem;">
            ${message.replace(/\n/g, '<br>')}
          </p>
          ${additionalFieldsHtml}
          <p style="margin-top: 1.5rem; font-size: 0.875rem; color: #6b7280;">
            This email was sent from the contact form on your website.
          </p>
        </div>
      `,
      text: `
        New ${contactType} Form Submission
        
        From: ${name} <${email}>
        
        Message:
        ${message}
        
        ${Object.entries(additionalFields)
          .filter(([_, value]) => value)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n')}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
