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
import { MEET_SHOEVERA_VIDEO_URL, REVIEWS_INTERVIEW_VIDEO_URL } from './config'

// See public/ASSETS.md — filenames match your uploads in public/
const heroImage = '/Shoevera_here.png'
const productImage = '/Shoevera_sample.png'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero heroImage={heroImage} />
      <Problem />
      <Solution videoUrl={MEET_SHOEVERA_VIDEO_URL} />
      <Benefits />
      <ProductShowcase productImage={productImage} />
      <SocialProof reviewVideoUrl={REVIEWS_INTERVIEW_VIDEO_URL} />
      <HowToBuy />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}
