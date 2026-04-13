import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Solution({ videoUrl = '' }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [videoMuted, setVideoMuted] = useState(true)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const showVideo = videoUrl && videoUrl.trim() !== ''

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

  const steps = [
    {
      num: 1,
      title: 'Slip on',
      text: 'Pull Shoevera over your shoes before you step into rain or mud. Fits different shoe types.',
    },
    {
      num: 2,
      title: 'Walk with confidence',
      text: 'Your shoes stay dry and clean. Easy to walk in; no bulk, no hassle.',
    },
    {
      num: 3,
      title: 'Remove & reuse',
      text: 'Take them off when you’re inside. Wipe or rinse, pack away, use again next time.',
    },
  ]
  return (
    <section className="solution" id="how-it-works" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Meet Shoevera
        </motion.h2>
        <motion.p
          className="solution-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A lightweight cover you wear over your existing shoes. Slip it on when it rains or the path is dirty; take it off when you’re inside. That’s it.
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
              src={videoUrl}
              controls
              playsInline
              muted={videoMuted}
              className="section-fullwidth-video"
              aria-label="Shoevera product introduction"
            >
              Your browser does not support the video tag.
            </video>
            <button
              type="button"
              className="hero-video-sound-btn video-demo-sound-btn section-video-sound-btn"
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
        </motion.div>
      )}
      <div className="container">
        <motion.div
          className="solution-steps"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            hidden: {},
          }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              className="step"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <span className="step-num">{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
