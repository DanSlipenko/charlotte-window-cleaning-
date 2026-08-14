import Link from "next/link";
import { Slot } from "@/components/Slot";
import { ArrowUpRightIcon } from "@/components/icons";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Services</span>
          <h2 className="h2">Everything we take care of</h2>
        </div>

        <div className="bento">
          {services.map((service) => (
            <Link
              key={service.title}
              className={`tile${service.wide ? " tile--wide" : ""}`}
              href="/#quote"
            >
              <Slot
                className="tile__bg"
                src={service.image.src}
                alt={service.image.alt}
                note={service.image.note}
                sizes={service.wide ? "(max-width: 767px) 100vw, 50vw" : "(max-width: 767px) 100vw, 25vw"}
              />
              <div className="tile__inner">
                <div className="tile__title">{service.title}</div>
                <div className="tile__hover">
                  <p>{service.blurb}</p>
                  <span className="tile__arrow">
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
