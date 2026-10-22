import { CallButton } from "@/components/CallButton";
import type { BlockOf } from "@/lib/content";
import { site } from "@/lib/site";

/** Green title band used by the legal, thank-you and 404 pages. */
export function PageHeading({ title, text, call, children }: BlockOf<"pageHeading"> & { children?: React.ReactNode }) {
  return (
    <section className="page-head">
      <p className="kicker">{site.name}</p>
      <h1>{title}</h1>
      <p>{text}</p>
      {call && <CallButton label={`Call Us Now ${site.phone.display}`} className="btn btn--lg" />}
      {children}
    </section>
  );
}

export function Article({ sections, call }: BlockOf<"article">) {
  return (
    <article className="article">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </section>
      ))}
      {call && (
        <section className="call-message">
          <CallButton label={`Call Us Now ${site.phone.display}`} className="btn btn--lg" />
        </section>
      )}
    </article>
  );
}
