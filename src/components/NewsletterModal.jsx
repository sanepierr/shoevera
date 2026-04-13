import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getWhatsAppUrl, EMAIL } from '../config'
import {
  isNewsletterSubscribed,
  markNewsletterSubscribed,
  postNewsletterSubscription,
  validateNewsletterEmail,
  NEWSLETTER_IFRAME_NAME,
  NEWSLETTER_STORAGE_DISMISSED,
} from '../newsletter'
const SCROLL_OPEN_AT = 0.36

function scrollRatio() {
  const el = document.documentElement
  const max = el.scrollHeight - window.innerHeight
  if (max <= 0) return 1
  return (window.scrollY || el.scrollTop) / max
}

export default function NewsletterModal() {
  const [open, setOpen] = useState(false)
  const [phase, setPhase] = useState('form')
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const panelRef = useRef(null)
  const openRef = useRef(false)

  const shouldNeverShow =
    typeof window !== 'undefined' &&
    (isNewsletterSubscribed() || localStorage.getItem(NEWSLETTER_STORAGE_DISMISSED) === '1')

  const dismiss = useCallback(() => {
    setOpen(false)
    localStorage.setItem(NEWSLETTER_STORAGE_DISMISSED, '1')
  }, [])

  const tryOpen = useCallback(() => {
    if (openRef.current || shouldNeverShow) return
    if (scrollRatio() >= SCROLL_OPEN_AT) {
      openRef.current = true
      setOpen(true)
    }
  }, [shouldNeverShow])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (isNewsletterSubscribed() || localStorage.getItem(NEWSLETTER_STORAGE_DISMISSED) === '1') {
      return
    }
    const onScroll = () => tryOpen()
    window.addEventListener('scroll', onScroll, { passive: true })
    tryOpen()
    return () => window.removeEventListener('scroll', onScroll)
  }, [tryOpen])

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => panelRef.current?.querySelector('input[type="email"]')?.focus(), 200)
    const onKey = (e) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, dismiss])

  const submitNewsletter = (e) => {
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
        setPhase('success')
        markNewsletterSubscribed()
      })
      .catch((err) => {
        setBusy(false)
        setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      })
  }

  return (
    <>
      <iframe title="Newsletter subscription" name={NEWSLETTER_IFRAME_NAME} className="newsletter-iframe" aria-hidden />
      <AnimatePresence>
        {open && (
          <motion.div
            className="newsletter-overlay"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={dismiss}
          >
            <motion.div
              ref={panelRef}
              className="newsletter-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby={phase === 'form' ? 'newsletter-title' : 'newsletter-title-success'}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="newsletter-close" onClick={dismiss} aria-label="Close">
                ×
              </button>

              {phase === 'form' ? (
                <>
                  <p className="newsletter-eyebrow">Stay in the loop</p>
                  <h2 id="newsletter-title" className="newsletter-title">
                    Rainy-season tips &amp; Shoevera drops
                  </h2>
                  <p className="newsletter-lead">
                    Short emails: how to keep shoes clean in mud and rain, restock alerts, and real stories from people who ride and walk in Shoevera.
                  </p>
                  <form className="newsletter-form" onSubmit={submitNewsletter} noValidate>
                    <label htmlFor="newsletter-email" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      name="EMAIL"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="newsletter-input"
                      disabled={busy}
                    />
                    {error ? <p className="newsletter-error">{error}</p> : null}
                    <button type="submit" className="btn btn-newsletter" disabled={busy}>
                      {busy ? 'Joining…' : 'Join the list'}
                    </button>
                  </form>
                  <button type="button" className="newsletter-skip" onClick={dismiss}>
                    No thanks
                  </button>
                </>
              ) : (
                <div className="newsletter-success">
                  <p className="newsletter-eyebrow">You&apos;re in</p>
                  <h2 id="newsletter-title-success" className="newsletter-title">
                    Welcome to the Shoevera circle
                  </h2>
                  <p className="newsletter-lead newsletter-success-hook">
                    You&apos;ll get short emails—not spam—built around one idea: dry shoes, less stress on rainy days.
                  </p>
                  <p className="newsletter-lead">
                    Expect practical tips for mud and rain, a heads-up when we restock, and real notes from students and riders who already wear Shoevera.
                  </p>
                  <p className="newsletter-lead">
                    Want to order or ask about fit? Message us on WhatsApp—we reply fast.
                  </p>
                  <div className="newsletter-success-actions">
                    <a href={getWhatsAppUrl()} className="btn btn-newsletter btn-newsletter-secondary" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                    <a href={`mailto:${EMAIL}?subject=Shoevera%20newsletter`} className="btn btn-newsletter-outline">
                      Email us
                    </a>
                  </div>
                  <button type="button" className="newsletter-skip" onClick={dismiss}>
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
