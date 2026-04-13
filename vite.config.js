import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendNewsletterWelcome } from './lib/sendNewsletterWelcome.js'

/** Dev-only: same `/api/subscribe` as production so `npm run dev` can send mail with .env.local RESEND_* */
function newsletterDevApi() {
  return {
    name: 'newsletter-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split('?')[0]
        if (path !== '/api/subscribe') return next()

        if (req.method === 'OPTIONS') {
          res.statusCode = 204
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
          return res.end()
        }

        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify({ error: 'Method not allowed' }))
        }

        const chunks = []
        for await (const chunk of req) chunks.push(chunk)
        let body = {}
        try {
          body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
        } catch {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify({ error: 'Invalid JSON body' }))
        }

        const email = typeof body.email === 'string' ? body.email.trim() : ''
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify({ error: 'Invalid email address' }))
        }

        const mode = server.config.mode
        const root = server.config.root || process.cwd()
        const env = loadEnv(mode, root, '')

        const result = await sendNewsletterWelcome({
          toEmail: email,
          apiKey: env.RESEND_API_KEY,
          from: env.RESEND_FROM,
          replyTo: env.RESEND_REPLY_TO,
          bccRaw: env.RESEND_SUBSCRIBE_BCC,
          waNum: env.WHATSAPP_NUMBER,
          waMsg: env.WHATSAPP_MESSAGE,
        })

        res.setHeader('Content-Type', 'application/json')
        if (!result.ok) {
          if (result.detail) console.error('[subscribe dev]', result.detail)
          res.statusCode = result.status
          return res.end(JSON.stringify({ error: result.message }))
        }
        res.statusCode = 200
        return res.end(JSON.stringify({ ok: true }))
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), newsletterDevApi()],
})
