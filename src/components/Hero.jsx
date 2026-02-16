import { useState } from 'react'
import { getWhatsAppUrl } from '../config'

export default function Hero({ heroImage }) {
  const [imageError, setImageError] = useState(false)
  const showImage = heroImage && !imageError

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Reusable shoe covers for rain and mud.
          </h1>
          <p className="hero-sub">
            Slip Shoevera over your shoes and keep them dry and clean—no more ruined office or school shoes when the path is wet.
          </p>
          <div className="hero-ctas">
            <a href={getWhatsAppUrl()} className="btn btn-primary btn-whatsapp" target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See how it works
            </a>
          </div>
        </div>
        <div className="hero-visual">
          {showImage ? (
            <img
              src={heroImage}
              alt="Shoevera reusable shoe cover in use"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="hero-placeholder">
              Add <code>public/hero.jpg</code> or your own hero image
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
