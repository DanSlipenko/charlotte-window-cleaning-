import { CallButton } from "@/components/CallButton";
import { Slot } from "@/components/Slot";

export function CallToAction() {
  return (
    <section className="cta" id="quote">
      <Slot
        className="cta__bg"
        note="CTA background · 2400 × 1400"
        sizes="100vw"
        alt="Technician using a water-fed pole to reach the upper windows of a white siding home on a clear day"
      />
      <div className="wrap">
        <h2>Book your first clean this week</h2>
        <p>
          Free quotes, flat pricing, and a streak-free guarantee. If something isn&apos;t
          right, we come back out — no charge, no argument.
        </p>
        <CallButton label="Call " />
      </div>
    </section>
  );
}
