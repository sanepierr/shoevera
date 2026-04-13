// Update these before launch
export const WHATSAPP_NUMBER = '256705145159'
export const WHATSAPP_MESSAGE = 'Hi, I want to order Shoevera'
export const PHONE = '+256 705 145 159'
export const EMAIL = 'hello@shoevera.com'
export const INSTAGRAM_URL = 'https://www.instagram.com/shoevera.ug?igsh=YmYzNzlha2dsNXZp'
export const TIKTOK_URL = 'https://www.tiktok.com/@shoevera_ug?lang=en-GB'
export const FACEBOOK_URL = 'https://www.facebook.com/people/Shoeveraug/100069983687798/'
// Hero uses image only (Shoevera_here.png). Leave empty so no top video.
export const HERO_VIDEO_URL = ''
// Meet Shoevera — product introduction. Muted by default; Sound on + native controls.
export const MEET_SHOEVERA_VIDEO_URL = '/product_introduction_video.mp4'
// Reviews — customer interview. Muted by default; Sound on + native controls.
export const REVIEWS_INTERVIEW_VIDEO_URL = '/interview_video_with_boda_potential_customer.mp4'
// Navbar (and optional footer) brand mark
export const LOGO_URL = '/shoevera_logo.png'

export function getWhatsAppUrl(text = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
