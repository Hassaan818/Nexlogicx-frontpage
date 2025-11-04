import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').toLowerCase());
}

function validateFields(body) {
  const errors = {};
  const fullName = String(body.fullName || '').trim();
  const email = String(body.email || '').trim();
  const subject = String(body.subject || '').trim();
  const message = String(body.message || '').trim();
  const captcha = String(body.captcha || '').trim();

  if (!fullName || fullName.length < 2 || fullName.length > 100) errors.fullName = 'Full name is required (2-100 chars).';
  if (!email || !isEmail(email)) errors.email = 'Valid email is required.';
  if (!subject || subject.length < 1 || subject.length > 150) errors.subject = 'Subject is required (1-150 chars).';
  if (!message || message.length < 10 || message.length > 5000) errors.message = 'Message is required (10-5000 chars).';
  if (!captcha) errors.captcha = 'CAPTCHA token is required.';

  return { valid: Object.keys(errors).length === 0, errors, values: { fullName, email, subject, message, captcha } };
}

async function verifyRecaptcha(token, remoteip) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: false, reason: 'Missing RECAPTCHA secret' };

  const params = new URLSearchParams();
  params.append('secret', secret);
  params.append('response', token);
  if (remoteip) params.append('remoteip', remoteip);

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });

  if (!res.ok) return { ok: false, reason: 'Verification request failed' };
  const data = await res.json();
  if (data && data.success) return { ok: true, data };
  return { ok: false, reason: 'CAPTCHA failed', data };
}

function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) throw new Error('Missing SMTP configuration');

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function buildHtml({ fullName, email, subject, message }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;background-color:#f4f7fa;">
  <table role="presentation" style="width:100%;border-collapse:collapse;background-color:#f4f7fa;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" style="max-width:600px;width:100%;border-collapse:collapse;background-color:#ffffff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.08);overflow:hidden;">
          <tr>
            <td style="background:#3b82f6;padding:40px 30px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:-0.5px;">New Contact Message</h1>
              <p style="margin:8px 0 0;color:#e0f2fe;font-size:14px;font-weight:400;">Website Contact Form Submission</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;margin-bottom:24px;">
                <tr>
                  <td style="background-color:#eff6ff;border-left:4px solid #3b82f6;border-radius:8px;padding:24px;">
                    <p style="margin:0 0 8px;color:#4a5568;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Contact Details</p>
                    <div style="margin-bottom:20px;">
                      <p style="margin:0 0 4px;color:#718096;font-size:13px;font-weight:600;">Full Name</p>
                      <p style="margin:0;color:#1a202c;font-size:16px;font-weight:500;">${fullName}</p>
                    </div>
                    <div style="margin-bottom:20px;">
                      <p style="margin:0 0 4px;color:#718096;font-size:13px;font-weight:600;">Email Address</p>
                      <p style="margin:0;"><a href="mailto:${email}" style="color:#3b82f6;font-size:16px;font-weight:500;text-decoration:none;">${email}</a></p>
                    </div>
                    <div>
                      <p style="margin:0 0 4px;color:#718096;font-size:13px;font-weight:600;">Subject</p>
                      <p style="margin:0;color:#1a202c;font-size:16px;font-weight:500;">${subject}</p>
                    </div>
                  </td>
                </tr>
              </table>
              <table role="presentation" style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="background-color:#ffffff;border:2px solid #e2e8f0;border-radius:8px;padding:24px;">
                    <p style="margin:0 0 12px;color:#718096;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Message</p>
                    <pre style="margin:0;padding:0;color:#2d3748;font-size:15px;line-height:1.7;text-align:left;white-space:pre-wrap;word-wrap:break-word;font-family:inherit;">${message}</pre>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f7fafc;padding:24px 30px;border-top:1px solid #e2e8f0;">
              <table role="presentation" style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="text-align:center;">
                    <p style="margin:0 0 8px;color:#4a5568;font-size:14px;font-weight:600;">Contact Form</p>
                    <p style="margin:0;color:#718096;font-size:12px;">This message was sent via your website contact form</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request) {
  if (request.method && request.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body.' }, { status: 400 });
  }

  const { valid, errors, values } = validateFields(body);
  if (!valid) {
    return NextResponse.json({ success: false, message: 'Validation failed.', errors }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();

  try {
    const verification = await verifyRecaptcha(values.captcha, ip);
    if (!verification.ok) {
      return NextResponse.json({ success: false, message: 'CAPTCHA verification failed.' }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ success: false, message: 'Error verifying CAPTCHA.' }, { status: 500 });
  }

  const transporter = createTransport();
  const html = buildHtml(values);

  const toAddress = process.env.SMTP_USER;
  const mail = {
    from: process.env.SMTP_USER,
    to: toAddress,
    subject: 'New Contact Submission',
    replyTo: values.email,
    html,
  };

  try {
    await transporter.sendMail(mail);
    return NextResponse.json({ success: true, message: "Thank you for your message! We'll get back to you soon." }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, message: 'Error sending email. Please try again later.' }, { status: 500 });
  }
}
