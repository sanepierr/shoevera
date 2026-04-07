import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { getWhatsAppUrl, HERO_VIDEO_URL } from '../config'

export default function Hero({ heroImage }) {
  const [imageError, setImageError] = useState(false)
  const [videoMuted, setVideoMuted] = useState(true)
  const videoRef = useRef(null)
  const showImage = heroImage && !imageError
  const hasVideo = HERO_VIDEO_URL && HERO_VIDEO_URL.trim() !== ''

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    const next = !videoMuted
    setVideoMuted(next)
    v.muted = next
    if (!next) {
      v.play().catch(() => {})
    }
  }

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
            className="hero-premium-ctas hero-premium-ctas-single"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
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
                ref={videoRef}
                src={HERO_VIDEO_URL}
                autoPlay
                muted={videoMuted}
                loop
                playsInline
                className="hero-video"
                aria-label="Shoevera product demo"
              />
              <div className="hero-video-overlay" aria-hidden />
              <button
                type="button"
                className="hero-video-sound-btn"
                onClick={toggleMute}
                aria-pressed={!videoMuted}
                aria-label={videoMuted ? 'Unmute video' : 'Mute video'}
              >
                {videoMuted ? (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                    <span>Sound on</span>
                  </>
                ) : (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                    <span>Mute</span>
                  </>
                )}
              </button>
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
