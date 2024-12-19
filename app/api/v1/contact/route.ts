import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function PUT(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { message: "Email and message fields are required." },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
      console.error("Email environment variables not set.");
      return NextResponse.json(
        { message: "Server email configuration is incomplete." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `Message from Portfolio by ${email}`,
      text: message,
    });

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
