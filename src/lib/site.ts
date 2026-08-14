/**
 * Single source of truth for site copy, contact details, and section data.
 * Swap the placeholder phone/logo/reviews here and every section follows.
 */

export const site = {
  name: "Founders Window Care & Detailing",
  shortName: "FOUNDERS",
  tagline: "Window Care & Detailing",
  url: "https://founderswindowcare.com",
  logo: "/assets/founders-logo.svg",
  logoAlt:
    "Founders Window Care and Detailing logo — a gold crowned oak tree with a house window in its canopy",
  phone: {
    display: "(704) 555-0142",
    href: "tel:+17045550142",
  },
  city: "Charlotte, NC",
  social: [
    { label: "Founders on Instagram", href: "#", icon: "instagram" },
    { label: "Founders on Facebook", href: "#", icon: "facebook" },
    { label: "Founders on TikTok", href: "#", icon: "tiktok" },
  ],
} as const;

export const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Memberships", href: "/#memberships" },
  { label: "Areas Served", href: "/#areas" },
] as const;

/** The drawer carries one extra link the desktop pill has no room for. */
export const drawerLinks = [
  ...navLinks.slice(0, 4),
  { label: "Our Process", href: "/#process" },
  navLinks[4],
] as const;

export type Service = {
  title: string;
  blurb: string;
  /** Wide tiles span two columns in the bento grid. */
  wide?: boolean;
  image: { alt: string; note: string; src?: string };
};

export const services: Service[] = [
  {
    title: "Exterior Window Cleaning",
    blurb:
      "Hand-detailed outside glass, frames wiped, every drop cleared from the sill.",
    wide: true,
    image: {
      alt: "Technician using a water-fed pole to clean the tall exterior windows of a two-story brick home",
      note: "1300 × 800",
    },
  },
  {
    title: "Interior Window Cleaning",
    blurb: "Crystal-clear views and a fresh look for every room in the house.",
    wide: true,
    image: {
      alt: "Technician in shoe covers cleaning a living room window from the inside while sunlight fills the room",
      note: "1300 × 800",
    },
  },
  {
    title: "Screen Cleaning",
    blurb: "Screens washed, dried, and reseated square so the view comes back.",
    image: {
      alt: "Window screens laid out and being washed down on a driveway",
      note: "640 × 800",
    },
  },
  {
    title: "Track Detailing",
    blurb: "Grit vacuumed and tracks scrubbed so your sliders move like new.",
    image: {
      alt: "Close-up of a gloved hand scrubbing grit out of a sliding window track",
      note: "640 × 800",
    },
  },
  {
    title: "Gutter Cleaning",
    blurb: "Debris hauled, downspouts flushed, and photos sent when it's clear.",
    image: {
      alt: "Technician on a ladder scooping leaves out of a residential gutter",
      note: "640 × 800",
    },
  },
  {
    title: "Solar Panel Cleaning",
    blurb: "A deionized rinse that clears pollen and film so output recovers.",
    image: {
      alt: "Rooftop solar array being rinsed with purified water, downtown skyline in the distance",
      note: "640 × 800",
    },
  },
  {
    title: "Pressure Washing",
    blurb: "Driveways and patios back to their original color, no etching.",
    image: {
      alt: "Pressure washer stripping years of grey off a concrete driveway, clean stripe clearly visible",
      note: "640 × 800",
    },
  },
  {
    title: "Soft Washing",
    blurb: "Gentle treatment that lifts algae from siding, brick, and roofing.",
    image: {
      alt: "Low-pressure soft wash treatment being applied to algae-streaked vinyl siding",
      note: "640 × 800",
    },
  },
  {
    title: "Auto Detailing",
    blurb:
      "Interior and exterior detailing at your home, glass polished to zero haze.",
    image: {
      alt: "Detailer buffing the door glass of a dark sedan in a residential driveway",
      note: "640 × 800",
    },
  },
  {
    title: "Skylights & High Glass",
    blurb: "Proper poles and ladder work for second-story and transom panes.",
    image: {
      alt: "Technician on a ladder reaching a second-story skylight above a stairwell",
      note: "640 × 800",
    },
  },
];

/**
 * Membership explainer video. Set `embedUrl` (e.g. a YouTube/Vimeo embed link)
 * and the play button swaps the poster for the player; until then the poster
 * slot stands in.
 */
export const membershipVideo = {
  embedUrl: null as string | null,
  poster: {
    src: undefined as string | undefined,
    alt: "Founders owner standing in front of a Charlotte home introducing the membership program",
    note: "Video thumbnail · 1600 × 900",
  },
} as const;

