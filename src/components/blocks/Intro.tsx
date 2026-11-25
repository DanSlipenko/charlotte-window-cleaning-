import { CallButton } from "@/components/CallButton";
import { FormCard } from "@/components/FormCard";
import { Highlight } from "@/components/Highlight";
import { QuoteCard } from "@/components/QuoteCard";
import type { BlockOf } from "@/lib/content";

/**
 * Copy beside a form: the job application on the hiring page, the quote form
 * elsewhere. `quoteInHero` drops the quote form when the hero right above
 * already shows it.
 */
export function Intro({
  heading,
  paragraphs,
  form,
  formNote,
  quoteInHero = false,
}: BlockOf<"intro"> & { quoteInHero?: boolean }) {
  const hiring = form === "hiring";
  const solo = !hiring && quoteInHero;
  return (
    <section className="section">
      <div className={solo ? "container intro--solo" : "container split"}>
        <div className="prose">
          {heading && (
            <h2 className="heading">
              <Highlight text={heading} />
            </h2>
          )}
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <CallButton className={solo ? "btn btn--lg intro__phone" : "btn btn--block btn--lg intro__phone"} />
        </div>
        {hiring ? <FormCard kind="hiring" note={formNote} /> : !solo && <QuoteCard />}
      </div>
    </section>
  );
}
