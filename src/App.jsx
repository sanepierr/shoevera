import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import ProductShowcase from './components/ProductShowcase'
import SocialProof from './components/SocialProof'
import HowToBuy from './components/HowToBuy'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// Images: use files in public/ (e.g. /hero.jpg, /product.jpg) or leave null for placeholders
const heroImage = '/hero.jpg'
const productImage = '/product.jpg'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero heroImage={heroImage} />
      <Problem />
      <Solution />
      <Benefits />
      <ProductShowcase productImage={productImage} />
      <SocialProof />
      <HowToBuy />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}
