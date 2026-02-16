import { getWhatsAppUrl } from '../config'

export default function HowToBuy() {
  const steps = ['Choose your size', 'Order via WhatsApp or online', 'Get it delivered']
  return (
    <section className="how-to-buy" id="how-to-buy">
      <div className="container">
        <h2>How to Buy</h2>
        <p className="how-to-buy-intro">
          Order in three simple steps. Fast ordering and support when you need it.
        </p>
        <div className="buy-steps">
          {steps.map((label, i) => (
            <div key={i} className="buy-step">
              <span className="buy-step-num">{i + 1}</span>
              <p>{label}</p>
            </div>
          ))}
        </div>
        <div className="cta-wrap">
          <a href={getWhatsAppUrl()} className="btn btn-primary btn-whatsapp" target="_blank" rel="noopener noreferrer">
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
