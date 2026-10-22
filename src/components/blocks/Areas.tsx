import { PinIcon } from "@/components/icons";
import { serviceArea } from "@/lib/site";

export function Areas() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="heading">{serviceArea.heading}</h2>
        </div>
        <ul className="areas-list">
          {serviceArea.areas.map((area) => (
            <li key={area}>
              <PinIcon size={26} />
              {area}
            </li>
          ))}
        </ul>
        <p className="areas-footer">{serviceArea.footer}</p>
      </div>
    </section>
  );
}
