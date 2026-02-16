import { getWhatsAppUrl, PHONE, EMAIL, INSTAGRAM_URL, TIKTOK_URL, FACEBOOK_URL } from '../config'
import { InstagramIcon, TikTokIcon, FacebookIcon, WhatsAppIcon } from './Icons'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-brand">Shoevera</div>
        <div className="footer-links">
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`tel:${PHONE.replace(/\s/g, '')}`}>Phone</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </div>
        <div className="footer-social">
          <a href={INSTAGRAM_URL} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={22} />
          </a>
          <a href={TIKTOK_URL} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
            <TikTokIcon size={22} />
          </a>
          <a href={FACEBOOK_URL} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FacebookIcon size={22} />
          </a>
          <a href={getWhatsAppUrl()} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={22} />
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Shoevera. All rights reserved.</p>
      </div>
    </footer>
  )
}
