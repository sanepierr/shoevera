# Public assets (current filenames)

The app expects these files in **`public/`** (paths in `src/App.jsx` and `src/config.js`).

| File | Role |
|------|------|
| **`Shoevera_here.png`** | **Hero** (image only — no top video) |
| **`Shoevera_sample.png`** | **Product showcase** |
| **`how-to-use.jpg`** | Optional spare asset (not wired in UI right now) |
| **`shoevera_logo.png`** | Navbar — `LOGO_URL` in `config.js` |
| **`product_introduction_video.mp4`** | **Meet Shoevera** — `MEET_SHOEVERA_VIDEO_URL` (`#how-it-works`) |
| **`interview_video_with_boda_potential_customer.mp4`** | **Reviews** — `REVIEWS_INTERVIEW_VIDEO_URL` (`#reviews`) |

## Config mapping

- `HERO_VIDEO_URL` — empty string → hero shows **`Shoevera_here.png`** only.
- `MEET_SHOEVERA_VIDEO_URL` — product intro in **#how-it-works**.
- `REVIEWS_INTERVIEW_VIDEO_URL` — customer interview in **#reviews**.

## Video behaviour

Clips **start muted**; use **Sound on** after play where shown. Sections use **native controls** (play, scrub). Videos are **~70% of the viewport width**, centered.
