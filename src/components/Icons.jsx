/** Inline SVG icons (no emojis). Use as img src or inline. */
const iconSize = 48

export const ProblemIcons = {
  shoes: (
    <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M20 42L24 22H40L44 42H20Z" stroke="#5f6368" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 42V46M46 42V46" stroke="#5f6368" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="48" r="3" fill="#5f6368"/>
      <circle cx="36" cy="48" r="3" fill="#5f6368"/>
    </svg>
  ),
  rain: (
    <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M44 36c6.6 0 12-5.4 12-12s-5.4-12-12-12c-2.2 0-4.2.6-6 1.6C36.4 12.2 32 8 26 8c-7.2 0-13 5.8-13 13 0 .8.1 1.5.2 2.2C9.8 24.4 6 28.8 6 34c0 6.6 5.4 12 12 12h26z" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 44v8M28 48v8M34 44v8" stroke="#5f6368" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  boots: (
    <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M18 20h28v32H18V20z" stroke="#5f6368" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 28h28M18 36h28" stroke="#5f6368" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 52h36" stroke="#5f6368" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
}

export const BenefitIcons = {
  waterproof: (
    <svg width={52} height={52} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M32 12c-8 10-18 16-18 26 0 9.9 8.1 18 18 18s18-8.1 18-18c0-10-10-16-18-26z" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 28v16M26 34h12" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  cost: (
    <svg width={52} height={52} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="32" r="14" stroke="#1a73e8" strokeWidth="2.5"/>
      <path d="M32 24v16M28 32h8" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 22l2-4 2 4M38 42l-2 4-2-4" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  easy: (
    <svg width={52} height={52} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M36 14L18 32l18 18" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 32h28" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  reusable: (
    <svg width={52} height={52} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M24 20L20 28l4 8" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 44l4-8-4-8" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 28h8c8 0 16 6 16 14s-6 14-14 14h-8" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 36H36c-8 0-16-6-16-14s6-14 14-14h8" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  fits: (
    <svg width={52} height={52} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M18 38l6-16h16l6 16H18z" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 38v6M42 38v6" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="26" cy="48" r="3" fill="#1a73e8"/>
      <circle cx="38" cy="48" r="3" fill="#1a73e8"/>
    </svg>
  ),
}

export function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>
  )
}

export function FacebookIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.07c0-6.63-5.37-12-12-12S0 5.44 0 12.07c0 6.02 4.42 11.02 10.22 11.9v-8.4H7.1V12.07h3.12V9.5c0-3.08 1.84-4.78 4.65-4.78 1.34 0 2.73.24 2.73.24v3h-1.54c-1.52 0-1.99.94-1.99 1.9v2.3h3.4l-.54 3.5h-2.86v8.4c5.8-.88 10.22-5.88 10.22-11.9z"/>
    </svg>
  )
}

export function WhatsAppIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
