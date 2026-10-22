import { Highlight } from "@/components/Highlight";
import { CheckCircleIcon } from "@/components/icons";
import { Photo } from "@/components/Photo";
import type { BlockOf } from "@/lib/content";
import { images } from "@/lib/images";

export function Feature({ heading, paragraphs = [], items = [], image }: BlockOf<"feature">) {
  return (
    <section className="section feature">
      <div className="container split">
        <div className="prose">
          <h2 className="heading">
            <Highlight text={heading} />
          </h2>
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {items.length > 0 && (
            <ul className="check-list">
              {items.map((item) => (
                <li key={item}>
                  <CheckCircleIcon />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Photo className="feature__image" image={images[image]} sizes="(max-width: 900px) 100vw, 565px" />
      </div>
    </section>
  );
}
