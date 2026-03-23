import { useState } from 'react'
import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config'
import { DEMO_VIDEO_URL } from '../config'

export default function Hero({ heroImage }) {
  const [imageError, setImageError] = useState(false)
  const showImage = heroImage && !imageError
  const hasVideo = DEMO_VIDEO_URL && DEMO_VIDEO_URL.trim() !== ''

  return (
    <section className="hero-premium">
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden />
      <div className="hero-orb hero-orb-2" aria-hidden />
      <div className="hero-orb hero-orb-3" aria-hidden />

      <div className="hero-premium-inner">
        <div className="hero-premium-content">
          <motion.span
            className="hero-premium-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rainy season essential
          </motion.span>
          <motion.h1
            className="hero-premium-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="hero-title-line">Protect your kicks.</span>
            <span className="hero-title-line hero-title-accent">Stay clean.</span>
          </motion.h1>
          <motion.p
            className="hero-premium-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Translucent silicone covers you slip over any shoe. Rain, mud, puddles—your shoes stay dry. Slip on. Walk. Slip off. Repeat.
          </motion.p>
          <motion.ul
            className="hero-premium-benefits"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <li>Waterproof & mud-resistant</li>
            <li>Lightweight & portable</li>
            <li>Easy to clean & reuse</li>
          </motion.ul>
          <motion.div
            className="hero-premium-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href={getWhatsAppUrl()} className="btn btn-premium btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <span>Order on WhatsApp</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn btn-premium-outline">
              See how it works
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-premium-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {hasVideo ? (
            <div className="hero-video-wrap">
              <video
                src={DEMO_VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                className="hero-video"
                aria-label="Shoevera product demo"
              />
              <div className="hero-video-overlay" aria-hidden />
            </div>
          ) : showImage ? (
            <div className="hero-image-wrap">
              <img
                src={heroImage}
                alt="Shoevera reusable shoe cover in use"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="hero-placeholder-premium">
              <span>Add hero image or video</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.span>
      </motion.div>
    </section>
  )
}
