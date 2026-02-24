import { useState } from 'react'

const items = [
  {
    q: 'Does it fit all shoe types?',
    a: 'Shoevera is designed to fit a range of everyday shoes; school shoes, office shoes, and casual footwear. Check our size guide when you order.',
  },
  {
    q: 'Is it reusable?',
    a: 'Yes. Shoevera is made to be used again and again. After use, wipe or rinse and air dry; then pack away for the next rainy day.',
  },
  {
    q: 'Is it waterproof?',
    a: 'Yes. The material is waterproof so your shoes and feet stay dry in rain and puddles.',
  },
  {
    q: 'How do I clean it?',
    a: 'Wipe with a damp cloth or rinse with water. Air dry before storing. No special cleaning needed.',
  },
  {
    q: 'Is it suitable for school or office shoes?',
    a: 'Absolutely. Many students and office workers use Shoevera to protect their formal or school shoes on the way to campus or work.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="faq alt" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-intro">Quick answers to common questions about Shoevera.</p>
        <div className="faq-list">
          {items.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'faq-item-open' : ''}`}
            >
              <button
                type="button"
                className="faq-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="faq-q">{item.q}</span>
                <span className="faq-chevron" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
