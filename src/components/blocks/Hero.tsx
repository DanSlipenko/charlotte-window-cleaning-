import { CallButton } from "@/components/CallButton";
import { Highlight } from "@/components/Highlight";
import { Photo } from "@/components/Photo";
import { QuoteButton } from "@/components/QuoteModal";
import type { BlockOf } from "@/lib/content";
import { images } from "@/lib/images";
import { ratingLabel, site } from "@/lib/site";

export function Hero({ variant, image, title, subtitle }: BlockOf<"hero">) {
  const home = variant === "home";
  return (
    <section className={home ? "hero" : "hero hero--interior"}>
      <Photo
        className="hero__media"
        image={images[image]}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero__content">
        <p className="hero__kicker">{site.name}</p>
        <h1>
          <Highlight text={title} />
        </h1>
        {subtitle && <p className="hero__sub">{subtitle}</p>}
        <p className="hero__rating">
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          {ratingLabel}
        </p>
        {home && (
          <div className="hero__actions">
            <CallButton label="Tap To Call Now" className="btn btn--lg" />
            <QuoteButton className="hero__secondary">Or Message Us Below ↓</QuoteButton>
          </div>
        )}
      </div>
    </section>
  );
}
