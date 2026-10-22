import { ChevronDownIcon } from "@/components/icons";
import type { BlockOf } from "@/lib/content";

export function Faq({ eyebrow, heading, items }: BlockOf<"faq">) {
  return (
    <section className="section section--green">
      <div className="container">
        <div className="section-head">
          {eyebrow && <p className="kicker">{eyebrow}</p>}
          <h2 className="heading">{heading}</h2>
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <ChevronDownIcon size={26} />
              </summary>
              <div className="faq-list__answer">
                {item.answer.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
