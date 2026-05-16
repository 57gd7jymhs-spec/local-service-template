# Local Service Template

A reusable Astro site template for local service businesses — plumbers, barbers, roofers, electricians, and more. Deploy on Cloudflare Pages in under 2 hours.

**Time to ship:**
- First client: ~2 hours
- Subsequent clients: ~20 minutes

---

## How it works

Edit one file → deploy. Every piece of copy, every color, every section, and every variant is driven by `src/config/client.ts`. The components read from it — you never touch them.

---

## Setup (new client)

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/local-service-template.git client-name
cd client-name
npm install
```

### 2. Edit client.ts

Open `src/config/client.ts` and fill in the 12 minimum fields:

| Field | Description |
|---|---|
| `brand.name` | Business name (e.g. "Dropwork") |
| `brand.tagline` | Niche label (e.g. "Loodgieters") |
| `brand.niche` | `"plumber"` \| `"barber"` \| `"roofer"` \| `"electrician"` \| `"generic"` |
| `brand.phone` | Phone number displayed site-wide |
| `brand.email` | Contact email |
| `brand.location` | City name (e.g. "Brugge") |
| `brand.logo` | Path to logo image (dark/positive) |
| `brand.logoNegative` | Path to logo image (white/negative) |
| `theme.primary` | Brand colour — buttons, accents |
| `theme.navy` | Dark colour — nav on scroll, hero background |
| `seo.title` | Browser tab title |
| `seo.description` | Meta description (155 chars max) |

Everything else has sensible defaults you can refine later.

### 3. Replace images

Put client images in `public/images/`:

| File | Used by |
|---|---|
| `logo.png` | Dark version of logo (nav default state, footer) |
| `logo-negative.png` | White version of logo (nav scrolled, dark backgrounds) |
| `hero.jpg` | HeroSplit + HeroMinimal background |
| `og-image.jpg` | Social share preview (1200×630) |
| `before-bathroom.png` | Before/After slider |
| `after-bathroom.png` | Before/After slider |
| `before-drain.png` | Before/After slider |
| `after-drain.png` | Before/After slider |
| `before-faucet.png` | Before/After slider |
| `after-faucet.png` | Before/After slider |
| `images/team/*` | Team member photos (optional) |

### 4. Preview locally

```bash
npm run dev
```

Open `http://localhost:4321` and check every section.

### 5. Deploy to Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → Create application → Connect to Git
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** *(leave blank)*
4. Add the Node.js compat flag in **Settings → Functions → Compatibility flags**:
   ```
   nodejs_compat
   ```
5. Add the AI key in **Settings → Environment variables** (type: **Secret**):
   - `GROQ_API_KEY` → your Groq API key from [console.groq.com](https://console.groq.com)
6. Deploy

Your site is live at `project-name.pages.dev`.

---

## Section variants

Swap these in `client.ts` to get a completely different layout without touching any components:

### Hero (`client.pages.home.hero`)
| Value | Description | Best for |
|---|---|---|
| `"video"` | Looping video background, rotating headline | Plumbers, roofers, emergency services |
| `"split"` | Image left / text right | Barbers, salons, studios |
| `"minimal"` | Clean centered text only | Any niche, fastest loading |

### Services (`client.sections.services.variant`)
| Value | Description | Best for |
|---|---|---|
| `"grid"` | 2-col card grid with 3D hover | Trades with 3-4 services |
| `"list"` | Horizontal rows with price pills | Barbers, salons, cleaners |

### Testimonials (`client.sections.testimonials.variant`)
| Value | Description | Best for |
|---|---|---|
| `"row"` | Static 3-col grid | Desktop-heavy audiences |
| `"carousel"` | Auto-advancing single card | Mobile-heavy audiences |

### CTA (`client.sections.cta.variant`)
| Value | Description | Best for |
|---|---|---|
| `"banner"` | Centered dark panel, phone-first | Trades, emergency services |
| `"split"` | Image left / CTA right | Booking-first niches |

### Section order (`client.pages.home.sections`)

Reorder or remove entries to change what appears on the homepage:

```typescript
sections: [
  "trust",        // 4 stat cards
  "services",     // ServicesGrid or ServicesList
  "before-after", // hidden automatically if beforeAfter[] is empty
  "testimonials", // row or carousel
  "why-us",       // numbered differentiators
  "faq-preview",  // 3 FAQ items + link to /faq (only if pages.faq: true)
  "cta",          // banner or split
]
```

---

## Optional pages

Enable in `client.pages`:

```typescript
pages: {
  faq:       true,   // adds /faq page
  emergency: true,   // adds /spoeddienst page
}
```

Add the nav link manually in `client.nav` when enabling a page:

```typescript
nav: [
  { label: "Diensten",    href: "/#diensten" },
  { label: "Reviews",     href: "/#reviews" },
  { label: "Over ons",    href: "/over-ons" },
  { label: "FAQ",         href: "/faq" },         // add when pages.faq: true
  { label: "Spoeddienst", href: "/spoeddienst" },  // add when pages.emergency: true
]
```

---

## Niche presets

Copy-paste config values per niche. Swap `brand.niche`, update the AI system prompt accordingly.

### Plumber (default)
```typescript
pages.home.hero:                "video",
sections.services.variant:      "grid",
sections.testimonials.variant:  "row",
sections.cta.variant:           "banner",
```

### Barber / Hairdresser
```typescript
pages.home.hero:                "split",
sections.services.variant:      "list",
sections.testimonials.variant:  "carousel",
sections.cta.variant:           "split",
pages.home.sections:            ["trust", "services", "testimonials", "why-us", "cta"],
```

### Roofer / Electrician
```typescript
pages.home.hero:                "minimal",
sections.services.variant:      "grid",
sections.testimonials.variant:  "row",
sections.cta.variant:           "banner",
pages.emergency:                true,
```

---

## AI chatbot

The chatbot uses Groq (free tier: ~500k tokens/day per key). Set `GROQ_API_KEY` as a secret in Cloudflare Pages.

Configure in `client.ts`:

```typescript
ai: {
  enabled:      true,
  model:        "llama-3.3-70b-versatile",
  maxTokens:    250,
  temperature:  0.65,
  systemPrompt: "...",  // niche-specific instructions
}
```

Set `ai.enabled: false` to hide the chatbot entirely.

---

## Local admin panel

In dev mode only, navigate to `/admin` to edit config fields visually and save directly to `src/config/client.ts`. The endpoint is locked in production — Cloudflare returns 403.

---

## Infrastructure

| Service | Purpose | Cost |
|---|---|---|
| Cloudflare Pages | Hosting (unlimited bandwidth) | Free |
| Cloudflare Workers | AI chatbot API (3M req/mo) | Free |
| Groq | LLM inference | Free tier |
| Cloudflare Registrar | Domains (~€10/year) | ~€10/domain/year |

Total monthly cost: **€0** (until very high scale).

---

## File structure

```
src/
├── config/
│   └── client.ts              ← THE only file you edit per client
├── components/
│   ├── layout/
│   │   ├── BaseLayout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── PageLoader.astro
│   ├── sections/
│   │   ├── hero/
│   │   │   ├── HeroVideo.astro
│   │   │   ├── HeroSplit.astro
│   │   │   └── HeroMinimal.astro
│   │   ├── services/
│   │   │   ├── ServicesGrid.astro
│   │   │   └── ServicesList.astro
│   │   ├── testimonials/
│   │   │   ├── TestimonialsRow.astro
│   │   │   └── TestimonialsCarousel.astro
│   │   ├── cta/
│   │   │   ├── CtaBanner.astro
│   │   │   └── CtaSplit.astro
│   │   ├── faq/
│   │   │   └── FaqAccordion.astro
│   │   ├── gallery/
│   │   │   └── BeforeAfterSlider.astro
│   │   ├── Marquee.astro
│   │   ├── TrustStrip.astro
│   │   └── WhyUs.astro
│   └── ui/
│       └── Chatbot.astro
├── pages/
│   ├── index.astro            ← orchestrator, reads sections from config
│   ├── over-ons.astro
│   ├── diensten.astro
│   ├── contact.astro
│   ├── faq.astro              ← enabled by pages.faq: true
│   └── spoeddienst.astro      ← enabled by pages.emergency: true
└── pages/api/
    └── chat.ts                ← Groq proxy → Cloudflare Worker
```
