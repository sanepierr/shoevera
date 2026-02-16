// Update these before launch
export const WHATSAPP_NUMBER = '256705145159'
export const WHATSAPP_MESSAGE = 'Hi, I want to order Shoevera'
export const PHONE = '+256 705 145 159'
export const EMAIL = 'hello@shoevera.com'
export const INSTAGRAM_URL = 'https://instagram.com/shoevera'
export const TIKTOK_URL = 'https://tiktok.com/@shoevera'
export const FACEBOOK_URL = 'https://facebook.com/shoevera'

export function getWhatsAppUrl(text = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
