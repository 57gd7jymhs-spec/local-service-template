# Local Service Template — Architecture

A reusable website template system for local service businesses (plumbers, roofers, barbers, hairdressers). Built with Astro + Cloudflare. One config file per client.

---

## Infrastructure

```
Demo site (Dropwork)   →  Vercel Hobby (personal, untouched)
Template + client sites →  Cloudflare Pages (free, commercial OK, unlimited bandwidth)
AI chatbot API          →  Cloudflare Workers (100k req/day free)
Domains                 →  Cloudflare Registrar (~$10/year .com, at-cost)
DNS                     →  Cloudflare (automatic)
AI provider             →  Groq (free tier, via Cloudflare AI Gateway)
Dev/preview URLs        →  *.pages.dev (free, no domain needed until client goes live)
```

## Cost

| Item | Cost |
|---|---|
| Hosting (all sites) | €0 — unlimited bandwidth |
| AI chatbot functions | €0 (→ €5/mo at massive scale) |
| Dev preview URLs | €0 forever |
| Client domains | ~€10/year each (only when going live) |
| **Total** | **€0/month** |

---

## How to spin up a new client site

1. Fork or clone this repo
2. Edit `src/config/client.ts` — fill in brand, colors, services, copy, AI prompt
3. Replace images in `public/images/`
4. `npm run dev` to preview locally
5. Connect to Cloudflare Pages → auto-deploys on push
6. Preview on `*.pages.dev` — share with client for approval
7. When client signs off → register domain via Cloudflare Registrar → point to Pages project

---

## Config system

All client-specific data lives in one file: `src/config/client.ts`

```typescript
export const client = {
  brand: {
    name: "Dropwork",
    tagline: "Loodgieters",
    niche: "plumber",        // "plumber" | "barber" | "roofer" | ...
    phone: "+32 500 00 00",
    email: "info@dropwork.be",
    location: "Brugge",
    logo: "/images/logo.png",
  },
  theme: {
    primary: "#1847ED",
    navy: "#0D1E5C",
    ink: "#1A2233",
    muted: "#64748b",
    bg: "#F7F8FC",
    surface: "#ffffff",
    border: "#E8ECF4",
    radius: "12px",
  },
  pages: {
    home: {
      hero: "video",         // "video" | "split" | "minimal"
      sections: ["services", "before-after", "testimonials", "cta"],
    },
    services: true,
    about: true,
    contact: true,
    faq: false,
    blog: false,
    emergency: false,        // /spoeddienst
  },
  hero: {
    headline: "Problemen met",
    rotatingWords: ["lekken", "verstoppingen", "toiletten", "kranen"],
    subtext: "Snelle en betrouwbare loodgieter voor herstellingen, ontstoppingen en installaties.",
    videoUrls: ["https://videos.pexels.com/..."],
  },
  services: [
    { icon: "wrench", title: "Lekdetectie", price: "€95–€175", description: "..." },
    { icon: "drain",  title: "Afvoer Ontstopping", price: "€75–€150", description: "..." },
  ],
  testimonials: [
    { name: "Jan De Smet", rating: 5, text: "...", location: "Brugge" },
  ],
  ai: {
    enabled: true,
    provider: "groq",
    model: "llama-3.3-70b-versatile",
    systemPrompt: "Je bent de digitale assistent van ...",
  },
  seo: {
    title: "Dropwork — Loodgieter Brugge",
    description: "Snelle loodgieter in Brugge, 24/7 bereikbaar.",
    locale: "nl",
  },
}
```

---

## Folder structure

```
local-service-template/
├── src/
│   ├── config/
│   │   └── client.ts               ← edit this per client
│   ├── components/
│   │   ├── layout/
│   │   │   ├── PageLoader.astro
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── ProgressBar.astro
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   │   ├── HeroVideo.astro     ← video bg + rotating headline
│   │   │   │   ├── HeroSplit.astro     ← image left, text right
│   │   │   │   └── HeroMinimal.astro   ← text-only, clean
│   │   │   ├── services/
│   │   │   │   ├── ServicesGrid.astro
│   │   │   │   └── ServicesList.astro
│   │   │   ├── testimonials/
│   │   │   │   ├── TestimonialsRow.astro
│   │   │   │   └── TestimonialsCarousel.astro
│   │   │   ├── cta/
│   │   │   │   ├── CtaBanner.astro
│   │   │   │   └── CtaSplit.astro
│   │   │   ├── about/
│   │   │   │   └── AboutSection.astro
│   │   │   ├── contact/
│   │   │   │   └── ContactSection.astro
│   │   │   ├── gallery/
│   │   │   │   └── BeforeAfterSlider.astro
│   │   │   └── faq/
│   │   │       └── FaqAccordion.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── TrustBadge.astro
│   │       └── Chatbot.astro
│   ├── pages/
│   │   ├── index.astro             ← homepage (reads config sections)
│   │   ├── diensten.astro
│   │   ├── over-ons.astro
│   │   ├── contact.astro
│   │   └── api/
│   │       └── chat.ts             ← Groq proxy → Cloudflare Worker
│   └── styles/
│       └── tokens.css
├── public/
│   └── images/
├── ARCHITECTURE.md                 ← this file
├── astro.config.mjs
└── wrangler.jsonc
```

