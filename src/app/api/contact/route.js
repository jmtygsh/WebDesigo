import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {

        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' });
        }
        
        const { name, email, message } = await req.json();

        if (!name || !email || !message || !token) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }


        try {
            const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            });

            const recaptchaData = await response.json();

            // For reCAPTCHA v2, we just check the 'success' property.
            // There is no score.
            if (recaptchaData.success) {
                // SUCCESS: The token is valid.
                // Proceed with your form logic (e.g., send an email).
                // Configure the transporter for Nodemailer
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: Number(process.env.SMTP_PORT),
                    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                });

                // Send the notification email to yourself
                const mailOptionsToAdmin = {
                    from: `"${name}" <${email}>`, // Use user's email as sender
                    to: process.env.YOUR_EMAIL_ADDRESS,
                    subject: 'New Message from Contact Form',
                    html: `<p>You have a new message from:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
                };

                // Send the auto-reply confirmation email to the user
                const mailOptionsToUser = {
                    from: `"Your Company Name" <${process.env.SMTP_USER}>`,
                    to: email,
                    subject: 'We have received your message!',
                    html: `<h1>Thank you, ${name}!</h1>
             <p>We've received your message and will get back to you as soon as possible.</p>
             <p>Best regards,<br/>The Team</p>`,
                };

                // Send both emails
                await transporter.sendMail(mailOptionsToAdmin);
                await transporter.sendMail(mailOptionsToUser);

                return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });

            } else {
                // FAILURE: The token is invalid.
                return NextResponse.json({ error: 'reCAPTCHA verification failed.' }, { status: 400 });
            }
        } catch {
            console.error('reCAPTCHA response error:', error);
            return NextResponse.json({ error: 'reCAPTCHA response error' }, { status: 500 });
        }


    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}