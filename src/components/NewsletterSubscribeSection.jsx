import { useState, useEffect } from 'react'
import { getWhatsAppUrl } from '../config'
import {
  isNewsletterSubscribed,
  markNewsletterSubscribed,
  postNewsletterSubscription,
  validateNewsletterEmail,
  NEWSLETTER_IFRAME_NAME,
  NEWSLETTER_STORAGE_SUBSCRIBED,
  NEWSLETTER_SUBSCRIBED_EVENT,
} from '../newsletter'

export default function NewsletterSubscribeSection() {
  const [subscribed, setSubscribed] = useState(() =>
    typeof window !== 'undefined' && isNewsletterSubscribed()
  )
  const [justJoined, setJustJoined] = useState(false)
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const syncFromStorage = () => setSubscribed(isNewsletterSubscribed())
    syncFromStorage()
    window.addEventListener(NEWSLETTER_SUBSCRIBED_EVENT, syncFromStorage)
    const onStorage = (e) => {
      if (e.key === NEWSLETTER_STORAGE_SUBSCRIBED) syncFromStorage()
    }
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener(NEWSLETTER_SUBSCRIBED_EVENT, syncFromStorage)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    const msg = validateNewsletterEmail(email)
    if (msg) {
      setError(msg)
      return
    }
    setBusy(true)
    postNewsletterSubscription(email, NEWSLETTER_IFRAME_NAME)
      .then(() => {
        setBusy(false)
        setJustJoined(true)
        markNewsletterSubscribed()
      })
      .catch((err) => {
        setBusy(false)
        setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      })
  }

  const showThanks = subscribed || justJoined

  return (
    <section className="newsletter-strip" id="newsletter" aria-labelledby="newsletter-strip-heading">
      <div className="container newsletter-strip-inner">
        {showThanks ? (
          <div className="newsletter-strip-thanks">
            <p className="newsletter-strip-eyebrow">Newsletter</p>
            <h2 id="newsletter-strip-heading">You&apos;re on the list</h2>
            <p className="newsletter-strip-lead">
              Thanks — we&apos;ll send rainy-season tips and Shoevera updates to your inbox. Questions?{' '}
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            <div className="newsletter-strip-copy">
              <p className="newsletter-strip-eyebrow">Newsletter</p>
              <h2 id="newsletter-strip-heading">Subscribe for tips &amp; drops</h2>
              <p className="newsletter-strip-lead">
                Missed the pop-up? Same list — rainy-season hacks, restock heads-ups, and short reads from the Shoevera community.
              </p>
            </div>
            <form className="newsletter-strip-form" onSubmit={onSubmit} noValidate>
              <div className="newsletter-strip-fields">
                <label htmlFor="newsletter-strip-email" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter-strip-email"
                  type="email"
                  name="EMAIL"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-strip-input"
                  disabled={busy}
                />
                <button type="submit" className="btn-premium btn-premium-glow newsletter-strip-submit" disabled={busy}>
                  {busy ? 'Joining…' : 'Subscribe'}
                </button>
              </div>
              {error ? <p className="newsletter-strip-error">{error}</p> : null}
            </form>
          </>
        )}
      </div>
    </section>
  )
}
