import { NEWSLETTER_FORM_ACTION, NEWSLETTER_API_URL } from './config'

export const NEWSLETTER_STORAGE_SUBSCRIBED = 'shoevera_nl_subscribed'
export const NEWSLETTER_STORAGE_DISMISSED = 'shoevera_nl_dismissed'
export const NEWSLETTER_IFRAME_NAME = 'shoevera_nl_iframe'
/** Fired on `window` after a successful subscribe (same tab), so inline UI can update. */
export const NEWSLETTER_SUBSCRIBED_EVENT = 'shoevera-newsletter-subscribed'

export function isNewsletterSubscribed() {
  try {
    return localStorage.getItem(NEWSLETTER_STORAGE_SUBSCRIBED) === '1'
  } catch {
    return false
  }
}

export function markNewsletterSubscribed() {
  try {
    localStorage.setItem(NEWSLETTER_STORAGE_SUBSCRIBED, '1')
  } catch {
    /* ignore quota / private mode */
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(NEWSLETTER_SUBSCRIBED_EVENT))
  }
}

/** @returns {string | null} error message or null if valid */
export function validateNewsletterEmail(email) {
  const trimmed = String(email).trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return 'Please enter a valid email address.'
  }
  return null
}

/** Mailchimp / hosted list POST (hidden iframe). */
function postHostedListForm(trimmed, iframeName) {
  if (!NEWSLETTER_FORM_ACTION || typeof document === 'undefined') {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    const form = document.createElement('form')
    form.action = NEWSLETTER_FORM_ACTION
    form.method = 'post'
    form.target = iframeName
    form.style.display = 'none'
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = 'EMAIL'
    input.value = trimmed
    form.appendChild(input)
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
    window.setTimeout(resolve, 1200)
  })
}

/**
 * Subscribe flow:
 * - If NEWSLETTER_API_URL: POST to /api/subscribe (Resend welcome + optional BCC). If VITE_NEWSLETTER_FORM_ACTION is also set, then posts to the list (dual).
 * - Else if NEWSLETTER_FORM_ACTION only: hosted list form.
 * - Else: short delay (UI-only).
 * @param {string} email
 * @param {string} iframeName
 * @returns {Promise<void>}
 */
export async function postNewsletterSubscription(email, iframeName) {
  const trimmed = String(email).trim()

  if (NEWSLETTER_API_URL) {
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const url = NEWSLETTER_API_URL.startsWith('http')
      ? NEWSLETTER_API_URL
      : `${origin}${NEWSLETTER_API_URL.startsWith('/') ? '' : '/'}${NEWSLETTER_API_URL}`
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: trimmed }),
    })
    let data = {}
    const ct = res.headers.get('content-type') || ''
    if (ct.includes('application/json')) {
      try {
        data = await res.json()
      } catch {
        /* ignore */
      }
    }
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(
          'Newsletter API not found (404). Use Vercel for deploy, or for local dev create .env.local with RESEND_API_KEY and RESEND_FROM, then restart npm run dev.',
        )
      }
      if (res.status === 503) {
        throw new Error(
          typeof data.error === 'string'
            ? data.error
            : 'Email is not configured: add RESEND_API_KEY and RESEND_FROM to .env.local (dev) or Vercel env.',
        )
      }
      throw new Error(typeof data.error === 'string' ? data.error : `Subscribe failed (${res.status})`)
    }
    if (NEWSLETTER_FORM_ACTION) {
      await postHostedListForm(trimmed, iframeName)
    }
    return
  }

  if (NEWSLETTER_FORM_ACTION) {
    await postHostedListForm(trimmed, iframeName)
    return
  }

  await new Promise((r) => setTimeout(r, 400))
}
