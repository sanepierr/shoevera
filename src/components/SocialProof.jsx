export default function SocialProof() {
  const testimonials = [
    {
      quote: "I don't worry about mud on the way to campus anymore. I just slip on Shoevera and my shoes stay clean.",
      author: '— Gareth, UCU Student',
    },
    {
      quote: "As a boda rider, I need something quick. Shoevera goes on and off in seconds. Worth every shilling.",
      author: '— Bodaboda rider',
    },
    {
      quote: "Office shoes used to get ruined every rainy season. Now I wear Shoevera to the office gate and take it off. Simple.",
      author: '— Isa, Body Tech Gym Instructor',
    },
  ]
  return (
    <section className="social-proof alt" id="reviews">
      <div className="container">
        <h2>Used by People Who Walk Through Rain Every Day</h2>
        <p className="social-proof-tagline">
          Students, commuters, and workers across Uganda are keeping their shoes dry with Shoevera.
        </p>
        <div className="testimonials">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
