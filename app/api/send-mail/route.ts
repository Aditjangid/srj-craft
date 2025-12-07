import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // important for Nodemailer

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Gmail SMTP using APP PASSWORD (REQUIRED)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // must be Gmail App Password
      },
    });

await transporter.sendMail({
  from: `"SRJCraft Website" <${process.env.SMTP_USER}>`,
  to: "jangidadit212004@gmail.com",
  replyTo: email,
  subject: "New Website Inquiry",
  html: `
<div style="font-family: 'Inter', Arial, sans-serif; padding: 32px; background: #f5f7fa;">
  <div style="
    max-width: 650px; 
    margin: auto; 
    background: #ffffff; 
    border-radius: 12px; 
    overflow: hidden; 
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  ">

    <!-- HEADER -->
    <div style="
      background: #0f172a; 
      padding: 24px;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.5px;
      border-bottom: 3px solid #3b82f6;
    ">
      New Inquiry - SRJCraft
    </div>

    <!-- BODY -->
    <div style="padding: 28px 32px; color: #1e293b;">

      <p style="font-size: 16px; margin-bottom: 18px; color: #334155;">
        You’ve received a new inquiry from your website.
      </p>

      <!-- GRID FIELDS -->
      <div style="
        display: grid;
        grid-template-columns: 150px auto;
        row-gap: 14px;
        font-size: 15px;
        align-items: center;
      ">

        <!-- NAME -->
        <div style="font-weight: 600; color: #475569;">Name:</div>
        <div>${name}</div>

        <!-- EMAIL -->
        <div style="font-weight: 600; color: #475569;">Email:</div>
        <div>
          ${email}
          <a href="mailto:${email}" 
             style="
               margin-left: 10px;
               background: #3b82f6;
               color: white;
               padding: 6px 12px;
               border-radius: 6px;
               text-decoration: none;
               font-size: 13px;
               font-weight: 600;
             ">
            Mail
          </a>
        </div>

        <!-- PHONE -->
        <div style="font-weight: 600; color: #475569;">Phone:</div>
        <div>
          ${phone || "-"}
          
          <!-- CALL BUTTON -->
          <a href="tel:${phone}" 
             style="
               margin-left: 10px;
               background: #0ea5e9;
               color: white;
               padding: 6px 12px;
               border-radius: 6px;
               text-decoration: none;
               font-size: 13px;
               font-weight: 600;
             ">
            Call
          </a>

          <!-- WHATSAPP BUTTON -->
          <a href="https://wa.me/${phone?.replace(/\D/g, '')}" 
             style="
               margin-left: 8px;
               background: #22c55e;
               color: white;
               padding: 6px 12px;
               border-radius: 6px;
               text-decoration: none;
               font-size: 13px;
               font-weight: 600;
             ">
            WhatsApp
          </a>
        </div>

      </div>

      <!-- MESSAGE BOX -->
      <div style="margin-top: 28px;">
        <div style="font-weight: 600; color: #475569; margin-bottom: 8px;">Message:</div>

        <div style="
          background: #f1f5f9; 
          padding: 18px; 
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
          font-size: 15px;
          white-space: pre-wrap;
          line-height: 1.6;
        ">
          ${message}
        </div>
      </div>

    </div>

    <!-- FOOTER -->
    <div style="
      background: #f8fafc; 
      padding: 16px; 
      text-align: center; 
      color: #64748b; 
      font-size: 13px;
      border-top: 1px solid #e2e8f0;
    ">
      SRJCraft · Automated Notification <br/>
      <span style="color:#94a3b8;">Do not reply to this email.</span>
    </div>

  </div>
</div>

`
,
});


    return NextResponse.json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
