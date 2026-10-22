import type { Metadata } from "next";
import { pages } from "@/content/pages";
import type { ImageKey } from "./images";
import { site } from "./site";

/**
 * A page is an ordered list of blocks; each block type maps to one section
 * component in `src/components/blocks`. Blocks with no fields (band, cta,
 * process, areas) render copy shared by every page from `src/lib/site.ts`.
 * Hero titles and section headings mark gold accent words with `*asterisks*`.
 */
export type Page = {
  /** Full `<title>`; not run through the layout's title template. */
  title: string;
  description: string;
  noindex?: boolean;
  blocks: Block[];
};

export type FormKind = "quote" | "hiring";

export type Block =
  | {
      type: "hero";
      /** `home` is the tall landing hero with call/message buttons. */
      variant: "home" | "interior";
      image: ImageKey;
      title: string;
      subtitle?: string;
    }
  | { type: "band" }
  | {
      type: "intro";
      heading?: string;
      paragraphs: string[];
      /** Defaults to "quote". */
      form?: FormKind;
      formNote?: string;
    }
  | {
      type: "services";
      heading: string;
      text?: string;
      /** One image per service tile, overriding the defaults. */
      images?: [ImageKey, ImageKey, ImageKey, ImageKey];
    }
  | { type: "cta" }
  | {
      type: "feature";
      heading: string;
      paragraphs?: string[];
      items?: string[];
      image: ImageKey;
    }
  | { type: "process" }
  | { type: "areas" }
  | {
      type: "faq";
      eyebrow?: string;
      heading: string;
      items: { question: string; answer: string[] }[];
    }
  | { type: "photo"; image: ImageKey }
  | { type: "quote"; eyebrow?: string; heading: string; paragraphs: string[] }
  | { type: "gallery"; lead: string; images: ImageKey[] }
  | { type: "pageHeading"; title: string; text: string; call?: boolean }
  | {
      type: "article";
      sections: { heading: string; paragraphs: string[] }[];
      call?: boolean;
    };

export type BlockOf<T extends Block["type"]> = Extract<Block, { type: T }>;

export type Slug = keyof typeof pages;

export function getPage(slug: string): Page | undefined {
  return Object.hasOwn(pages, slug) ? pages[slug as Slug] : undefined;
}

/** URL path for a page slug. */
export function pathFor(slug: Slug): string {
  return slug === "home" ? "/" : `/${slug}`;
}

export function metadataFor(slug: Slug): Metadata {
  const { title, description, noindex } = pages[slug];
  const url = pathFor(slug);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: "en_US", type: "website" },
    twitter: { card: "summary", title, description },
    robots: noindex ? { index: false, follow: false } : undefined,
  };
}

export { pages };
