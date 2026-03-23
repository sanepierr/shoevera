import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Product', href: '#product' },
  { label: 'Watch', href: '#demo' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'How to buy', href: '#how-to-buy' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`navbar-premium ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-premium-inner">
        <a href="#" className="navbar-premium-logo">
          <span className="navbar-logo-text">SHOEVERA</span>
        </a>

        <button
          type="button"
          className="navbar-premium-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            className="navbar-toggle-bar"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="navbar-toggle-bar"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="navbar-toggle-bar"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          />
        </button>

        <nav className={`navbar-premium-nav ${menuOpen ? 'navbar-nav-open' : ''}`}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="navbar-premium-link"
              onClick={() => setMenuOpen(false)}
              initial={menuOpen ? { opacity: 0, x: -20 } : false}
              animate={menuOpen ? { opacity: 1, x: 0 } : false}
              transition={{ delay: i * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
          <a
            href={getWhatsAppUrl()}
            className="btn btn-nav-premium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order now
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
