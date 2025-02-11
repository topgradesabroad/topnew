import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'apply@topgradesabroad.com', // Use your verified domain
      to: [process.env.YOUR_EMAIL_ADDRESS!], // Your email address
      subject: 'New Student Inquiry',
      html: `
        <h3>New Student Details</h3>
        <p><strong>Full Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Mobile:</strong> ${body.mobile}</p>
        <p><strong>Preferred Country:</strong> ${body.country}</p>
        <p><strong>Preferred Course:</strong> ${body.course}</p>
        <p><strong>Education Level:</strong> ${body.educationLevel}</p>
      `
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    });
  }
}