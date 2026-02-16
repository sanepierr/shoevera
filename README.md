# Shoevera Landing Page

Mobile-first, high-conversion landing page for **Shoevera** — reusable footwear covers for rain and mud.

## Tech stack

- **React 18** + **Vite**
- Single-page layout with reusable components
- No backend required; WhatsApp CTAs open the WhatsApp app

## Quick start

```bash
cd shoevera
npm install
npm run dev
```

Open **http://localhost:5173**. To build for production:

```bash
npm run build
npm run preview   # optional: preview the production build
```

## Project structure

```
shoevera/
├── index.html              # Vite entry
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx             # Composes all sections; set image paths here
│   ├── index.css           # Global + section styles
│   ├── config.js           # WhatsApp number, contact links (edit before launch)
│   └── components/
│       ├── Hero.jsx
│       ├── Problem.jsx
│       ├── Solution.jsx
│       ├── Benefits.jsx
│       ├── ProductShowcase.jsx
│       ├── SocialProof.jsx
│       ├── HowToBuy.jsx
│       ├── CTA.jsx
│       ├── FAQ.jsx
│       └── Footer.jsx
└── public/
    ├── hero.jpg            # Hero image (included; replace with your own)
    └── product.jpg         # Product image (included; replace with your own)
```

## Before launch

1. **Edit `src/config.js`**
   - Set `WHATSAPP_NUMBER` (e.g. `256700123456`).
   - Set `PHONE`, `EMAIL`, and social URLs (Instagram, TikTok, Facebook).

2. **Images**
   - **Hero:** Replace `public/hero.jpg` with your own (person/shoes in rain or mud).
   - **Product:** Replace `public/product.jpg` with your product shot.
   - To use different filenames, update the `heroImage` and `productImage` constants in `src/App.jsx`.

3. **Static backup**
   - The original static HTML version is saved as `index-static-backup.html` if you need a non-React fallback.

## Sections

1. **Hero** — Headline, subheadline, primary/secondary CTAs, hero image  
2. **Problem** — Dirty shoes, muddy roads, gumboots hassle  
3. **Solution** — What Shoevera is, 3 steps (slip on → walk → remove & reuse)  
4. **Benefits** — Waterproof, cost-effective, easy wear/carry, reusable, fits many shoes  
5. **Product showcase** — Product image, copy, pricing note, WhatsApp CTA  
6. **Social proof** — Testimonials (student, boda rider, office worker)  
7. **How to buy** — 3 steps + WhatsApp CTA  
8. **CTA block** — “Don’t let rain ruin your shoes” + WhatsApp  
9. **FAQ** — Fit, reusable, waterproof, cleaning, school/office  
10. **Footer** — Brand, contact, social, copyright  

## Using your own images

- Place files in `public/` (e.g. `public/hero.jpg`, `public/my-product.png`).
- In `src/App.jsx`, set:
  - `heroImage = '/hero.jpg'` (or your filename)
  - `productImage = '/my-product.png'`
- If an image fails to load, the section falls back to a short placeholder message.
