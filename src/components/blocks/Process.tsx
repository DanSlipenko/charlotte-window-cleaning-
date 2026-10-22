import { Highlight } from "@/components/Highlight";
import { ClipboardCheckIcon, DocumentIcon, PhoneIcon } from "@/components/icons";
import { processSection } from "@/lib/site";
import { InlineCta } from "./InlineCta";

const icons = { phone: PhoneIcon, clipboard: DocumentIcon, badge: ClipboardCheckIcon };

export function Process() {
  return (
    <section className="section section--green">
      <div className="container">
        <div className="section-head">
          <h2 className="heading">
            <Highlight text={processSection.heading} />
          </h2>
        </div>
        <div className="steps">
          {processSection.steps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <article key={step.title} className="step">
                <span className="step__label">Step {i + 1}</span>
                <h3>{step.title}</h3>
                <Icon className="step__icon" />
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
        <InlineCta />
      </div>
    </section>
  );
}
