import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SocialProof({ reviewVideoUrl = '' }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [videoMuted, setVideoMuted] = useState(true)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const showVideo = reviewVideoUrl && reviewVideoUrl.trim() !== ''

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

  const testimonials = [
    {
      quote: "I don't worry about mud on the way to campus anymore. I just slip on Shoevera and my shoes stay clean.",
      author: 'Gareth, UCU Student',
    },
    {
      quote: "As a boda rider, I need something quick. Shoevera goes on and off in seconds. Worth every shilling.",
      author: 'Bodaboda rider',
    },
    {
      quote: "Office shoes used to get ruined every rainy season. Now I wear Shoevera to the office gate and take it off. Simple.",
      author: 'Isa, Body Tech Gym Instructor',
    },
  ]
  return (
    <section className="social-proof alt" id="reviews" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Used by People Who Walk Through Rain Every Day
        </motion.h2>
        <motion.p
          className="social-proof-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Students, commuters, and workers across Uganda are keeping their shoes dry with Shoevera.
        </motion.p>
      </div>
      {showVideo && (
        <motion.div
          className="section-video-fullbleed"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="section-video-fullbleed-inner">
            <video
              ref={videoRef}
              src={reviewVideoUrl}
              controls
              playsInline
              muted={videoMuted}
              className="section-fullwidth-video"
              aria-label="Customer interview about Shoevera"
            >
              Your browser does not support the video tag.
            </video>
            <button
              type="button"
              className="hero-video-sound-btn video-demo-sound-btn section-video-sound-btn"
              onClick={toggleMute}
              aria-pressed={!videoMuted}
              aria-label={videoMuted ? 'Unmute interview' : 'Mute interview'}
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
        </motion.div>
      )}
      <div className="container">
        <motion.div
          className="testimonials"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            hidden: {},
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial testimonial-block"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">{t.author}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
