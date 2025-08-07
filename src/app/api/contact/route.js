import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        }
      );

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
          subject: "New Message from Contact Form",
          html: `<p>You have a new message from:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
        };

        // Send the auto-reply confirmation email to the user
        const mailOptionsToUser = {
          from: `"WebDesigo" <${process.env.SMTP_USER}>`,
          to: email,
          subject: "We have received your message!",
          html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #e0e0e0;">
      <!-- Logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://Webdesigo.com/websigo.svg" alt="WebDesigo Logo" style="width: 120px;" />
      </div>

      <!-- Greeting -->
      <h2 style="color: #333;">Hello ${name},</h2>

      <!-- Message -->
      <p style="font-size: 16px; color: #555;">
        Thank you for contacting <strong>WebDesigo</strong>. We’ve received your message and a member of our team will get back to you as soon as possible.
      </p>

      <p style="font-size: 16px; color: #555;">
        In the meantime, feel free to explore our website or reach out to us directly if it’s urgent.
      </p>

      <!-- Contact Info -->
      <div style="margin-top: 20px;">
        <p style="font-size: 16px; color: #555; margin-bottom: 5px;"><strong>📞 Phone:</strong> <a href="tel:+1234567890" style="color: #007bff; text-decoration: none;">+1 (234) 567-890</a></p>
        <p style="font-size: 16px; color: #555; margin-bottom: 5px;"><strong>🌐 Website:</strong> <a href="https://www.webdesigo.com" target="_blank" style="color: #007bff; text-decoration: none;">www.webdesigo.com</a></p>
        <p style="font-size: 16px; color: #555;"><strong>📧 Email:</strong> <a href="mailto:thewebdesigo@gmail.com" style="color: #007bff; text-decoration: none;">thewebdesigo@gmail.com</a></p>
      </div>

      <!-- Footer -->
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

      <div style="font-size: 12px; color: #aaa; text-align: center;">
        &copy; ${new Date().getFullYear()} WebDesigo. All rights reserved.<br/>
        You are receiving this email because you contacted us via our website.
      </div>
    </div>
  `,
        };
        

        // Send both emails
        await transporter.sendMail(mailOptionsToAdmin);
        await transporter.sendMail(mailOptionsToUser);

        return NextResponse.json(
          { message: "Emails sent successfully!" },
          { status: 200 }
        );
      } else {
        // FAILURE: The token is invalid.
        return NextResponse.json(
          { error: "reCAPTCHA verification failed." },
          { status: 400 }
        );
      }
    } catch {
      console.error("reCAPTCHA response error:", error);
      return NextResponse.json(
        { error: "reCAPTCHA Failed" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
