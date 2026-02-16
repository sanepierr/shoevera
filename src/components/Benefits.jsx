import { BenefitIcons } from './Icons'

const benefits = [
  { icon: BenefitIcons.waterproof, title: 'Waterproof', text: 'Keeps feet and shoes dry in rain and puddles.' },
  { icon: BenefitIcons.cost, title: 'Cost-effective', text: 'One pair lasts. No need to replace ruined shoes.' },
  { icon: BenefitIcons.easy, title: 'Easy wear & carry', text: 'Quick to put on, remove, and pack away.' },
  { icon: BenefitIcons.reusable, title: 'Reusable & durable', text: 'Wash and reuse. Made to last the season.' },
  { icon: BenefitIcons.fits, title: 'Fits many shoes', text: 'Works with school, office, and casual shoes.' },
]

export default function Benefits() {
  return (
    <section className="benefits alt" id="benefits">
      <div className="container">
        <h2>Why Shoevera?</h2>
        <p className="benefits-intro">
          Built for students, office workers, traders, boda boda riders, and daily commuters who need practical, affordable protection.
        </p>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <div className="benefit-icon benefit-icon-svg">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
