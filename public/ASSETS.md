# Site assets (real photos from `resources/`)

Files in **`public/`** are the ones the app loads. They were chosen from your **`resources/`** folder (see mapping below).

| Public file | Source in `resources/` | Why this one |
|-------------|------------------------|--------------|
| **`product.jpg`** | `IMG_7137.jpeg` | Pair on wood, **SHOEVERA** logo clear, grip texture visible, size **M** — best “buy this” product shot. |
| **`hero.jpg`** | `ee2b3339-e57e-4db1-be59-0d36238bdb0a.jpg` | Pair on grass, angled layout — feels outdoor / rainy-season use; good for hero fallback & hover reveal. |
| **`how-to-use.jpg`** | `efa2ae5f-1d59-4ac5-8322-a4b7aad00738.jpg` | Vertical pair on grass — fits solution section; alternate angle to hero. |
| **`shoe.jpg`** | `IMG_7136.jpeg` | **Retail pack** with green **SHOEVERA** label (“Medium Size Shoe Cover”). Used as hover “before” state (what you receive). |
| **`hero-video.mp4`** | `IMG_5985.MOV` (compressed) | **Hero** loop — different take from demo; includes **AAC audio**; starts muted (browser autoplay); use **Sound on** to unmute. |
| **`demo.mp4`** | `IMG_5987.MOV` (compressed, ~3 min) | **Customer interview** at bottom of page — AAC audio; starts **muted**; use **Sound on** after hitting play. Native controls for pause/scrub. |

## Also in `resources/` (not used on site by default)

| File | Note |
|------|------|
| `d2656fcf-…`, `c57e84e3-…`, `8b5aeff0-…` | Similar grass flat-lays — backups if you want to swap hero/product angles. |
| `IMG_7135.jpeg` | Product in frosted bag, harsh flash — optional “unboxing” gallery later. |
| `IMG_5983.MOV`, `IMG_5985.MOV`, `IMG_5987.MOV` | Other takes; **large files** — compress with ffmpeg if you switch demo video. |

## Plain shoe (optional)

There is **no photo of a shoe without Shoevera** in `resources/`. Hover reveal uses **packaged → on grass** instead. To match “shoe only → shoe with cover,” add e.g. `public/shoe-plain.jpg` and point `shoeImage` in `App.jsx` to it.

## Re-compress video (example)

```bash
ffmpeg -i resources/YOUR.MOV -c:v libx264 -crf 26 -preset fast -movflags +faststart -vf "scale='min(1080,iw)':-2" -an public/demo.mp4
```
