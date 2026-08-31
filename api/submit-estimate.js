// Vercel serverless function: receives the homepage estimate form submission
// and sends a notification email via the Resend API.
//
// Requires an environment variable set in Vercel (Project Settings -> Environment
// Variables), NOT committed to this repo:
//   RESEND_API_KEY   - your Resend API key (starts with "re_")
//
// Optional:
//   RESEND_FROM      - verified sender address, e.g. "Fort Myers Window
//                       Replacements <leads@fortmyerswindowreplacements.com>"
//                       Defaults to Resend's shared test sender, which only
//                       works reliably until you verify your own domain.

const TO_EMAIL = 'John@repeatclose.com';
const DEFAULT_FROM = 'Fort Myers Window Replacements <onboarding@resend.dev>';

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
  }

  const { name, phone, email, message, service } = body || {};

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  // Basic email sanity check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  const html = `
    <h2>New Estimate Request &mdash; Fort Myers Window Replacements</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
      <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
      <tr><td><strong>Email</strong></td><td>${safeEmail}</td></tr>
      <tr><td><strong>Service Requested</strong></td><td>${safeService || 'Not specified'}</td></tr>
      <tr><td valign="top"><strong>Message</strong></td><td>${safeMessage || '<em>(none)</em>'}</td></tr>
    </table>
    <p style="color:#888;font-size:12px;">Submitted from the free estimate form at fortmyerswindowreplacements.com</p>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || DEFAULT_FROM,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New Estimate Request — ${name}`,
        html: html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend API error:', resendRes.status, errText);
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('submit-estimate error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
