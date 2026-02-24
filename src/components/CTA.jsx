import { getWhatsAppUrl } from '../config'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Don’t Let Rain Ruin Your Shoes</h2>
        <p>
          Get Shoevera today and keep your shoes dry and clean all rainy season. Order now; we’re here to help.
        </p>
        <a href={getWhatsAppUrl()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
          Order on WhatsApp
        </a>
      </div>
    </section>
  )
}
