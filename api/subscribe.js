/**
 * Vercel serverless: sends welcome email via Resend.
 * Env: RESEND_API_KEY, RESEND_FROM (required); RESEND_REPLY_TO, RESEND_SUBSCRIBE_BCC, WHATSAPP_NUMBER, WHATSAPP_MESSAGE (optional).
 */

import { sendNewsletterWelcome } from '../lib/sendNewsletterWelcome.js'

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        resolve(raw ? JSON.parse(raw) : {})
      } catch (e) {
        reject(e)
      }
    })
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')

  if (req.method !== 'POST') {
    res.statusCode = req.method === 'OPTIONS' ? 204 : 405
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    }
    return res.end(req.method === 'OPTIONS' ? '' : JSON.stringify({ error: 'Method not allowed' }))
  }

  let body
  try {
    body = await readJsonBody(req)
  } catch {
    res.statusCode = 400
    return res.end(JSON.stringify({ error: 'Invalid JSON body' }))
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.statusCode = 400
    return res.end(JSON.stringify({ error: 'Invalid email address' }))
  }

  const result = await sendNewsletterWelcome({
    toEmail: email,
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.RESEND_FROM,
    replyTo: process.env.RESEND_REPLY_TO,
    bccRaw: process.env.RESEND_SUBSCRIBE_BCC,
    waNum: process.env.WHATSAPP_NUMBER,
    waMsg: process.env.WHATSAPP_MESSAGE,
  })

  if (!result.ok) {
    if (result.detail) console.error('[subscribe] Resend', result.detail)
    res.statusCode = result.status
    return res.end(JSON.stringify({ error: result.message }))
  }

  res.statusCode = 200
  return res.end(JSON.stringify({ ok: true }))
}
