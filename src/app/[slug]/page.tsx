import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageView } from "@/components/PageView";
import { getPage, metadataFor, pages, type Slug } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

/** Home and thank-you have their own routes. */
const ownRoutes = new Set(["home", "thank-you"]);

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages)
    .filter((slug) => !ownRoutes.has(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getPage(slug) ? metadataFor(slug as Slug) : {};
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <PageView page={page} />;
}
