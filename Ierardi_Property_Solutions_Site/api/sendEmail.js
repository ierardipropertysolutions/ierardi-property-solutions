
import { Resend } from 'resend';

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Ierardi Property Solutions <no-reply@ips.com>",
      to: "ierardipropertysolutions@gmail.com",
      subject: "New Contact Submission",
      html: `<p><strong>Name:</strong> ${req.body.Name}</p>
             <p><strong>Email:</strong> ${req.body.Email}</p>
             <p><strong>Message:</strong> ${req.body.Message}</p>`
    });
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ error: "Email failed" });
  }
}
