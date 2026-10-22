import { CallButton } from "@/components/CallButton";
import { FormCard } from "@/components/FormCard";
import { Highlight } from "@/components/Highlight";
import type { BlockOf } from "@/lib/content";

export function QuoteSection({ eyebrow, heading, paragraphs }: BlockOf<"quote">) {
  return (
    <section className="section quote" id="quote">
      <div className="container split">
        <div>
          {eyebrow && <p className="kicker">{eyebrow}</p>}
          <div className="prose">
            <h2 className="heading">
              <Highlight text={heading} />
            </h2>
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <CallButton label="Tap To Call Now" className="btn btn--lg quote__call" />
          <p className="quote__line">Or submit the form.</p>
        </div>
        <FormCard title="Contact Us" />
      </div>
    </section>
  );
}
