import { CallButton } from "@/components/CallButton";
import { FormCard } from "@/components/FormCard";
import { Highlight } from "@/components/Highlight";
import type { BlockOf } from "@/lib/content";

export function Intro({ heading, paragraphs, form, formNote }: BlockOf<"intro">) {
  return (
    <section className="section">
      <div className="container split">
        <div className="prose">
          {heading && (
            <h2 className="heading">
              <Highlight text={heading} />
            </h2>
          )}
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <CallButton className="btn btn--block btn--lg intro__phone" />
        </div>
        <FormCard kind={form} note={formNote} />
      </div>
    </section>
  );
}
