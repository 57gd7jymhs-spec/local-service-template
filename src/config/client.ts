/**
 * CLIENT CONFIG — edit this file for each new client.
 * Everything business-specific lives here. The template reads from it and
 * builds the entire site. Changing client = changing this one file.
 */

export const client = {
  brand: {
    name: "Dropwork",
    tagline: "Loodgieters",
    niche: "plumber" as "plumber" | "barber" | "roofer" | "electrician" | "generic",
    phone: "+32 500 00 00",
    email: "info@dropwork.be",
    location: "Brugge",
    logo: "/images/logo.png",
    logoNegative: "/images/logo-negative.png",
  },

  theme: {
    primary: "#1847ED",
    navy: "#0D1E5C",
    ink: "#1A2233",
    muted: "#64748b",
    light: "#94a3b8",
    bg: "#F7F8FC",
    surface: "#ffffff",
    border: "#E8ECF4",
    radius: "12px",
  },

  pages: {
    home: {
      hero: "video" as "video" | "split" | "minimal",
      sections: ["services", "before-after", "testimonials", "cta"] as Array<
        "services" | "before-after" | "testimonials" | "cta" | "about" | "faq"
      >,
    },
    services: true,
    about: true,
    contact: true,
    faq: false,
    blog: false,
    emergency: false,
    gallery: false,
    pricing: false,
  },

  hero: {
    headline: "Problemen met",
    rotatingWords: ["lekken", "verstoppingen", "toiletten", "kranen", "spoedproblemen"],
    subtext:
      "Snelle en betrouwbare loodgieter voor herstellingen, ontstoppingen en installaties. Transparante prijzen, propere afwerking en snelle service bij u in de buurt.",
    heroImage: "/images/hero.jpg",
    videoUrls: [
      "https://videos.pexels.com/video-files/9890450/9890450-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/9890453/9890453-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/15959642/15959642-uhd_2560_1440_60fps.mp4",
      "https://videos.pexels.com/video-files/7584762/7584762-uhd_2560_1440_25fps.mp4",
    ],
    ctaLabel: "Bel Nu",
    trustBadge: "Nu beschikbaar — 24/7 spoedservice",
  },

  trustItems: [
    { icon: "clock", label: "24/7 Spoedservice" },
    { icon: "bolt",  label: "Snelle Interventie" },
    { icon: "badge", label: "Erkende Loodgieters" },
    { icon: "euro",  label: "Transparante Prijzen" },
  ],

  infoCard: {
    title: "Onze Belofte",
    items: [
      { icon: "clock",  text: "Gemiddelde responstijd: 30–60 min" },
      { icon: "shield", text: "Geen verborgen kosten" },
      { icon: "bolt",   text: "Zelfde dag geholpen" },
    ],
  },

  services: [
    {
      icon: "droplet",
      title: "Lekdetectie",
      price: "€95–€175",
      description:
        "Professionele opsporing van verborgen lekken met moderne detectieapparatuur. Snel, nauwkeurig en zonder onnodige schade.",
    },
    {
      icon: "drain",
      title: "Afvoer Ontstopping",
      price: "€75–€150",
      description:
        "Van standaard tot complexe verstoppingen in keuken, douche of toilet. Inclusief reiniging van de afvoer.",
    },
    {
      icon: "flame",
      title: "Ketelonderhoud",
      price: "€90–€220",
      description:
        "Onderhoud en reparatie van verwarmingsketels. Exclusief onderdelen. Gecertificeerd en met garantie.",
    },
    {
      icon: "wrench",
      title: "Installatie",
      price: "€120–€300",
      description:
        "Plaatsing van kranen, toiletten, douches, wastafels en meer. Vakkundig uitgevoerd met materiaalgarantie.",
    },
  ],

  beforeAfter: [
    {
      label: "Badkamer",
      before: "/images/before-bathroom.png",
      after: "/images/after-bathroom.png",
      caption: "Badkamer renovatie",
      time: "1 dag",
      location: "Brugge",
    },
    {
      label: "Afvoer",
      before: "/images/before-drain.png",
      after: "/images/after-drain.png",
      caption: "Afvoer ontstopt",
      time: "45 min",
      location: "Gent",
    },
    {
      label: "Kraan",
      before: "/images/before-faucet.png",
      after: "/images/after-faucet.png",
      caption: "Kraan vervangen",
      time: "30 min",
      location: "Brugge",
    },
  ],

  testimonials: [
    {
      name: "Jan De Smet",
      rating: 5,
      text: "Binnen het uur ter plaatse, professioneel en propere afwerking. Aanrader!",
      location: "Brugge",
    },
    {
      name: "Sarah Vermeersch",
      rating: 5,
      text: "Lekkende kraan op zaterdagavond — in minder dan 45 minuten opgelost. Top service!",
      location: "Damme",
    },
    {
      name: "Marc Claeys",
      rating: 5,
      text: "Duidelijke uitleg, eerlijke prijs en geen rommel achtergelaten. Zeker terugkomen.",
      location: "Brugge",
    },
  ],

  stats: [
    { value: "15+",      label: "Jaar ervaring" },
    { value: "4.800+",   label: "Tevreden klanten" },
    { value: "< 45 min", label: "Gemiddelde aankomsttijd" },
    { value: "24/7",     label: "Bereikbaar" },
  ],

  ai: {
    enabled: true,
    provider: "groq" as "groq" | "openai" | "anthropic",
    model: "llama-3.3-70b-versatile",
    maxTokens: 250,
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

  seo: {
    title: "Dropwork — Loodgieter Brugge",
    description:
      "Snelle en betrouwbare loodgieter in Brugge. 24/7 bereikbaar voor spoedgevallen, ontstoppingen, lekdetectie en installaties. Gemiddeld binnen 45 minuten ter plaatse.",
    locale: "nl",
    ogImage: "/images/og-image.jpg",
  },

  footer: {
    hours: "Ma–Zo: 7:00–22:00 (spoeddienst 24/7)",
    address: "Brugge, België",
    links: [
      { label: "Diensten", href: "/diensten" },
      { label: "Over ons",  href: "/over-ons" },
      { label: "Contact",   href: "/contact" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
    copyright: `© ${new Date().getFullYear()} Dropwork Loodgieters`,
  },
} as const;

export type Client = typeof client;
