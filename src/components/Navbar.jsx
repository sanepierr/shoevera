import { useState } from 'react'
import { getWhatsAppUrl } from '../config'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Product', href: '#product' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'How to buy', href: '#how-to-buy' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="navbar-logo-text">Shoevera</span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>

        <nav className={`navbar-nav ${menuOpen ? 'navbar-nav-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            className="btn btn-nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order now
          </a>
        </nav>
      </div>
    </header>
  )
}