---

## What stays global (never client-specific)

- Component HTML structure and animation keyframes
- Mobile responsive rules and accessibility markup
- Chatbot UI chrome and loader animation
- All Astro component logic

## What becomes client config

- Brand name, tagline, logo, phone, email, location
- All CSS color tokens (primary, navy, etc.)
- All copy: headlines, subtext, service descriptions, testimonials
- Section selection and render order
- Hero variant ("video" | "split" | "minimal")
- Images and video URLs
- AI system prompt (niche-aware)
- SEO metadata
- Which pages to show/hide

---

## Section variants by niche

| Section | Plumber | Electrician | Roofer | Painter |
|---|---|---|---|---|
| Hero | HeroVideo | HeroPhone | HeroMinimal | HeroSplit |
| Services | ServicesGrid | ServicesGrid | ServicesGrid | ServicesList |
| Social proof | TestimonialsRow | TestimonialsCarousel | BeforeAfterSlider | GalleryGrid |
| Process | ProcessSteps | ProcessSteps | ProcessSteps | ProcessSteps |
| Service areas | ServiceAreas | ServiceAreas | ServiceAreas | ServiceAreas |
| CTA | CtaBanner | CtaBanner | CtaBanner | CtaSplit |
| AI Chat | Route to calling | Route to calling | Route to quote | Route to quote |

## Section variants available

| Section key | Component(s) | When to use |
|---|---|---|
| `trust` | TrustStrip | Always — 4 stat cards |
| `services` | ServicesGrid / ServicesList | Always — `variant: "grid"` or `"list"` |
| `process` | ProcessSteps | Trades where trust-building matters (all of them) |
| `before-after` | BeforeAfterSlider | When client has before/after photo pairs |
| `gallery-grid` | GalleryGrid | When client has individual project photos |
| `testimonials` | TestimonialsRow / TestimonialsCarousel | Always — `variant: "row"` or `"carousel"` |
| `why-us` | WhyUs | Always — 4 numbered differentiators |
| `service-areas` | ServiceAreas | Multi-city service area |
| `faq-preview` | FaqAccordion | When FAQ page is enabled |
| `cta` | CtaBanner / CtaSplit | Always — final conversion section |

## Hero variants

| Variant | Component | Best for |
|---|---|---|
| `"video"` | HeroVideo | Plumbers, roofers — dramatic visual impact |
| `"split"` | HeroSplit | Painters, renovators — image-forward |
| `"minimal"` | HeroMinimal | Clean, fast — any niche |
| `"phone"` | HeroPhone | Emergency services — phone number front-and-center |

---

## Pages

### Core (all clients)
| Page | Route |
|---|---|
| Homepage | `/` |
| Services | `/diensten` |
| About | `/over-ons` |
| Contact | `/contact` |

### Optional (toggle in config)
| Page | Route | When |
|---|---|---|
| FAQ | `/faq` | Plumbers, electricians |
| Emergency | `/spoeddienst` | Plumbers, locksmiths |
| Gallery | `/galerij` | Barbers, renovators |
| Blog | `/blog` | SEO-focused clients |
| Pricing | `/tarieven` | Transparent pricing |

---

## AI chatbot

The chatbot (`src/pages/api/chat.ts`) is an Astro API route that compiles to a Cloudflare Worker. It proxies requests to Groq and injects a niche-specific system prompt from `client.ai.systemPrompt`.

- `GROQ_API_KEY` stored as a Cloudflare Worker secret (never in code)
- Toggle with `client.ai.enabled: false` to disable the chatbot entirely
- Optionally route through Cloudflare AI Gateway for free logging and caching

---

## Deployment checklist per client

- [ ] Fork repo
- [ ] Edit `src/config/client.ts`
- [ ] Replace `public/images/logo.png`
- [ ] Add before/after images to `public/images/`
- [ ] `npm run dev` — verify locally
- [ ] Push → Cloudflare Pages auto-deploys to `*.pages.dev`
- [ ] Share `*.pages.dev` URL with client for approval
- [ ] Register domain via Cloudflare Registrar
- [ ] Point domain to Pages project in Cloudflare dashboard
- [ ] Set `GROQ_API_KEY` as Worker secret in Cloudflare dashboard
- [ ] Go live
