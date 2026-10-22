import type { Block, Page } from "@/lib/content";
import { Areas } from "./blocks/Areas";
import { Band } from "./blocks/Band";
import { Faq } from "./blocks/Faq";
import { Feature } from "./blocks/Feature";
import { Gallery } from "./blocks/Gallery";
import { Hero } from "./blocks/Hero";
import { InlineCta } from "./blocks/InlineCta";
import { Intro } from "./blocks/Intro";
import { Article, PageHeading } from "./blocks/Legal";
import { PersonalPhoto } from "./blocks/PersonalPhoto";
import { Process } from "./blocks/Process";
import { QuoteSection } from "./blocks/QuoteSection";
import { Services } from "./blocks/Services";

export function PageView({ page }: { page: Page }) {
  return (
    <main id="main">
      {page.blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </main>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "hero":
      return <Hero {...block} />;
    case "band":
      return <Band />;
    case "intro":
      return <Intro {...block} />;
    case "services":
      return <Services {...block} />;
    case "cta":
      return <InlineCta />;
    case "feature":
      return <Feature {...block} />;
    case "process":
      return <Process />;
    case "areas":
      return <Areas />;
    case "faq":
      return <Faq {...block} />;
    case "photo":
      return <PersonalPhoto {...block} />;
    case "quote":
      return <QuoteSection {...block} />;
    case "gallery":
      return <Gallery {...block} />;
    case "pageHeading":
      return <PageHeading {...block} />;
    case "article":
      return <Article {...block} />;
  }
}
