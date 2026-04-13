import { useEffect } from 'react'
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
import NewsletterSubscribeSection from './components/NewsletterSubscribeSection'
import NewsletterModal from './components/NewsletterModal'
import { MEET_SHOEVERA_VIDEO_URL, REVIEWS_INTERVIEW_VIDEO_URL } from './config'
import { NEWSLETTER_STORAGE_DISMISSED, NEWSLETTER_STORAGE_SUBSCRIBED } from './newsletter'

// See public/ASSETS.md — filenames match your uploads in public/
const heroImage = '/Shoevera_here.png'
const productImage = '/Shoevera_sample.png'

export default function App() {
  // Testing: open /?reset_newsletter=1 — clears newsletter localStorage for this browser and reloads (clean URL).
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('reset_newsletter') !== '1') return
    try {
      localStorage.removeItem(NEWSLETTER_STORAGE_SUBSCRIBED)
      localStorage.removeItem(NEWSLETTER_STORAGE_DISMISSED)
    } catch {
      /* ignore */
    }
    params.delete('reset_newsletter')
    const q = params.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${q ? `?${q}` : ''}${window.location.hash}`)
    window.location.reload()
  }, [])

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
      <NewsletterSubscribeSection />
      <Footer />
      <NewsletterModal />
    </>
  )
}
