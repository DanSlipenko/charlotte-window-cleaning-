/**
 * Every photo on the site. Pages refer to these by key. `focal` is the point
 * (in % of the image) kept in view when the photo is cropped: `desktop` for
 * wide frames, `square` for everything else.
 */
export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  focal?: Record<"desktop" | "square", { x: number; y: number }>;
};

export const images = {
  founder: {
    src: "/images/founder-squeegee.webp",
    alt: "A man in a dark green Founders Window Care & Detailing polo holds a squeegee beside a wet exterior window. A ladder and additional cleaning tools are visible.",
    width: 960,
    height: 960,
    focal: { desktop: { x: 50, y: 34 }, square: { x: 50, y: 50 } },
  },
  windowSiding: {
    src: "/images/window-green-siding.webp",
    alt: "A white-trimmed window on a green-sided house, with a ladder padded with cloths leaning against the wall below.",
    width: 804,
    height: 994,
    focal: { desktop: { x: 50, y: 57 }, square: { x: 50, y: 59 } },
  },
  roofGutter: {
    src: "/images/roof-gutter.webp",
    alt: "Elevated view of a gray asphalt-shingle roof with intersecting slopes and a light-colored gutter along the right edge. Trees, a neighboring roof, and part of a parked vehicle are visible beyond.",
    width: 1200,
    height: 1264,
    focal: { desktop: { x: 50, y: 64 }, square: { x: 50, y: 52.4 } },
  },
  solarBrush: {
    src: "/images/solar-panel-brush.webp",
    alt: "A gloved hand guides a long-handled, dual-head cleaning tool over rooftop solar panels.",
    width: 1200,
    height: 900,
    focal: { desktop: { x: 50, y: 56 }, square: { x: 48, y: 50 } },
  },
  windowReflection: {
    src: "/images/window-ladder-reflection.webp",
    alt: "A white-framed window reflects an aluminum folding ladder, a dark car, trees, and a nearby house. No worker is visible.",
    width: 1042,
    height: 1348,
    focal: { desktop: { x: 50, y: 62 }, square: { x: 50, y: 60 } },
  },
  technician: {
    src: "/images/technician-scrubber.webp",
    alt: "A man in a white polo holds a window-cleaning scrubber beside a large exterior window and brick wall, with a green cloth draped over his shoulder.",
    width: 798,
    height: 1002,
    focal: { desktop: { x: 50, y: 35 }, square: { x: 50, y: 48 } },
  },
  glassPartitions: {
    src: "/images/glass-office-partitions.webp",
    alt: "Floor-to-ceiling glass office partitions and a central glass door separate a carpeted hallway from a furnished room. Frosted horizontal bands run across the glass.",
    width: 1200,
    height: 900,
    focal: { desktop: { x: 50, y: 53 }, square: { x: 50, y: 53 } },
  },
  gutterGuards: {
    src: "/images/gutter-guards.webp",
    alt: "Black mesh gutter guards run along a white gutter beside a gray shingle roof, with scattered leaves and debris on the mesh. Green house siding and a nearby yard are visible.",
    width: 1200,
    height: 1328,
    focal: { desktop: { x: 50, y: 60 }, square: { x: 50, y: 54 } },
  },
  skylightReflection: {
    src: "/images/skylight-reflection.webp",
    alt: "Close-up of a rectangular skylight in a gray shingle roof, with trees and sky reflected in the glass and scattered leaves around the frame.",
    width: 1200,
    height: 1328,
    focal: { desktop: { x: 50, y: 70 }, square: { x: 50, y: 54.8 } },
  },
  skylightBlue: {
    src: "/images/skylight-blue-glass.webp",
    alt: "A rectangular skylight with blue-tinted glass and metal flashing on a gray shingle roof.",
    width: 1200,
    height: 1376,
    focal: { desktop: { x: 48, y: 47 }, square: { x: 50, y: 48 } },
  },
  windowBrickSill: {
    src: "/images/window-brick-sill.webp",
    alt: "Exterior close-up of a white-framed window above a red brick sill, with closed blinds and tree reflections in the glass. A small square device sits at the lower-right corner.",
    width: 1200,
    height: 1376,
    focal: { desktop: { x: 50, y: 51 }, square: { x: 50, y: 44 } },
  },
  dividedPane: {
    src: "/images/divided-pane-window.webp",
    alt: "Close-up of a white-framed divided-pane window reflecting trees, blue sky, a brick house and a person holding a phone.",
    width: 1200,
    height: 1296,
    focal: { desktop: { x: 50, y: 68 }, square: { x: 50, y: 50 } },
  },
  solarRinse: {
    src: "/images/solar-panels-rinse.webp",
    alt: "A blue cleaning brush on a long pole rests on wet solar panels beside visibly dusty panels.",
    width: 1200,
    height: 796,
    focal: { desktop: { x: 50, y: 45 }, square: { x: 56, y: 50 } },
  },
  skylightTall: {
    src: "/images/skylight-tall.webp",
    alt: "A tall rectangular skylight with a metal frame and flashing set into a gray asphalt-shingle roof.",
    width: 768,
    height: 1000,
    focal: { desktop: { x: 50, y: 56 }, square: { x: 50, y: 57 } },
  },
  openGutter: {
    src: "/images/open-gutter.webp",
    alt: "Close-up of an open metal rain gutter beside gray roof shingles, showing support brackets and a small amount of grit inside.",
    width: 790,
    height: 1054,
    focal: { desktop: { x: 50, y: 64 }, square: { x: 50, y: 58 } },
  },
  gutterBlower: {
    src: "/images/roof-gutter-blower.webp",
    alt: "View down a gray shingle roof beside an open gutter, with a blower nozzle in the foreground. An orange bucket and tools sit on the lawn below, near parked cars.",
    width: 760,
    height: 1046,
    focal: { desktop: { x: 50, y: 53 }, square: { x: 50, y: 58 } },
  },
  storefront: {
    src: "/images/storefront-doors.webp",
    alt: "Black-framed glass entrance doors in a red brick storefront, with address 9905 above and dining room and drive-through hours printed on the glass. Cars, trees and a railing are reflected in the doors.",
    width: 794,
    height: 1020,
    focal: { desktop: { x: 48, y: 49 }, square: { x: 50, y: 50 } },
  },
  skylightLeaves: {
    src: "/images/skylight-leaves.webp",
    alt: "Close-up of a rectangular skylight in a gray shingle roof. Its glass reflects trees and sky, with scattered leaves around the frame.",
    width: 1200,
    height: 1328,
    focal: { desktop: { x: 50, y: 65 }, square: { x: 50, y: 54.8 } },
  },
  porchRoof: {
    src: "/images/porch-roof-ladder.webp",
    alt: "A worker in a bright yellow shirt crouches on a porch roof beside second-story windows. A tall extension ladder leans against the dark-shingled house with white trim.",
    width: 768,
    height: 1024,
    focal: { desktop: { x: 50, y: 39 }, square: { x: 50, y: 43 } },
  },
  solarScrubber: {
    src: "/images/solar-panel-scrubber.webp",
    alt: "A dual-head rotating brush on a yellow pole scrubs rooftop solar panels, rinsed panels on the left and dusty panels on the right.",
    width: 1600,
    height: 1200,
    focal: { desktop: { x: 50, y: 56 }, square: { x: 48, y: 50 } },
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
