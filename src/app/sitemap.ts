import type { MetadataRoute } from "next";
import { pages, pathFor, type Slug } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(pages) as Slug[])
    .filter((slug) => !pages[slug].noindex)
    .map((slug) => ({ url: site.url + pathFor(slug) }));
}
