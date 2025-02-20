// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate all required fields
    if (!body.name || !body.email || !body.phone || !body.country || !body.course) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please fill in all required fields' 
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'apply@mail.topgradesabroad.com',
      to: [process.env.YOUR_EMAIL_ADDRESS!],
      subject: 'New Study Abroad Application',
      html: `
        <h2>New Study Abroad Application</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Preferred Country:</strong> ${body.country}</p>
        <p><strong>Course Interest:</strong> ${body.course}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to send application. Please try again.' 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true,
      message: "Thank you for your application! We'll be in touch soon."
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}