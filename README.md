# Air Conditioning Repair Canoga Park CA — Astro Website

Production-ready, SEO-optimized static website for a local HVAC business.

**Domain:** airconditioningrepaircanongaparkca.us  
**Stack:** Astro 5 (static), Cloudflare Pages  
**Form:** Web3Forms  

## Quick Start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview production build
```

## Cloudflare Pages Deployment

1. Connect the repository (or upload the project) to Cloudflare Pages.
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 or 20 (set in environment variables if needed)
3. Environment: no secrets required for static build. Configure Web3Forms key in `src/pages/contact.astro` before going live.

## Before Going Live

1. **Phone number** — Replace `(818) 704-1234` throughout with the real business number (search the project for `704-1234` and `+18187041234`).
2. **Web3Forms** — Create a free key at [web3forms.com](https://web3forms.com) and set `web3formsKey` in `src/pages/contact.astro`.
3. **Email** — Update `info@airconditioningrepaircanongaparkca.us` if you use a different address.
4. **OG image** (optional) — Add `/public/og-default.jpg` (recommended 1200×630) for social sharing.

## Project Structure

```
src/
  components/     (extend as needed)
  content/blog/   sample Markdown posts
  data/           services.ts, areas.ts
  layouts/        BaseLayout.astro
  pages/          all routes (file-based)
  styles/         global.css
public/
  robots.txt
  llms.txt
  favicon.svg
```

## SEO Features

- Unique title + meta description on every page
- Canonical URLs, Open Graph, Twitter cards
- Clean hyphenated URLs
- sitemap.xml via `@astrojs/sitemap`
- robots.txt allowing major search and AI crawlers
- llms.txt for AI assistants
- Semantic HTML, skip link, focus styles (WCAG AA oriented)
- Sticky click-to-call on mobile

## 20 Service Pages

Generated from `src/data/services.ts` via `src/pages/services/[slug].astro`.

## Service Area Pages

Generated from `src/data/areas.ts` via `src/pages/service-areas/[slug].astro`.

## License

Proprietary — for the named business use only.
