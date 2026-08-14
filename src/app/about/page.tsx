import type { Metadata } from "next";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founders Window Care & Detailing is a Charlotte-based window cleaning and detailing company built on flat pricing, careful work, and a streak-free guarantee.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Built in Charlotte, one pane at a time</h1>
          <p>
            We started Founders because getting a straight answer on price — and a crew
            that shows up when it says it will — turned out to be harder than cleaning the
            glass.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>What we do</h2>
          <p>
            Residential and commercial window care, screens and tracks, gutters, pressure
            and soft washing, solar panels, and mobile auto detailing — across Charlotte
            and the surrounding Carolinas.
          </p>
          <h2>How we price</h2>
          <p>
            Flat quotes, not hourly. You know the number before anyone touches a pane, and
            it does not move once we are on site.
          </p>
          <h2>Our guarantee</h2>
          <p>
            We walk the job with you in daylight before we pack up. Anything you spot, we
            fix on the spot. If something turns up later, we come back out — no charge, no
            argument.
          </p>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
