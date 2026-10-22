/**
 * Business details, navigation, and the copy every page shares.
 * Page-specific copy lives in `src/content/pages`.
 */

export const site = {
  name: "Founders Window Care & Detailing",
  url: "https://foundersclt.com",
  phone: {
    display: "(980) 981-7203",
    href: "tel:9809817203",
    schema: "+1-980-981-7203",
  },
  rating: { value: "5.0", count: 99 },
  logo: { src: "/images/logo.webp", alt: "Founders Window Care & Detailing logo" },
  googleMaps: "https://maps.google.com/maps?cid=13583743942507051725",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "06:00",
    closes: "21:00",
    label: "6am to 9pm",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/p/Founders-Window-Care-Detailing-61589818288646/" },
    { label: "Instagram", href: "https://www.instagram.com/foundersclt/" },
  ],
  reviewUrl: "https://founderscltllc.localreview.link/feedback",
} as const;

export const ratingLabel = `${site.rating.value} Stars On Google (${site.rating.count} Reviews)`;

export type NavLink = { label: string; href: string };

export const serviceLinks: NavLink[] = [
  { label: "Window Cleaning", href: "/window-cleaning-charlotte-nc" },
  { label: "Gutter Cleaning", href: "/gutter-cleaning-charlotte-nc" },
  { label: "Solar Panel Cleaning", href: "/solar-panel-cleaning-charlotte-nc" },
  { label: "Exterior Window Cleaning", href: "/exterior-window-cleaning-charlotte-nc" },
  { label: "Interior Window Cleaning", href: "/interior-window-cleaning-charlotte-nc" },
  { label: "Window Frame & Sill Cleaning", href: "/window-frame-sill-cleaning-charlotte-nc" },
  { label: "Residential Window Cleaning", href: "/residential-window-cleaning-charlotte-nc" },
  { label: "Skylight Cleaning", href: "/skylight-cleaning-charlotte-nc" },
  { label: "Commercial Window Cleaning", href: "/commercial-window-cleaning-charlotte-nc" },
  { label: "Hard Water Stain Removal", href: "/hard-water-stain-removal-charlotte-nc" },
];

/** Charlotte itself is served by the home page. */
export const areaLinks: NavLink[] = [
  { label: "Charlotte", href: "/" },
  { label: "Myers Park", href: "/myers-park-nc" },
  { label: "Cotswold", href: "/cotswold-nc" },
  { label: "Dilworth", href: "/dilworth-nc" },
  { label: "Ballantyne", href: "/ballantyne-nc" },
  { label: "SouthPark", href: "/southpark-nc" },
  { label: "Matthews", href: "/matthews-nc" },
  { label: "Pineville", href: "/pineville-nc" },
  { label: "Weddington", href: "/weddington-nc" },
  { label: "Marvin", href: "/marvin-nc" },
  { label: "Plaza Midwood", href: "/plaza-midwood-nc" },
];

export const businessLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
  { label: "We're Hiring", href: "/hiring" },
  { label: "Review Us", href: site.reviewUrl },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

/** Italic line under every call-to-action and form. */
export const trustLine = "Certified | Insured | Trusted";

/** Green band under each hero. */
export const bandText = "Proudly Serving The Greater Charlotte Metro Area";

/** The four tiles in every "services" block; images can be swapped per page. */
export const serviceTiles = [
  {
    title: "Professional Window Cleaning",
    text: "Enjoy crystal-clear views with streak-free, spotless windows.",
    items: [
      "Interior & Exterior Window Cleaning",
      "Window Frames & Sills Detailing",
      "Skylight Cleaning",
      "French Pane & Storm Window Services",
    ],
  },
  {
    title: "Comprehensive Gutter Care",
    text: "Protect your home's foundation and landscaping from water damage.",
    items: [
      "Full Gutter & Downspout Clearing",
      "Obstruction & Clog Removal",
      "Exterior Gutter Washing",
      "Scheduled Gutter Maintenance Plans",
    ],
  },
  {
    title: "Efficient Solar Panel Cleaning",
    text: "Maximize energy output and extend the life of your solar investment.",
    items: [
      "Residential Solar Panel Cleaning",
      "Commercial Solar Panel Cleaning",
      "Photovoltaic Panel Cleaning",
      "Deionized Water Cleaning",
    ],
  },
  {
    title: "Exterior Detailing & Washing",
    text: "Renew your home's curb appeal with a deep, thorough clean.",
    items: [
      "House Washing & Siding Cleaning",
      "Pressure & Power Washing (Driveways, Patios)",
      "Soft Washing (Delicate Surfaces)",
      "Deck & Fence Cleaning",
    ],
  },
];

/** Headings mark their gold accent words with `*asterisks*`. */
export const processSection = {
  heading: "How We Make Your Home Sparkle *Simple*",
  steps: [
    {
      icon: "phone",
      title: "Reach Out",
      text: "Call or message us with your cleaning needs. We'll gather necessary details to understand your project.",
    },
    {
      icon: "clipboard",
      title: "We Visit & Quote",
      text: "We visit your property for an accurate assessment and provide a transparent, detailed quote for our services.",
    },
    {
      icon: "badge",
      title: "Project Delivered",
      text: "Our skilled crew meticulously performs the work, ensuring stunning results and your complete satisfaction.",
    },
  ],
} as const;

export const serviceArea = {
  heading: "Proudly Serving Charlotte Metro Area",
  areas: areaLinks.map((area) => area.label),
  footer: "And all areas in between!",
};
