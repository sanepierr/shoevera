import { ProblemIcons } from './Icons'

const items = [
  {
    icon: ProblemIcons.shoes,
    title: 'Dirty or damaged shoes',
    text: 'One walk in the rain and your office or school shoes are soaked and stained.',
  },
  {
    icon: ProblemIcons.rain,
    title: 'Muddy roads & flooded paths',
    text: 'Urban and peri-urban areas get waterlogged—your shoes take the hit every time.',
  },
  {
    icon: ProblemIcons.boots,
    title: 'Gumboots or extra shoes?',
    text: 'Heavy, bulky, or awkward to carry. You need something simple and light.',
  },
]

export default function Problem() {
  return (
    <section className="problem alt" id="problem">
      <div className="container">
        <h2>Sound Familiar?</h2>
        <p className="problem-intro">
          Rainy season and muddy roads make it tough to keep your shoes clean—and replacing them is expensive.
        </p>
        <div className="problem-grid">
          {items.map((item, i) => (
            <div key={i} className="problem-card">
              <div className="problem-icon problem-icon-svg">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
