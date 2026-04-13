/**
 * Shared Resend send (used by Vercel `api/subscribe` and Vite dev middleware).
 * @param {object} p
 * @param {string} p.toEmail
 * @param {string} p.apiKey
 * @param {string} p.from
 * @param {string} [p.replyTo]
 * @param {string} [p.bccRaw] comma-separated BCC addresses
 * @param {string} [p.waNum]
 * @param {string} [p.waMsg] plain text for wa.me (not pre-encoded)
 * @returns {Promise<{ ok: true } | { ok: false, status: number, message: string, detail?: string }>}
 */
export async function sendNewsletterWelcome(p) {
  const {
    toEmail,
    apiKey,
    from,
    replyTo,
    bccRaw,
    waNum = '256705145159',
    waMsg = 'Hi, I want to order Shoevera',
  } = p

  if (!apiKey || !from) {
    return {
      ok: false,
      status: 503,
      message:
        'Email is not configured: add RESEND_API_KEY and RESEND_FROM (e.g. in .env.local for npm run dev, or Vercel project env).',
    }
  }

  const waNumClean = String(waNum).replace(/\D/g, '')
  const waUrl = `https://wa.me/${waNumClean}?text=${encodeURIComponent(waMsg)}`

  const html = `<!DOCTYPE html>
<html>
<body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#111;max-width:560px;margin:0;padding:24px;">
  <p style="font-size:18px;font-weight:700;color:#0a0a0a;">You're in — welcome to Shoevera</p>
  <p>Hi there,</p>
  <p>Thanks for joining the list. You'll get short emails with rainy-season tips, restock heads-ups, and notes from people who already wear Shoevera — not spam.</p>
  <p><strong>Next step:</strong> if you want to order or ask about fit, message us on WhatsApp — we reply fast.</p>
  <p><a href="${waUrl}" style="display:inline-block;background:#25D366;color:#fff;padding:12px 20px;border-radius:999px;text-decoration:none;font-weight:600;">Chat on WhatsApp</a></p>
  <p style="color:#666;font-size:14px;">— Shoevera</p>
</body>
</html>`

  const payload = {
    from,
    to: toEmail,
    subject: "You're in — welcome to Shoevera",
    html,
  }
  if (replyTo) payload.reply_to = replyTo

  if (bccRaw) {
    const bcc = String(bccRaw)
      .split(',')
      .map((s) => s.trim())
      .filter((s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))
    if (bcc.length === 1) payload.bcc = bcc[0]
    else if (bcc.length > 1) payload.bcc = bcc
  }

  const sendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!sendRes.ok) {
    const detail = await sendRes.text()
    return {
      ok: false,
      status: 502,
      message:
        'Could not send email. In resend.com check API key, verify your domain, and that RESEND_FROM uses that domain (or Resend’s test sender rules).',
      detail,
    }
  }

  return { ok: true }
}
