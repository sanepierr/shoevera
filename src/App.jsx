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

// Images in public/: hero.png, hero.jpg, product.png, product.jpg, how-to-use.png — swap paths to try different visuals
const heroImage = '/hero.png'
const productImage = '/product.png'
const howToUseImage = '/how-to-use.png'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero heroImage={heroImage} />
      <Problem />
      <Solution howToUseImage={howToUseImage} />
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
