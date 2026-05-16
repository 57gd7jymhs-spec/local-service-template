/**
 * EXAMPLE CONFIG — DakPro Dakwerkers (Roofer, Antwerp)
 *
 * To use this config:
 *   1. Copy this file to client.ts (overwrite)
 *   2. Replace images in public/images/
 *   3. Get a Web3Forms key at web3forms.com → paste into web3formsKey
 *   4. Push to GitHub → Cloudflare deploys automatically
 *
 * This demonstrates the template running for a roofer in Antwerp with:
 *   - Warm orange primary color
 *   - HeroMinimal variant (clean, fast, text-forward)
 *   - ServicesGrid (4 roofing services)
 *   - ProcessSteps ("How we work")
 *   - TestimonialsRow
 *   - ServiceAreas (Antwerp region)
 *   - CtaBanner phone-first
 */

export const client = {

  brand: {
    name:         "DakPro",
    tagline:      "Dakwerkers",
    niche:        "roofer" as "plumber" | "barber" | "roofer" | "electrician" | "painter" | "generic",
    phone:        "+32 478 00 00 00",
    email:        "info@dakpro.be",
    location:     "Antwerpen",
    logo:         "/images/logo.png",
    logoNegative: "/images/logo-negative.png",
    web3formsKey: "",
  },

  theme: {
    primary: "#E8651A",
    navy:    "#1C0F06",
    ink:     "#1A1410",
    muted:   "#6B5E55",
    light:   "#9E8E84",
    bg:      "#FAF8F6",
    surface: "#ffffff",
    border:  "#EDE8E4",
    radius:  "10px",
  },

  pages: {
    home: {
      hero: "minimal" as "video" | "split" | "minimal" | "phone",
      sections: [
        "trust",
        "services",
        "process",
        "before-after",
        "testimonials",
        "why-us",
        "service-areas",
        "cta",
      ] as Array<"trust" | "services" | "before-after" | "testimonials" | "why-us" | "process" | "service-areas" | "gallery-grid" | "about" | "faq-preview" | "cta">,
    },
    services:  true,
    about:     true,
    contact:   true,
    faq:       true,
    emergency: false,
    gallery:   false,
    pricing:   false,
    blog:      false,
  },

  sections: {
    services: {
      variant: "grid" as "grid" | "list",
      eyebrow: "Onze specialisaties",
      heading: "Elk dakprobleem, vakkundig opgelost.",
      subtext: "Van noodherstel na storm tot volledige renovaties — wij werken snel, netjes en met 10 jaar garantie.",
    },
    testimonials: {
      variant: "row" as "row" | "carousel",
      eyebrow: "Wat klanten zeggen",
      heading: "3.200+ daken later",
    },
    cta: {
      variant: "banner" as "banner" | "split",
      heading: "Dakschade? Bel ons vandaag nog.",
      subtext: "Elke dag uitstel is een dag meer risico op waterschade. Wij sturen een dakmeester langs voor een gratis inspectie.",
      ctaLabel: "Bel voor gratis inspectie",
      image: "/images/cta-image.jpg",
      assurances: [
        "Gratis dakinspectie",
        "Offerte binnen 24u",
        "10 jaar werkgarantie",
        "Erkend aannemer",
      ],
    },
    whyUs: {
      eyebrow: "Waarom DakPro",
      heading: "Dakwerkers die doen wat ze beloven.",
      subtext: "Geen verkopers. Geen tussenpersonen. Enkel gecertificeerde dakmeesters die uw dak behandelen als hun eigen.",
      points: [
        {
          number:    "01",
          title:     "Gratis Dakinspectie — Altijd",
          body:      "U betaalt niks voor een inspectie. We klimmen op het dak, maken foto's van alle schade en bezorgen u een schriftelijke offerte binnen 24 uur.",
          badge:     "Geen verplichtingen",
          badgeIcon: "shield",
        },
        {
          number:    "02",
          title:     "10 Jaar Garantie op Alle Werken",
          body:      "Wij staan achter ons werk. Elke herstelling en renovatie is gedekt door onze schriftelijke garantie van 10 jaar. Als er iets fout gaat, komen we terug.",
          badge:     "Schriftelijk & bindend",
          badgeIcon: "document",
        },
        {
          number:    "03",
          title:     "Erkend voor Plat én Hellend Dak",
          body:      "Ons team is gecertificeerd voor alle dakovervlakken: EPDM, bitumen, leien, pannen, zink en meer. Één aanspreekpunt voor elk type dak.",
          badge:     "Alle materialen",
          badgeIcon: "badge",
        },
        {
          number:    "04",
          title:     "Prijs Vastgelegd in de Offerte",
          body:      "U weet exact wat u betaalt vóór we beginnen. Geen meerwerken tenzij u ze vraagt. De prijs in de offerte is de prijs op de factuur.",
          badge:     "Transparante prijzen",
          badgeIcon: "document",
        },
      ],
    },
  },

  nav: [
    { label: "Diensten", href: "/#diensten" },
    { label: "Werkwijze", href: "/#werkwijze" },
    { label: "Reviews",  href: "/#reviews" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact",  href: "/contact" },
  ],

  marqueeItems: [
    "Dakinspectie Gratis",
    "Dakisolatie",
    "Dakpannen Vervangen",
    "EPDM & Bitumen",
    "Dakgoten Herstellen",
    "Stormschade Reparatie",
    "Plat Dak Renovatie",
    "10 Jaar Garantie",
    "Gecertificeerde Dakwerkers",
  ],

  hero: {
    headline:      "Uw dak in veilige handen.",
    rotatingWords: ["dakschade", "lekkages", "stormbeschadiging", "renovaties"],
    subtext:       "DakPro is uw erkende dakspecialist in de regio Antwerpen. Gratis inspectie, offerte binnen 24u, 10 jaar werkgarantie.",
    heroImage:     "/images/hero.jpg",
    videoUrls:     [],
    ctaLabel:   "Gratis Dakinspectie",
    trustBadge: "Gecertificeerd — 22 jaar actief",
  },

  trustItems: [
    { icon: "shield", value: "Gratis",  label: "Dakinspectie — altijd" },
    { icon: "users",  value: "3.200+",  label: "Daken gerenoveerd" },
    { icon: "badge",  value: "22 jr",   label: "Gecertificeerde ervaring" },
    { icon: "clock",  value: "24u",     label: "Offerte na inspectie" },
  ],

  infoCard: {
    title: "Onze Belofte",
    items: [
      { icon: "shield", text: "Gratis dakinspectie, geen verplichtingen" },
      { icon: "clock",  text: "Offerte binnen 24 uur na bezoek" },
      { icon: "badge",  text: "10 jaar schriftelijke werkgarantie" },
    ],
  },

  services: [
    {
      icon:        "home",
      title:       "Dakinspectie & Advies",
      price:       "Gratis",
      description: "Volledige inspectie van uw dak met fotoverslag. We detecteren alle schade, slijtage en risicozones — zonder verplichtingen.",
    },
    {
      icon:        "wrench",
      title:       "Dakherstel & Noodreparatie",
      price:       "€150–€650",
      description: "Snelle herstellingen na storm, hagelschade of lekkage. We dichtten het dak dezelfde dag en voorkomen verdere waterschade.",
    },
    {
      icon:        "tool",
      title:       "Dakisolatie",
      price:       "€30–€75/m²",
      description: "Isolatie van platte en hellende daken. Vergroot uw comfort, verlaag uw energiefactuur en verhoog de woningwaarde.",
    },
    {
      icon:        "home",
      title:       "Volledige Dakrenovatie",
      price:       "Op maat",
      description: "Vervanging van dakbedekking, draagstructuur of dakgoten. Alle materialen: leien, pannen, EPDM, bitumen, zink.",
    },
  ],

  beforeAfter: [
    {
      label:    "Plat dak",
      before:   "/images/before-flatroof.jpg",
      after:    "/images/after-flatroof.jpg",
      caption:  "Plat dak EPDM renovatie",
      time:     "2 dagen",
      location: "Antwerpen",
    },
    {
      label:    "Dakpannen",
      before:   "/images/before-tiles.jpg",
      after:    "/images/after-tiles.jpg",
      caption:  "Dakpannen vervangen",
      time:     "1 dag",
      location: "Mechelen",
    },
  ],

  reviewAggregate: {
    score:    "4.9",
    count:    "410+",
    platforms: [
      { name: "Google",     score: "4.9", pct: "96%" },
      { name: "Facebook",   score: "4.8", pct: "93%" },
      { name: "Trustpilot", score: "5.0", pct: "97%" },
    ],
    heading: "410+ klanten over\nhun dak en ons.",
    eyebrow: "Geverifieerde reviews",
  },

  testimonials: [
    { name: "Marc V.",         rating: 5, text: "Na de storm had ik twee grote lekken. DakPro was de volgende ochtend al ter plaatse voor de inspectie. Diezelfde dag al noodreparatie, en een week later de volledige herstelling. Netjes, snel en exact de prijs die ze zeiden.",                         location: "Antwerpen · Stormschade" },
    { name: "Lien D.",         rating: 5, text: "Drie offertes gevraagd. DakPro was niet de goedkoopste, maar wel de meest transparante. Foto's van alle schade, duidelijke uitleg, vaste prijs. Ze hadden gelijk: de andere twee hadden de isolatieschade gemist.",                              location: "Mechelen · Dakrenovatie" },
    { name: "Johan & Els P.",  rating: 5, text: "Volledige vervanging van ons leien dak van 180m². In 4 dagen klaar, netjes en binnen budget. De 10-jaar garantie geeft ons echt gemoedsrust. Zouden we morgen terug kiezen.",                                                                location: "Lier · Volledig nieuw dak" },
    { name: "Nathalie B.",     rating: 5, text: "Mijn EPDM dak lekte al een tijdje. Iemand had het al 'hersteld' voor mij — het was slordig gedaan. DakPro heeft het goed gerepareerd, uitgelegd wat er fout was gegaan, en me foto's gegeven van voor en na. Top service.",            location: "Boom · EPDM herstel" },
    { name: "Stef M.",         rating: 5, text: "Gratis dakinspectie geboekt. Ze vonden twee zones die ik zelf nooit had gezien. Kleine herstelling, grote besparing op lange termijn. Eerlijk en deskundig advies zonder me iets te willen aansmeren.",                                     location: "Wilrijk · Dakinspectie" },
  ],

  stats: [
    { value: "22+",    label: "Jaar ervaring" },
    { value: "3.200+", label: "Daken gerenoveerd" },
    { value: "10 jr",  label: "Werkgarantie" },
    { value: "24u",    label: "Offerte na inspectie" },
  ],

  about: {
    eyebrow: "Ons verhaal",
    heading: "Al 22 jaar de dakspecialist van de regio.",
    body: [
      "DakPro Dakwerkers werd opgericht in 2002 als éénmanszaak in Antwerpen. Vandaag telt ons team 14 gecertificeerde dakmeesters en zijn we actief in heel de provincie Antwerpen en omgeving.",
      "Wij zijn erkend voor alle dakovervlakken — plat en hellend, EPDM, bitumen, leien, pannen en zink. Elk project wordt afgerond met een schriftelijke garantie van 10 jaar.",
    ],
    values: [
      { icon: "shield", title: "Gratis dakinspectie",   body: "Altijd een gratis inspectie met fotoverslag vóór we een offerte opmaken." },
      { icon: "badge",  title: "Erkend & verzekerd",    body: "Volledig gecertificeerd aannemer, met alle vereiste vergunningen en verzekeringen." },
      { icon: "clock",  title: "Offerte binnen 24 uur", body: "Na de inspectie ontvangt u een gedetailleerde schriftelijke offerte binnen de dag." },
      { icon: "star",   title: "10 jaar werkgarantie",  body: "Alle werken zijn gedekt door onze schriftelijke garantie van 10 jaar." },
    ],
    certifications: [
      "Erkend aannemer",
      "Vlaamse dakmeester",
      "EPDM gecertificeerd",
      "BA-verzekeraar",
      "Energiespecialist",
    ],
    team: [],
  },

  process: {
    eyebrow: "Onze werkwijze",
    heading: "Van inspectie tot gegarandeerd dak in 4 stappen.",
    subtext: "Wij geloven in transparantie. U weet altijd wat er gaat gebeuren, wanneer en voor welke prijs.",
    steps: [
      {
        number: "01",
        icon: "phone",
        title: "Gratis inspectie boeken",
        body: "Bel ons of vul het formulier in. Wij plannen een gratis dakinspectie op een moment dat u past — ook in het weekend.",
      },
      {
        number: "02",
        icon: "check",
        title: "Dakinspectie met fotoverslag",
        body: "Een dakmeester inspecteert uw dak volledig. U krijgt een fotoverslag van alle bevindingen — ook als er niets dringend is.",
      },
      {
        number: "03",
        icon: "document",
        title: "Schriftelijke offerte binnen 24u",
        body: "Op basis van de inspectie ontvangt u een gedetailleerde vaste prijs. Geen verrassingen later. U beslist rustig.",
      },
      {
        number: "04",
        icon: "shield",
        title: "Werken met 10 jaar garantie",
        body: "Na uw akkoord plannen we de werken in. Na afloop ontvangt u een schriftelijke garantie van 10 jaar op alle uitgevoerde werken.",
      },
    ],
  },

  serviceAreas: {
    eyebrow: "Ons werkgebied",
    heading: "Actief in de provincie Antwerpen",
    subtext: "Bel ons — wij rijden er naartoe.",
    areas: [
      "Antwerpen", "Mechelen", "Lier", "Boom", "Wilrijk",
      "Mortsel", "Deurne", "Berchem", "Hoboken", "Merksem",
      "Schoten", "Wijnegem", "Zandhoven", "Herentals",
    ],
  },

  gallery: {
    eyebrow: "Ons werk",
    heading: "Recent afgewerkte daken",
    photos: [],
  },

  faq: [
    {
      question: "Zijn de dakinspectie echt gratis?",
      answer:   "Ja, absoluut. Een dakinspectie bij DakPro is altijd gratis en vrijblijvend. U betaalt pas als u beslist om de werken te laten uitvoeren.",
    },
    {
      question: "Hoe snel krijg ik een offerte na de inspectie?",
      answer:   "U ontvangt een gedetailleerde schriftelijke offerte binnen 24 uur na de inspectie. In dringende gevallen (stormschade, actief lek) kunnen we dezelfde dag nog een noodofferte opmaken.",
    },
    {
      question: "Wat houdt de 10-jaar werkgarantie precies in?",
      answer:   "Alle door DakPro uitgevoerde werken zijn gedekt door een schriftelijke werkgarantie van 10 jaar. Als er binnen die periode een probleem opduikt dat aan onze uitvoering te wijten is, komen we het gratis herstellen.",
    },
    {
      question: "Voor welke soorten daken zijn jullie gecertificeerd?",
      answer:   "Wij zijn erkend voor alle daktypen: hellende daken (leien, pannen, bitumen), platte daken (EPDM, bitumen, PVC), zinkdaken en dakgoten. Ons team heeft gecertificeerde specialisten voor elk materiaal.",
    },
    {
      question: "Werken jullie ook voor verzekeringsdossiers bij stormschade?",
      answer:   "Ja. Wij stellen een gedetailleerd fotoverslag op van alle schade dat u rechtstreeks aan uw verzekeraar kunt doorsturen. We helpen u ook bij het inschatten van de herstelling voor uw dossier.",
    },
  ],

  ai: {
    enabled:     true,
    provider:    "groq" as "groq" | "openai" | "anthropic",
    model:       "llama-3.3-70b-versatile",
    maxTokens:   250,
    temperature: 0.65,
    systemPrompt: `Je bent de digitale assistent van DakPro Dakwerkers, een dakspecialist in de regio Antwerpen.

Bedrijfsinfo:
- Telefoon: +32 478 00 00 00
- Actief in: Antwerpen, Mechelen, Lier en omgeving
- Ervaring: 22+ jaar, 3.200+ daken gerenoveerd
- Dakinspectie is altijd gratis en vrijblijvend

Diensten & indicatieve prijzen (incl. BTW):
- Dakinspectie: Gratis
- Dakherstel / noodreparatie: €150–€650
- Dakisolatie: €30–€75/m²
- Volledige dakrenovatie: op maat, offerte na inspectie

Garantie: 10 jaar schriftelijke werkgarantie op alle werken

Instructies:
- Antwoord in dezelfde taal als de gebruiker (Nederlands of Engels)
- Wees vriendelijk, beknopt en direct — max 3-4 zinnen
- Benadruk altijd de gratis dakinspectie als eerste stap
- Bij stormschade of actief lek: urgentie benadrukken, direct bellen aanraden
- Maak geen informatie op die niet hierboven staat`,
  },

  seo: {
    title:       "DakPro — Dakwerkers Antwerpen",
    description: "Erkende dakwerkers in Antwerpen en regio. Gratis dakinspectie, offerte binnen 24u, 10 jaar werkgarantie. Bel +32 478 00 00 00.",
    locale:      "nl",
    ogImage:     "/images/og-image.jpg",
  },

  footer: {
    hours:     "Ma–Vr: 7:30–18:00 (noodreparaties 7/7)",
    address:   "Antwerpen, België",
    vatNumber: "BE 0000.000.000",
    links: [
      { label: "Diensten", href: "/diensten" },
      { label: "Over ons", href: "/over-ons" },
      { label: "Contact",  href: "/contact" },
      { label: "FAQ",      href: "/faq" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
    copyright: `© ${new Date().getFullYear()} DakPro Dakwerkers`,
  },

} as const;

export type Client = typeof client;
