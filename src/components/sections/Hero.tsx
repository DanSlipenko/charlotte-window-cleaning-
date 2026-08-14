import { CallButton } from "@/components/CallButton";
import { Slot } from "@/components/Slot";

export function Hero() {
  return (
    <section className="hero">
      <Slot
        className="hero__bg"
        note="Hero background · 2400 × 1400"
        priority
        alt="Two Founders technicians seen through a freshly squeegeed pane, smiling as they work the exterior glass of a Charlotte home on a bright afternoon"
      />
      <div className="wrap">
        <div className="hero__copy">
          <div className="rating">
            <span className="rating__pill" aria-hidden="true">
              ★★★★★
            </span>
            <span className="rating__text">5.0 stars on Google</span>
          </div>
          <h1 className="display">
            Grimy glass? <em>Consider it handled.</em>
          </h1>
          <p className="hero__lede">
            Top-rated window care in Charlotte &amp; the Carolinas. Clearer views. Spotless
            results. Proudly serving hundreds of homes with unmatched quality and care.
          </p>
          <div className="hero__actions">
            <CallButton label="Call " />
          </div>
        </div>
      </div>
    </section>
  );
}
