# Sile Atelier — Premium Fashion Brand Website

> *Doğadan Gelen Zarafet — Elegance from Nature*

A cinematic, editorial one-page website for **Sile Atelier**, a luxury natural fashion brand born in Şile, Turkey, 1975.

Built with **Next.js 15**, **Tailwind CSS**, and full **TR / EN bilingual** support. Ready for **Vercel deployment**.

---

## Project Structure

```
sile-atelier/
├── app/
│   ├── layout.tsx          # Root layout with fonts & LangProvider
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Base styles, animations, scroll reveal
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx       # Sticky nav — scroll-aware, lang toggle
│   │   ├── Hero.tsx         # Full-screen video hero
│   │   ├── Story.tsx        # Brand origin narrative
│   │   ├── Collections.tsx  # Editorial 4-piece grid (Kimono/Kaftan/Dress/Skirt)
│   │   ├── Fabric.tsx       # Şile cloth story — dark section
│   │   ├── Social.tsx       # Instagram preview grid
│   │   ├── CTA.tsx          # WhatsApp / Instagram / Marketplace buttons
│   │   └── Footer.tsx       # Footer with nav + social links
│   └── ui/
│       ├── WheatIllustration.tsx  # Minimal SVG wheat icon
│       ├── SectionLabel.tsx       # Reusable overline label
│       └── Reveal.tsx             # Scroll-triggered fade-up wrapper
├── context/
│   └── LangContext.tsx     # TR/EN language context + `t()` helper
├── lib/
│   └── useScrollReveal.ts  # IntersectionObserver scroll reveal hook
├── public/
│   ├── video/
│   │   ├── hero.mp4        # ← REPLACE with your video
│   │   └── README.md
│   └── images/
│       ├── hero-poster.jpg # ← REPLACE with hero fallback image
│       └── placeholder.svg
├── tailwind.config.ts
├── next.config.ts
└── vercel.json
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

```bash
# Install Vercel CLI (if not already)
npm i -g vercel

# Deploy
vercel
```

Or simply connect your GitHub repo to [vercel.com](https://vercel.com) — it auto-detects Next.js.

---

## Customisation Guide

### 🎬 Replacing the Hero Video

1. Place your video at `public/video/hero.mp4`
2. Add a poster frame at `public/images/hero-poster.jpg`
3. The video auto-plays, muted, and loops
4. On mobile (`< 768px`) the video is **hidden** — a CSS gradient fallback shows instead (saves bandwidth)

### 🖼 Adding Real Images

In `components/sections/Story.tsx` and `Collections.tsx`, replace the gradient `<div>` placeholders with Next.js `<Image>` components:

```tsx
import Image from "next/image";

// Replace the gradient div with:
<Image
  src="/images/story-main.jpg"
  alt="Sile Atelier atelier"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 🔗 Updating Links

In `components/sections/CTA.tsx`, update the constants at the top:

```ts
const INSTAGRAM_URL  = "https://instagram.com/YOUR_HANDLE";
const WHATSAPP_URL   = "https://wa.me/90XXXXXXXXXX?text=...";
const MARKETPLACE_URL = "https://www.trendyol.com/YOUR_STORE";
```

### 🌍 Language

The `useLang()` hook provides:

```tsx
const { lang, toggle, t } = useLang();

// Usage:
t("English text", "Türkçe metin")
```

---

## Design Tokens

| Token       | Value     | Use               |
|-------------|-----------|-------------------|
| `cream`     | `#f7f3ec` | Main background   |
| `ivory`     | `#fdfaf6` | Section alt bg    |
| `parchment` | `#ede6d8` | Borders, accents  |
| `sand`      | `#d6c9b0` | Subtle text       |
| `wheat`     | `#c4a97d` | Labels, accents   |
| `bark`      | `#8b6f4e` | Body text         |
| `umber`     | `#4a3728` | Dark text/buttons |
| `char`      | `#1e1710` | Headings, footer  |

---

## Typography

- **Display / Headings**: Cormorant Garamond (Google Fonts) — light & italic weights
- **Body / Labels**: Jost (Google Fonts) — 200 / 300 / 400

---

*© Sile Atelier — Şile, Turkey — Est. 1975*
