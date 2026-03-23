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

Open **http://localhost:5173**.

## Deploy on Vercel

From the **shoevera** directory:

```bash
npx vercel
```

Or connect your Git repo in the [Vercel dashboard](https://vercel.com/new): import the repo, set **Root Directory** to `shoevera`, then deploy. Vercel will detect Vite and use `npm run build` with output `dist`.

To build for production locally:

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
│       ├── ShoeRevealSection.jsx
│       ├── VideoDemo.jsx
│       ├── SocialProof.jsx
│       ├── HowToBuy.jsx
│       ├── CTA.jsx
│       ├── FAQ.jsx
│       └── Footer.jsx
└── public/
    ├── ASSETS.md           # Which files are used + mapping from resources/
    ├── hero.jpg            # Hero fallback + hover-reveal “after”
    ├── product.jpg         # Product showcase
    ├── how-to-use.jpg      # Solution section
    ├── shoe.jpg            # Hover-reveal “before” (packaged)
    └── demo.mp4            # Demo video (see config.js)
```

## Before launch

1. **Edit `src/config.js`**
   - Set `WHATSAPP_NUMBER` (e.g. `256700123456`).
   - Set `PHONE`, `EMAIL`, and social URLs (Instagram, TikTok, Facebook).

2. **Images & video (use your real photos)**
   - See **`public/ASSETS.md`** for what each file should show and naming.
   - Replace `hero.jpg`, `product.jpg`, `how-to-use.jpg`, `shoe.jpg`, and `demo.mp4` in `public/`, or change paths in `src/App.jsx` and `DEMO_VIDEO_URL` in `src/config.js`.

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

- Prefer **real product photography** over AI — see **`public/ASSETS.md`**.
- Place files in `public/` and match names in `src/App.jsx`, or update the constants there.
- If an image fails to load, some sections show a placeholder.
