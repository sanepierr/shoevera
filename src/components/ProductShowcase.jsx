import { useState } from 'react'
import { getWhatsAppUrl } from '../config'

export default function ProductShowcase({ productImage }) {
  const [imageError, setImageError] = useState(false)
  const showImage = productImage && !imageError

  return (
    <section className="showcase" id="product">
      <div className="container">
        <h2>Built for Everyday Use</h2>
        <p className="showcase-intro">
          Lightweight, durable materials and a simple design—so you can focus on your day, not on your shoes.
        </p>
        <div className="showcase-main">
          <div className="showcase-image">
            {showImage ? (
              <img src={productImage} alt="Shoevera product" onError={() => setImageError(true)} />
            ) : (
              <div className="img-placeholder">
                Add <code>public/product.jpg</code> or your own product photo
              </div>
            )}
          </div>
          <div className="showcase-details">
            <h3>Quality you can rely on</h3>
            <p>
              Strong, waterproof material that resists tears and wear. Easy to clean—wipe or rinse and air dry. Compact enough to keep in your bag or on your boda.
            </p>
            <p className="showcase-price">
              Affordable, student-friendly pricing <span>(contact for current price)</span>
            </p>
            <a href={getWhatsAppUrl()} className="btn btn-primary btn-whatsapp" target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