export type Plan = {
  tag: string;
  price: string;
  unit: string;
  featured?: boolean;
  /** `included: false` renders the muted cross-out row. */
  features: { label: string; included: boolean }[];
};

const perkLabels = [
  "Free GlassGuard rain coating",
  "7-day rain guarantee",
  "Free hard water removal",
];

export const plans: Plan[] = [
  {
    tag: "Monthly",
    price: "$120 off",
    unit: "Per cleaning",
    featured: true,
    features: perkLabels.map((label) => ({ label, included: true })),
  },
  {
    tag: "Quarterly",
    price: "$80 off",
    unit: "Per cleaning",
    features: perkLabels.map((label) => ({ label, included: true })),
  },
  {
    tag: "Biannual",
    price: "$40 off",
    unit: "Per cleaning",
    features: perkLabels.map((label) => ({ label, included: false })),
  },
];

export type Review = {
  name: string;
  meta: string;
  stars: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Marcus R.",
    meta: "Dilworth · Google review",
    stars: 5,
    quote:
      "They did interior and exterior on 22 windows plus all the screens on our Dilworth bungalow. Arrived when they said, laid down runners without being asked, and spent real time on the old wavy glass upstairs. First time in years I've been able to see the yard properly.",
  },
  {
    name: "Priya L.",
    meta: "Property manager, South End",
    stars: 5,
    quote:
      "We manage six retail suites and had gone through three vendors in two years. Founders has hit every scheduled Tuesday for eight months straight, and the one time a crew ran late they called me before I noticed. That's the whole review.",
  },
  {
    name: "Dana T.",
    meta: "Matthews · Google review",
    stars: 5,
    quote:
      "Booked window cleaning and added the driveway once I saw the quote was flat, not hourly. The concrete came back two shades lighter and nothing got blasted or streaked. Fair price, no upsell, and they texted photos of the gutters when they were done.",
  },
];

export type Step = {
  title: string;
  body: string;
  image: { alt: string; note: string; src?: string };
};

export const steps: Step[] = [
  {
    title: "Prep",
    body: "We walk the property with you, flag the problem glass, lay runners inside, and move whatever needs moving. Nothing starts until you know exactly what the visit covers and what it costs.",
    image: {
      alt: "Technician walking a homeowner around the property, pointing out problem glass before the job starts",
      note: "Step image · 900 × 900",
    },
  },
  {
    title: "Wash",
    body: "Purified water and hand tools on every pane. No harsh chemicals near your landscaping, your pets, or your paint — just the right solution worked across the glass and pulled clean.",
    image: {
      alt: "Technician working a squeegee across a large pane with purified water",
      note: "Step image · 900 × 900",
    },
  },
  {
    title: "Detail",
    body: "Perfection is in the details. Frames, sills, tracks, and the corners everyone else skips. Every edge polished and every surface inspected, so the glass looks right from any angle.",
    image: {
      alt: "Technician on a step ladder detailing the frame and corners of an exterior window",
      note: "Step image · 900 × 900",
    },
  },
  {
    title: "Inspect",
    body: "We walk it again together in daylight before we pack up. Anything you spot, we fix on the spot. That is the entire guarantee, and it is why most of our work comes from neighbors.",
    image: {
      alt: "Homeowner and technician inspecting finished windows together in daylight",
      note: "Step image · 900 × 900",
    },
  },
];

export const areasServed = [
  "Charlotte, NC",
  "Ballantyne, NC",
  "SouthPark, NC",
  "Myers Park, NC",
  "Dilworth, NC",
  "Matthews, NC",
  "Mint Hill, NC",
  "Huntersville, NC",
  "Cornelius, NC",
  "Waxhaw, NC",
  "Concord, NC",
  "Fort Mill, SC",
] as const;

export const footerLinks = {
  company: [
    { label: "About us", href: "/about" },
    { label: "Our work", href: "#" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Memberships", href: "/#memberships" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/#quote" },
  ],
  services: [
    { label: "Exterior windows", href: "/#services" },
    { label: "Interior windows", href: "/#services" },
    { label: "Screens & tracks", href: "/#services" },
    { label: "Pressure & soft washing", href: "/#services" },
    { label: "Auto detailing", href: "/#services" },
    { label: "Holiday lighting", href: "/#services" },
  ],
  legal: [
    { label: "Terms of service", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
} as const;
