export default function Solution() {
  const steps = [
    {
      num: 1,
      title: 'Slip on',
      text: 'Pull Shoevera over your shoes before you step into rain or mud. Fits different shoe types.',
    },
    {
      num: 2,
      title: 'Walk with confidence',
      text: 'Your shoes stay dry and clean. Easy to walk in—no bulk, no hassle.',
    },
    {
      num: 3,
      title: 'Remove & reuse',
      text: 'Take them off when you’re inside. Wipe or rinse, pack away, use again next time.',
    },
  ]
  return (
    <section className="solution" id="how-it-works">
      <div className="container">
        <h2>Meet Shoevera</h2>
        <p className="solution-intro">
          A lightweight cover you wear over your existing shoes. Slip it on when it rains or the path is dirty—take it off when you’re inside. That’s it.
        </p>
        <div className="solution-steps">
          {steps.map((step) => (
            <div key={step.num} className="step">
              <span className="step-num">{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
