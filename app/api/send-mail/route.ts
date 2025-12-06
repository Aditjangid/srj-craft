import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json(
            { message: "Missing required fields" },
            { status: 400 }
        );
    }

    // THIS EMAIL ACCOUNT SENDS THE MAIL
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER, // e.g. no-reply@srjcraft.com
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: `"SRJCraft Website" <${process.env.SMTP_USER}>`,
        to: "neeraj@srjcraft.com",
        replyTo: email, // client's email (from form)
        subject: "New Website Inquiry",
        text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "-"}
        Message:
        ${message}
        `,
    });


    return NextResponse.json({
        message: "Message sent successfully",
    });
}
