import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ProductShowcase({ productImage }) {
  const [imageError, setImageError] = useState(false)
  const showImage = productImage && !imageError
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="showcase" id="product">
      <div className="container" ref={ref}>
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          The product
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built for Everyday Use
        </motion.h2>
        <motion.p
          className="showcase-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Lightweight, durable materials and a simple design; so you can focus on your day, not on your shoes. Waterproof, portable, and easy to clean.
        </motion.p>
        <motion.div
          className="showcase-main"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="showcase-visual">
            {showImage ? (
              <div className="showcase-cluster">
                <div className="showcase-cluster__hero">
                  <img
                    src={productImage}
                    alt="Shoevera product"
                    onError={() => setImageError(true)}
                  />
                </div>
                <div className="showcase-cluster__tile showcase-cluster__tile--a" aria-hidden>
                  <img src={productImage} alt="" />
                </div>
                <div className="showcase-cluster__tile showcase-cluster__tile--b" aria-hidden>
                  <img src={productImage} alt="" />
                </div>
              </div>
            ) : (
              <div className="showcase-cluster-placeholder img-placeholder">
                Add <code>public/Shoevera_sample.png</code> or your own product photo
              </div>
            )}
          </div>
          <div className="showcase-details">
            <h3>Quality you can rely on</h3>
            <p>
              Strong, waterproof material that resists tears and wear. Easy to clean; wipe or rinse and air dry. Compact enough to keep in your bag or on your boda.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
