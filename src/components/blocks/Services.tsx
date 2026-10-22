import { Highlight } from "@/components/Highlight";
import { CheckCircleIcon } from "@/components/icons";
import { Photo } from "@/components/Photo";
import type { BlockOf } from "@/lib/content";
import { images } from "@/lib/images";
import { serviceTiles } from "@/lib/site";

const defaultImages: NonNullable<BlockOf<"services">["images"]> = [
  "windowSiding",
  "roofGutter",
  "solarBrush",
  "windowReflection",
];

export function Services({ heading, text, images: tileImages = defaultImages }: BlockOf<"services">) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="heading">
            <Highlight text={heading} />
          </h2>
          {text && <p>{text}</p>}
        </div>
        <div className="services-grid">
          {serviceTiles.map((tile, i) => (
            <article key={tile.title} className="service-card">
              <Photo
                className="service-card__media"
                image={images[tileImages[i]]}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 580px"
              />
              <h3>{tile.title}</h3>
              <p>{tile.text}</p>
              <ul className="check-list">
                {tile.items.map((item) => (
                  <li key={item}>
                    <CheckCircleIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
