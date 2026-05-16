import type { APIRoute } from 'astro';
import { client as current } from '../../config/client';

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.DEV) {
    return new Response(JSON.stringify({ error: 'Not available in production' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let p: any;
  try {
    p = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { writeFileSync } = await import('node:fs');
    const { resolve } = await import('node:path');
    const ts = buildClientTs(current as any, p);
    const dest = resolve(process.cwd(), 'src/config/client.ts');
    writeFileSync(dest, ts, 'utf-8');
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message ?? 'Write failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

function q(s: unknown): string {
  return JSON.stringify(String(s ?? ''));
}

function ij(obj: unknown, indent: number): string {
  const pad = ' '.repeat(indent);
  return JSON.stringify(obj, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : pad + line))
    .join('\n');
}

function buildClientTs(c: any, p: any): string {
  const brand    = { ...c.brand,    ...(p.brand    ?? {}) };
  const theme    = { ...c.theme,    ...(p.theme    ?? {}) };
  const hero     = { ...c.hero,     ...(p.hero     ?? {}) };
  const footer   = { ...c.footer,   ...(p.footer   ?? {}) };
  const seo      = { ...c.seo,      ...(p.seo      ?? {}) };
  const ai       = { ...c.ai,       ...(p.ai       ?? {}) };
  const sections = {
    services:     { ...c.sections.services,     ...(p.sections?.services     ?? {}) },
    testimonials: { ...c.sections.testimonials, ...(p.sections?.testimonials ?? {}) },
    cta:          { ...c.sections.cta,          ...(p.sections?.cta          ?? {}) },
    whyUs:        { ...c.sections.whyUs,        ...(p.sections?.whyUs        ?? {}) },
  };

  // hero.variant in the payload maps to pages.home.hero
  const heroVariant  = hero.variant ?? c.pages.home.hero;
  const services     = p.services     ?? c.services;
  const trustItems   = p.trustItems   ?? c.trustItems;
  const nav          = p.nav          ?? c.nav;
  const marqueeItems = p.marqueeItems ?? c.marqueeItems;
  const faq          = p.faq          ?? c.faq;
  const reviewAgg    = { ...c.reviewAggregate, ...(p.reviewAggregate ?? {}) };

  const sysPrompt = (ai.systemPrompt as string)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');

  return `/**
 * CLIENT CONFIG — the only file you edit per client.
 * Everything business-specific lives here.
 * Clone repo → fill this in → deploy. Done.
 */

export const client = {

  // ── Brand ─────────────────────────────────────────────────────────────
  brand: {
    name:         ${q(brand.name)},
    tagline:      ${q(brand.tagline)},
    niche:        ${q(brand.niche)} as "plumber" | "barber" | "roofer" | "electrician" | "generic",
    phone:        ${q(brand.phone)},
    email:        ${q(brand.email)},
    location:     ${q(brand.location)},
    logo:         ${q(brand.logo)},
    logoNegative: ${q(brand.logoNegative)},
  },

  // ── Theme ─────────────────────────────────────────────────────────────
  theme: {
    primary: ${q(theme.primary)},
    navy:    ${q(theme.navy)},
    ink:     ${q(theme.ink)},
    muted:   ${q(theme.muted)},
    light:   ${q(theme.light)},
    bg:      ${q(theme.bg)},
    surface: ${q(theme.surface)},
    border:  ${q(theme.border)},
    radius:  ${q(theme.radius)},
  },

  // ── Pages ─────────────────────────────────────────────────────────────
  pages: {
    home: {
      hero: ${q(heroVariant)} as "video" | "split" | "minimal",
      sections: ${JSON.stringify(c.pages.home.sections)} as Array<"trust" | "services" | "before-after" | "testimonials" | "why-us" | "about" | "faq-preview" | "cta">,
    },
    services:  ${c.pages.services},
    about:     ${c.pages.about},
    contact:   ${c.pages.contact},
    faq:       ${c.pages.faq},
    emergency: ${c.pages.emergency},
    gallery:   ${c.pages.gallery},
    pricing:   ${c.pages.pricing},
    blog:      ${c.pages.blog},
  },

  // ── Section variants ──────────────────────────────────────────────────
  sections: {
    services: {
      variant: ${q(sections.services.variant)} as "grid" | "list",
      eyebrow: ${q(sections.services.eyebrow)},
      heading: ${q(sections.services.heading)},
      subtext: ${q(sections.services.subtext)},
    },
    testimonials: {
      variant: ${q(sections.testimonials.variant)} as "row" | "carousel",
      eyebrow: ${q(sections.testimonials.eyebrow)},
      heading: ${q(sections.testimonials.heading)},
    },
    cta: {
      variant:    ${q(sections.cta.variant)} as "banner" | "split",
      heading:    ${q(sections.cta.heading)},
      subtext:    ${q(sections.cta.subtext)},
      ctaLabel:   ${q(sections.cta.ctaLabel)},
      image:      ${q(sections.cta.image)},
      assurances: ${ij(sections.cta.assurances, 6)},
    },
    whyUs: {
      eyebrow: ${q(sections.whyUs.eyebrow)},
      heading: ${q(sections.whyUs.heading)},
      subtext:  ${q(sections.whyUs.subtext)},
      points: ${ij(sections.whyUs.points, 6)},
    },
  },

  // ── Nav links ─────────────────────────────────────────────────────────
  nav: ${ij(nav, 2)},

  // ── Marquee ───────────────────────────────────────────────────────────
  marqueeItems: ${ij(marqueeItems, 2)},

  // ── Hero ──────────────────────────────────────────────────────────────
  hero: {
    headline:      ${q(hero.headline)},
    rotatingWords: ${ij(hero.rotatingWords, 4)},
    subtext:       ${q(hero.subtext)},
    heroImage:     ${q(hero.heroImage)},
    videoUrls: ${ij(hero.videoUrls, 4)},
    ctaLabel:   ${q(hero.ctaLabel)},
    trustBadge: ${q(hero.trustBadge)},
  },

  // ── Trust items ───────────────────────────────────────────────────────
  trustItems: ${ij(trustItems, 2)},

  // ── Info card ─────────────────────────────────────────────────────────
  infoCard: ${ij(c.infoCard, 2)},

  // ── Services ──────────────────────────────────────────────────────────
  services: ${ij(services, 2)},

  // ── Before/After ──────────────────────────────────────────────────────
  beforeAfter: ${ij(c.beforeAfter, 2)},

  // ── Testimonials ──────────────────────────────────────────────────────
  reviewAggregate: ${ij(reviewAgg, 2)},

  testimonials: ${ij(c.testimonials, 2)},

  // ── Stats ─────────────────────────────────────────────────────────────
  stats: ${ij(c.stats, 2)},

  // ── About ─────────────────────────────────────────────────────────────
  about: {
    eyebrow: ${q(c.about.eyebrow)},
    heading: ${q(c.about.heading)},
    body: ${ij(c.about.body, 4)},
    values: ${ij(c.about.values, 4)},
    certifications: ${ij(c.about.certifications, 4)},
    team: [] as Array<{
      name:   string;
      role:   string;
      bio:    string;
      image:  string;
      badges: string[];
    }>,
  },

  // ── FAQ ───────────────────────────────────────────────────────────────
  faq: ${ij(faq, 2)},

  // ── AI chatbot ────────────────────────────────────────────────────────
  ai: {
    enabled:     ${ai.enabled},
    provider:    ${q(ai.provider)} as "groq" | "openai" | "anthropic",
    model:       ${q(ai.model)},
    maxTokens:   ${ai.maxTokens},
    temperature: ${ai.temperature},
    systemPrompt: \`${sysPrompt}\`,
  },

  // ── SEO ───────────────────────────────────────────────────────────────
  seo: {
    title:       ${q(seo.title)},
    description: ${q(seo.description)},
    locale:      ${q(seo.locale)},
    ogImage:     ${q(seo.ogImage)},
  },

  // ── Footer ────────────────────────────────────────────────────────────
  footer: {
    hours:     ${q(footer.hours)},
    address:   ${q(footer.address)},
    vatNumber: ${q(footer.vatNumber)},
    links: ${ij(footer.links, 4)},
    legal: ${ij(footer.legal, 4)},
    copyright: \`© \${new Date().getFullYear()} ${brand.name} ${brand.tagline}\`,
  },

} as const;

export type Client = typeof client;
`;
}
