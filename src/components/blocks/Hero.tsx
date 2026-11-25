import { CallButton } from "@/components/CallButton";
import { Highlight } from "@/components/Highlight";
import { Photo } from "@/components/Photo";
import { QuoteCard } from "@/components/QuoteCard";
import type { BlockOf } from "@/lib/content";
import { images } from "@/lib/images";
import { ratingLabel, site } from "@/lib/site";

export function Hero({ variant, image, title, subtitle }: BlockOf<"hero">) {
  const home = variant === "home";
  const content = (
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
        </div>
      )}
    </div>
  );

  return (
    <section className={home ? "hero hero--home" : "hero hero--interior"}>
      <Photo
        className="hero__media"
        image={images[image]}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
      />
      {home ? (
        // The quote form sits beside the copy; on narrow screens it follows the headline.
        <div className="hero__inner">
          {content}
          <QuoteCard className="hero__form" eager />
        </div>
      ) : (
        content
      )}
    </section>
  );
}
