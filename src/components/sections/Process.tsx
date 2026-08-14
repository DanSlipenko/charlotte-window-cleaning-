"use client";

import { Fragment, useState } from "react";
import { CallButton } from "@/components/CallButton";
import { Slot } from "@/components/Slot";
import { steps } from "@/lib/site";

export function Process() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section className="section process" id="process">
      <div className="wrap">
        <h2 className="h2">Our 4 step process</h2>
        <p className="process__sub">with the GlassGuard finish.</p>

        <div className="process__card">
          {/* Keyed so the media cross-fades along with the copy. */}
          <Slot
            key={current.title}
            className="process__media"
            src={current.image.src}
            alt={current.image.alt}
            note={current.image.note}
            sizes="(max-width: 1023px) 100vw, 45vw"
          />

          <div className="process__steps">
            {steps.map((step, i) => (
              <article key={step.title} className="step" data-active={i === active}>
                <span className="step__ghost" aria-hidden="true">
                  {step.title.toUpperCase()}
                </span>
                <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="track" role="group" aria-label="Process steps">
          {steps.map((step, i) => (
            <Fragment key={step.title}>
              <span className="track__seg" data-done={i <= active} />
              <button
                className="track__dot"
                aria-label={`Step ${i + 1}: ${step.title}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
              >
                {i + 1}
              </button>
            </Fragment>
          ))}
          <span className="track__seg" data-done={active >= steps.length - 1} />
        </div>

        <CallButton label="Call " />
      </div>
    </section>
  );
}
