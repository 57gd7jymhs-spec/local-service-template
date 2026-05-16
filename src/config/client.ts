/**
 * CLIENT CONFIG — the only file you edit per client.
 * Everything business-specific lives here.
 * Clone repo → fill this in → deploy. Done.
 */

export const client = {

  // ── Brand ─────────────────────────────────────────────────────────────
  brand: {
    name:         "Dropwork",
    tagline:      "Loodgieters",
    niche:        "plumber" as "plumber" | "barber" | "roofer" | "electrician" | "painter" | "generic",
    phone:        "+32 500 00 00",
    email:        "info@dropwork.be",
    location:     "Brugge",
    logo:         "/images/logo.png",          // positive (dark) version
    logoNegative: "/images/logo-negative.png", // white version for dark backgrounds
    // Get a free key at web3forms.com — one key per client email address.
    // Leave empty ("") to hide the form and show phone + mailto only.
    web3formsKey: "",
  },

  // ── Theme ─────────────────────────────────────────────────────────────
  // These become CSS variables injected globally. Change primary + navy to
  // match the client's brand colours — everything else adapts automatically.
  theme: {
    primary: "#1847ED", // --blue  : buttons, accents, links
    navy:    "#0D1E5C", // --navy  : dark sections, header on scroll
    ink:     "#1A2233", // --ink   : body text
    muted:   "#64748b", // --muted : secondary text
    light:   "#94a3b8",
    bg:      "#F7F8FC", // --bg    : page background
    surface: "#ffffff", // --surface: cards
    border:  "#E8ECF4", // --border
    radius:  "12px",    // --radius: border-radius for cards/buttons
  },

  // ── Pages ─────────────────────────────────────────────────────────────
  // Set a page to false to disable it (hides nav link, route returns 404).
  pages: {
    home: {
      // Hero variant — picks which hero component renders at top of homepage
      // "video"   → HeroVideo   (looping video background, rotating headline — plumbers/roofers)
      // "split"   → HeroSplit   (image left / text right — barbers/salons)
      // "minimal" → HeroMinimal (centered text only — cleanest, fastest)
      // "phone"   → HeroPhone   (phone number front-and-center — max conversion, emergency trades)
      hero: "video" as "video" | "split" | "minimal" | "phone",

      // Ordered sections that appear below the hero.
      // Remove a key to hide that section. Reorder to change sequence.
      sections: [
        "trust",         // TrustStrip — 4 stat cards
        "services",      // ServicesGrid or ServicesList (controlled by sections.services.variant)
        "process",       // ProcessSteps — "How we work" (4 steps)
        "before-after",  // BeforeAfterSlider (hidden automatically if beforeAfter[] is empty)
        "testimonials",  // TestimonialsRow or TestimonialsCarousel
        "why-us",        // WhyUs — numbered differentiators
        "service-areas", // ServiceAreas — cities/regions covered
        "cta",           // CtaBanner or CtaSplit
      ] as Array<"trust" | "services" | "before-after" | "testimonials" | "why-us" | "process" | "service-areas" | "gallery-grid" | "about" | "faq-preview" | "cta">,
    },
    services:  true,
    about:     true,
    contact:   true,
    // Optional — set true to enable route + add link to client.nav[]
    faq:       false,
    emergency: false,
    gallery:   false,
    pricing:   false,
    blog:      false,
  },

  // ── Section variants ──────────────────────────────────────────────────
  // Each section with multiple layouts exposes a variant key here.
  // Swap variant → different component renders, zero component file edits.
  sections: {
    services: {
      // "grid" → ServicesGrid.astro  (2-col cards with 3D hover — trades, plumbers, roofers)
      // "list" → ServicesList.astro  (horizontal rows — barbers, salons, cleaners)
      variant: "grid" as "grid" | "list",
      eyebrow: "Wat wij oplossen",
      heading: "Elk loodgietersprobleem, dezelfde dag opgelost.",
      subtext: "Van gesprongen pijpen om 2u 's nachts tot geplande badkamerinstallaties.",
    },
    testimonials: {
      // "row"      → TestimonialsRow.astro      (static 3-col grid — clean, fast)
      // "carousel" → TestimonialsCarousel.astro (auto-advancing — better for mobile)
      variant: "row" as "row" | "carousel",
      eyebrow: "Klantervaringen",
      heading: "Wat onze klanten zeggen",
    },
    cta: {
      // "banner" → CtaBanner.astro (centered dark panel, phone-first — trades)
      // "split"  → CtaSplit.astro  (image left / CTA right — booking-first niches)
      variant: "banner" as "banner" | "split",
      heading: "Hebt u nu een loodgieter nodig?",
      subtext: "Waterschade verdubbelt elke 24 uur. Eén telefoontje stuurt een gecertificeerde loodgieter uw kant op.",
      ctaLabel: "Bel Nu — Gratis",
      image: "/images/cta-image.jpg", // only used by "split" variant
      assurances: [
        "Geen verplichting",
        "Geen voorrijkosten",
        "45 min aankomst",
        "Vaste prijs offerte",
      ],
    },
    whyUs: {
      eyebrow: "Waarom Dropwork",
      heading: "We bouwden de loodgieter die we zelf hadden gewild.",
      subtext:  "Onbetrouwbare prijzen, trage aankomst en slordig werk — we losten alle drie op.",
      // 3–4 differentiator cards. Replace with client's actual USPs.
      points: [
        {
          number:    "01",
          title:     "45 Minuten Aankomsttijd, Gegarandeerd",
          body:      "We hebben bestelwagens in uw buurt. Als we 45 minuten beloven en te laat komen, krijgt u 10% korting op uw factuur. Geen uitzonderingen, geen excuses.",
          badge:     "Getimed & gevolgd",
          badgeIcon: "clock",
        },
        {
          number:    "02",
          title:     "Prijs Akkoord Vóór Start van Werken",
          body:      "U krijgt een schriftelijke prijs ter plaatse vóór er iets begint. Dat cijfer verandert niet. Niet nadat de muur open is, niet na iets anders.",
          badge:     "Schriftelijk & bindend",
          badgeIcon: "document",
        },
        {
          number:    "03",
          title:     "Opgelost of Gratis — We Menen het",
          body:      "Als we het bij het eerste bezoek niet kunnen oplossen binnen de offerte, bent u ons niets verschuldigd. We komen terug met een plan, zonder extra kosten.",
          badge:     "Risicovrije garantie",
          badgeIcon: "shield",
        },
        {
          number:    "04",
          title:     "Beschikbaar Elk Uur van Elke Dag",
          body:      "24/7 betekent geen slaperig wachtnummer. Het betekent een echte loodgieter, volledig uitgerust, aan uw deur. Elke nacht, elk weekend, elke feestdag.",
          badge:     "Lokaal & altijd bereikbaar",
          badgeIcon: "location",
        },
      ],
    },
  },

  // ── Nav links ─────────────────────────────────────────────────────────
  // Header renders these links. Add/remove to match enabled pages.
  nav: [
    { label: "Diensten", href: "/#diensten" },
    { label: "Reviews",  href: "/#reviews" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact",  href: "/contact" },
  ],

  // ── Marquee ───────────────────────────────────────────────────────────
  // Items scrolling in the marquee band. Replace with client's services/keywords.
  marqueeItems: [
    "Noodloodgieters",
    "Lekdetectie & Reparatie",
    "Ketelonderhoud",
    "Afvoer Ontstopping",
    "Centrale Verwarming",
    "Pijpvervanging",
    "Badkamer Installatie",
    "24/7 Beschikbaar",
    "Vaste Prijsofferte",
  ],

  // ── Hero ──────────────────────────────────────────────────────────────
  hero: {
    headline:      "Problemen met",
    rotatingWords: ["lekken", "verstoppingen", "toiletten", "kranen", "spoedproblemen"],
    subtext:       "Snelle en betrouwbare loodgieter voor herstellingen, ontstoppingen en installaties. Transparante prijzen, propere afwerking en snelle service bij u in de buurt.",
    heroImage:     "/images/hero.jpg",   // used by HeroSplit + HeroMinimal
    videoUrls: [
      "https://videos.pexels.com/video-files/9890450/9890450-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/9890453/9890453-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/15959642/15959642-uhd_2560_1440_60fps.mp4",
      "https://videos.pexels.com/video-files/7584762/7584762-uhd_2560_1440_25fps.mp4",
    ],
    ctaLabel:   "Bel Nu",
    trustBadge: "Nu beschikbaar — 24/7 spoedservice",
  },

  // ── Trust items ───────────────────────────────────────────────────────
  // Drives TrustStrip. Exactly 4 items.
  // icon options: "clock" | "bolt" | "badge" | "euro" | "users" | "star" | "shield"
  trustItems: [
    { icon: "clock",  value: "45 min",  label: "Gemiddelde aankomsttijd" },
    { icon: "users",  value: "4.800+",  label: "Tevreden klanten" },
    { icon: "badge",  value: "15 jr",   label: "Gecertificeerde ervaring" },
    { icon: "check",  value: "Gratis",  label: "Als het niet lukt — onze garantie" },
  ],

  // ── Info card ─────────────────────────────────────────────────────────
  // Floating card shown in HeroVideo (desktop only).
  infoCard: {
    title: "Onze Belofte",
    items: [
      { icon: "clock",  text: "Gemiddelde responstijd: 30–60 min" },
      { icon: "shield", text: "Geen verborgen kosten" },
      { icon: "bolt",   text: "Zelfde dag geholpen" },
    ],
  },

  // ── Services ──────────────────────────────────────────────────────────
  // Drives ServicesGrid + ServicesList + diensten.astro.
  // icon options: "droplet" | "drain" | "flame" | "wrench" | "scissors" | "home" | "zap" | "tool"
  services: [
    {
      icon:        "droplet",
      title:       "Lekdetectie",
      price:       "€95–€175",
      description: "Professionele opsporing van verborgen lekken met moderne detectieapparatuur. Snel, nauwkeurig en zonder onnodige schade.",
    },
    {
      icon:        "drain",
      title:       "Afvoer Ontstopping",
      price:       "€75–€150",
      description: "Van standaard tot complexe verstoppingen in keuken, douche of toilet. Inclusief reiniging van de afvoer.",
    },
    {
      icon:        "flame",
      title:       "Ketelonderhoud",
      price:       "€90–€220",
      description: "Onderhoud en reparatie van verwarmingsketels. Exclusief onderdelen. Gecertificeerd en met garantie.",
    },
    {
      icon:        "wrench",
      title:       "Installatie",
      price:       "€120–€300",
      description: "Plaatsing van kranen, toiletten, douches, wastafels en meer. Vakkundig uitgevoerd met materiaalgarantie.",
    },
  ],

  // ── Before/After ──────────────────────────────────────────────────────
  // Drives BeforeAfterSlider. Set to [] to hide the section entirely.
  beforeAfter: [
    {
      label:    "Badkamer",
      before:   "/images/before-bathroom.png",
      after:    "/images/after-bathroom.png",
      caption:  "Badkamer renovatie",
      time:     "1 dag",
      location: "Brugge",
    },
    {
      label:    "Afvoer",
      before:   "/images/before-drain.png",
      after:    "/images/after-drain.png",
      caption:  "Afvoer ontstopt",
      time:     "45 min",
      location: "Gent",
    },
    {
      label:    "Kraan",
      before:   "/images/before-faucet.png",
      after:    "/images/after-faucet.png",
      caption:  "Kraan vervangen",
      time:     "30 min",
      location: "Brugge",
    },
  ],

  // ── Testimonials ──────────────────────────────────────────────────────
  // Drives TestimonialsRow + TestimonialsCarousel.
  // aggregate: drives the rating box in the reviews section
  reviewAggregate: {
    score:    "4.9",
    count:    "320+",
    platforms: [
      { name: "Google",     score: "4.9", pct: "96%" },
      { name: "Facebook",   score: "4.8", pct: "92%" },
      { name: "Trustpilot", score: "5.0", pct: "98%" },
    ],
    heading: "320+ tevreden klanten\nin de regio Brugge.",
    eyebrow: "Wat klanten zeggen",
  },

  testimonials: [
    { name: "Lore V.",         rating: 5, text: "Om 23u gebeld wegens een gesprongen pijp. Loodgieter was er na 40 minuten. Kalm, professioneel, opgelost in twee uur. Prijs exact zoals afgesproken. Ik bel nooit iemand anders.",                location: "Brugge · Noodoproep" },
    { name: "Pieter D.",       rating: 5, text: "Drie andere bedrijven hadden het lek niet gevonden. Dropwork vond het in 20 minuten met een sensor. Zelfde dag hersteld. Ongelooflijk vakwerk.",                                                    location: "Gent · Lekdetectie" },
    { name: "Marie-Claire W.", rating: 5, text: "Onze ketel viel uit op Kerstavond. Ze namen meteen op, waren eerlijk dat het mogelijk de volgende ochtend zou zijn, en stonden om 7u aan de deur. Opgelost voor de middag.",                       location: "Brugge · Ketelreparatie" },
    { name: "Thomas B.",       rating: 5, text: "Heel netjes en snel gewerkt. Vloerprotectie gelegd voor ze begonnen, alles opgeruimd achteraf. De prijs was exact wat ze telefonisch hadden gezegd.",                                              location: "Kortrijk · Badkamer" },
    { name: "Saar M.",         rating: 5, text: "Oprecht verbaasd over hoe professioneel dit verliep. Twee eerdere loodgieters waren te laat, vaag over prijs en lieten een bende achter. Dit was precies het tegenovergestelde.",                   location: "Brugge · Afvoer" },
  ],

  // ── Stats ─────────────────────────────────────────────────────────────
  // Drives over-ons.astro stats row.
  stats: [
    { value: "15+",      label: "Jaar ervaring" },
    { value: "4.800+",   label: "Tevreden klanten" },
    { value: "< 45 min", label: "Gemiddelde aankomsttijd" },
    { value: "24/7",     label: "Bereikbaar" },
  ],

  // ── About ─────────────────────────────────────────────────────────────
  // Drives over-ons.astro and any "about" homepage section.
  about: {
    eyebrow: "Ons verhaal",
    heading: "Uw vertrouwde loodgieter in de regio.",
    body: [
      "Dropwork Loodgieters is een erkend loodgietersbedrijf gevestigd in Brugge. Al meer dan 15 jaar staan wij klaar voor particulieren en bedrijven in de regio voor alle loodgieterswerk — van kleine herstellingen tot volledige badkamerrenovaties.",
      "Ons team van gecertificeerde loodgieters werkt 7 dagen op 7, 24 uur op 24. Wij geloven in eerlijke prijzen, transparante communicatie en een propere afwerking.",
    ],
    // Icon cards on the right side of the about section
    // icon options: "bolt" | "shield" | "badge" | "clock" | "users" | "star"
    values: [
      { icon: "bolt",   title: "Snelle interventie",      body: "Gemiddeld binnen 45 minuten ter plaatse in de regio Brugge." },
      { icon: "shield", title: "Geen verborgen kosten",   body: "Altijd een duidelijke prijsindicatie vóór we beginnen." },
      { icon: "badge",  title: "Erkend & gecertificeerd", body: "Volledig vergund en verzekerd, met garantie op alle werken." },
      { icon: "clock",  title: "24/7 bereikbaar",         body: "Ook in het weekend en op feestdagen, zonder meerprijs." },
    ],
    // Certification badges shown in the about page strip
    certifications: [
      "Erkend aannemer",
      "BA-verzekeraar",
      "Gasinstallateur vergund",
      "Sanitair gecertificeerd",
      "Cv-installateur",
    ],
    // Team members grid. Set to [] to hide the team section entirely.
    // image: put photos in public/images/team/
    team: [] as Array<{
      name:   string;
      role:   string;
      bio:    string;
      image:  string;
      badges: string[];
    }>,
  },

  // ── Process steps ────────────────────────────────────────────────────
  // Drives ProcessSteps section. Shows "How we work" as numbered steps.
  // Set to null or empty steps[] to hide the section.
  process: {
    eyebrow: "Hoe werkt het",
    heading: "Uw probleem opgelost in 4 stappen",
    subtext: "Van uw telefoontje tot een gegarandeerde oplossing — snel, transparant en zonder verrassingen.",
    steps: [
      {
        number: "01",
        icon: "phone",
        title: "Bel ons",
        body: "Vertel ons uw probleem. We zijn 24/7 bereikbaar. Gemiddeld neemt een gecertificeerde loodgieter in minder dan 30 seconden op.",
      },
      {
        number: "02",
        icon: "clock",
        title: "Snelle aankomst",
        body: "Een monteur vertrekt onmiddellijk richting u. Gemiddeld zijn wij binnen 45 minuten ter plaatse — ook in het weekend en 's nachts.",
      },
      {
        number: "03",
        icon: "document",
        title: "Diagnose & vaste prijs",
        body: "We inspecteren het probleem en geven u een schriftelijke vaste prijs vóór we beginnen. Geen verborgen kosten, geen verrassingen.",
      },
      {
        number: "04",
        icon: "shield",
        title: "Opgelost & gegarandeerd",
        body: "We lossen het op dezelfde dag op en ruimen netjes op. Alle werken zijn gedekt door onze garantie. Lukt het niet? U betaalt niets.",
      },
    ] as Array<{ number: string; icon: string; title: string; body: string }>,
  },

  // ── Service areas ─────────────────────────────────────────────────────
  // Drives ServiceAreas section. Lists the cities/regions the business covers.
  // Set areas: [] to hide the section.
  serviceAreas: {
    eyebrow: "Ons werkgebied",
    heading: "Actief in de hele regio",
    subtext: "Bel ons — wij rijden er naartoe.",
    areas: [
      "Brugge", "Gent", "Kortrijk", "Roeselare", "Oostende",
      "Damme", "Torhout", "Tielt", "Menen", "Waregem",
      "Izegem", "Diksmuide", "Veurne",
    ],
  },

  // ── Gallery grid ──────────────────────────────────────────────────────
  // Drives GalleryGrid section (photo grid of completed work).
  // Set photos: [] to hide the section entirely.
  gallery: {
    eyebrow: "Ons werk",
    heading: "Recent afgewerkte projecten",
    photos: [] as Array<{ src: string; caption: string; tag?: string }>,
  },

  // ── FAQ ───────────────────────────────────────────────────────────────
  // Drives FaqAccordion on the /faq page and optionally on homepage as "faq-preview".
  // Set client.pages.faq: true to enable the FAQ page.
  faq: [
    {
      question: "Hoe snel kunt u ter plaatse zijn?",
      answer:   "Gemiddeld binnen 45 minuten in de regio Brugge. Bij spoedgevallen geven wij altijd prioriteit. Als wij de beloofde aankomsttijd niet halen, ontvangt u 10% korting op uw factuur.",
    },
    {
      question: "Werkt u ook in het weekend en op feestdagen?",
      answer:   "Ja — wij zijn 7 dagen per week, 24 uur op 24 bereikbaar. Er wordt geen meerprijs aangerekend voor weekend- of nachtinterventies.",
    },
    {
      question: "Wat kost een spoedinterventie?",
      answer:   "Onze tarieven zijn volledig transparant: u ontvangt altijd een vaste prijs vóór wij beginnen. Geen verborgen kosten, geen verrassingen achteraf. Lekdetectie: € 95–175 | Afvoer ontstopping: € 75–150 | Ketelonderhoud: € 90–220.",
    },
    {
      question: "Geeft u garantie op uw werk?",
      answer:   "Ja — wij geven garantie op alle uitgevoerde werken. Als het probleem niet opgelost is na het eerste bezoek, betaalt u niets. Wij komen terug met een plan, zonder extra kosten.",
    },
    {
      question: "Welke regio's bedient u?",
      answer:   "Wij zijn actief in Brugge, Damme, Kortrijk, Gent en de ruimere omgeving. Bel ons voor uw exacte locatie — wij rijden er naartoe.",
    },
    {
      question: "Moet ik zelf iets doen vóór de loodgieter aankomt?",
      answer:   "Bij waterlekkage: draai de hoofdkraan dicht (meestal bij de meterkast). Dit voorkomt verdere schade. Noteer waar u het lek ziet en of er al schade is — dit helpt ons sneller te werken.",
    },
  ],

  // ── AI chatbot ────────────────────────────────────────────────────────
  ai: {
    enabled:     true,
    provider:    "groq" as "groq" | "openai" | "anthropic",
    model:       "llama-3.3-70b-versatile",
    maxTokens:   250,
    temperature: 0.65,
    systemPrompt: `Je bent de digitale assistent van Dropwork Loodgieters, een loodgietersbedrijf in de regio Brugge.

Bedrijfsinfo:
- Telefoon: +32 500 00 00
- Bereikbaar: 7 dagen per week, 24u/24u (ook weekend en feestdagen)
- Aankomsttijd: gemiddeld 45 minuten
- Ervaring: 15+ jaar, 4.800+ tevreden klanten, gecertificeerd, met garantie

Diensten & indicatieve prijzen (incl. BTW):
- Lekdetectie: € 95 – € 175
- Afvoer ontstopping: € 75 – € 150
- Ketelonderhoud/-reparatie: € 90 – € 220 (excl. onderdelen)
- Installatie (kraan, toilet, douche, wastafel…): € 120 – € 300

Instructies:
- Antwoord in dezelfde taal als de gebruiker (Nederlands of Engels)
- Wees vriendelijk, beknopt en direct — max 3-4 zinnen per antwoord
- Geef altijd een nuttig, informatief antwoord op de vraag
- Sluit ELKE respons af met een korte aanbeveling om een professional te bellen of langs te laten komen
- Stimuleer NOOIT de klant om zelf iets te repareren of te installeren
- Bij noodgeval: zeg eerst "draai de hoofdkraan dicht bij de meterkast", dan direct bellen
- Maak geen informatie op die niet hierboven staat`,
  },

  // ── SEO ───────────────────────────────────────────────────────────────
  seo: {
    title:       "Dropwork — Loodgieter Brugge",
    description: "Snelle en betrouwbare loodgieter in Brugge. 24/7 bereikbaar voor spoedgevallen, ontstoppingen, lekdetectie en installaties. Gemiddeld binnen 45 minuten ter plaatse.",
    locale:      "nl",
    ogImage:     "/images/og-image.jpg",
  },

  // ── Footer ────────────────────────────────────────────────────────────
  footer: {
    hours:     "Ma–Zo: 7:00–22:00 (spoeddienst 24/7)",
    address:   "Brugge, België",
    vatNumber: "BE 0000.000.000",
    links: [
      { label: "Diensten", href: "/diensten" },
      { label: "Over ons", href: "/over-ons" },
      { label: "Contact",  href: "/contact" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
    copyright: `© ${new Date().getFullYear()} Dropwork Loodgieters`,
  },

} as const;

export type Client = typeof client;
