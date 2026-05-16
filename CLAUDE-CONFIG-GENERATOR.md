# Claude Config Generator

Paste this prompt into Claude (with the client brief at the bottom) to get a complete, ready-to-paste `client.ts`.

---

## The Prompt

```
You are generating a `src/config/client.ts` file for a local service business website template.
The output must be a single TypeScript file — nothing else, no explanation.

## Template constraints

The config drives a reusable Astro template with these section variants:

- Hero:         "video" (looping bg video, rotating headline)
                "split" (image left / text right)
                "minimal" (centered text only)
- Services:     "grid" (2-col cards, trades/plumbers/roofers)
                "list" (horizontal rows, barbers/cleaners)
- Testimonials: "row" (static 3-col grid)
                "carousel" (auto-advancing, better on mobile)
- CTA:          "banner" (phone-first dark panel, trades)
                "split" (image + booking CTA)

Homepage sections (ordered list — remove any you don't want):
  "trust", "services", "before-after", "testimonials", "why-us", "cta"

Enabled pages: services, about, contact always on.
Optional pages: faq, emergency, gallery, pricing, blog (set true to enable).

Niche options: "plumber" | "roofer" | "electrician" | "painter" | "generic"

Icon options:
  Trust/value icons: "clock" | "bolt" | "badge" | "euro" | "users" | "star" | "shield" | "check"
  Service icons: "droplet" | "drain" | "flame" | "wrench" | "scissors" | "home" | "zap" | "tool" | "paintbrush" | "roof"

## Rules

1. Write all copy in the client's language (Dutch if Belgian, French if French-speaking, English otherwise).
2. For plumbers/roofers/electricians/painters: always use hero "video", services "grid", cta "banner". These are phone-first businesses.
3. Phone-first CTAs: every CTA must say "Bel Nu" (NL) / "Appelez maintenant" (FR) / "Call Now" (EN) — never "Book" or "Schedule".
4. The `web3formsKey` field stays empty ("") — the user will fill it in.
5. Write the AI systemPrompt in the same language as the copy, scoped to the specific business.
6. Trust items: 4 items, pick values that are realistic for this business (years experience, jobs done, response time, guarantee).
7. WhyUs points: 4 points, each must be a specific, believable differentiator — not generic ("We care about quality").
8. Testimonials: write 5 realistic customer reviews with specific details (job type, outcome, timing). Not generic praise.
9. FAQ: 5–6 questions a real customer would ask for this niche.
10. Services: list 4 realistic services with price ranges relevant to Belgian/Dutch/local market.
11. Colors: pick a primary color that fits the niche (blue for plumbers, red/orange for roofers, yellow for electricians, green/gray for painters). Navy is always dark — use a dark tone of the primary hue.
12. Output ONLY the TypeScript file content. No markdown fences, no explanation.

## Client brief

[PASTE BRIEF HERE — see format below]
```

---

## Client Brief Format

Fill this in for each new client and paste it after the prompt above:

```
Business name: [name]
Tagline / trade descriptor: [e.g. "Loodgieters", "Dakwerkers", "Schilders"]
Niche: [plumber / roofer / electrician / painter / generic]
Phone: [number]
Email: [email]
Location / city: [city, country]
Language: [Dutch / French / English]
Primary color (hex or describe): [e.g. "#E84040" or "warm red"]
Years in business: [number]
Approx jobs completed: [number]
Avg response time: [e.g. "60 min" or "same day"]
Services (list 3–4): [service 1, service 2, service 3, service 4]
Key USPs (what makes them different): [list 2–3 things]
Any specific pages to enable: [faq / emergency / gallery]
```

---

## Example Brief

```
Business name: DakPro
Tagline / trade descriptor: Dakwerkers
Niche: roofer
Phone: +32 478 00 00 00
Email: info@dakpro.be
Location / city: Antwerpen, België
Language: Dutch
Primary color: warm orange (#E8651A)
Years in business: 22
Approx jobs completed: 3200+
Avg response time: same day inspection, 2–3 days for repairs
Services: Dakherstellingen, Dakisolatie, Dakrenovatie, Regenwaterafvoer
Key USPs: 10-year workmanship warranty, certified for flat and sloped roofs, written quote before any work starts
Any specific pages to enable: faq, gallery
```

---

## After generating

1. Copy the output into `src/config/client.ts`
2. Replace images in `public/images/` (logo.png, logo-negative.png, hero.jpg, before/after shots)
3. Get a free Web3Forms key at [web3forms.com](https://web3forms.com) → paste into `web3formsKey`
4. Set your Groq API key as a Cloudflare Worker secret: `wrangler secret put GROQ_API_KEY`
5. `npm run dev` to preview locally
6. Push to GitHub → Cloudflare auto-deploys to `*.pages.dev`
7. Share the preview URL with the client for approval

Total time from brief to live preview: **20–40 minutes**.
