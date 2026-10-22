import Image from "next/image";
import Link from "next/link";
import { areaLinks, businessLinks, legalLinks, serviceLinks, site, type NavLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./icons";
import { QuoteButton } from "./QuoteModal";

const columns: { heading: string; links: NavLink[] }[] = [
  { heading: "Business", links: businessLinks },
  { heading: "Our Services", links: serviceLinks },
  { heading: "Service Areas", links: areaLinks },
];

const socialIcons = { Facebook: FacebookIcon, Instagram: InstagramIcon };

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__card">
          <Image src={site.logo.src} alt={site.logo.alt} width={150} height={150} />
          <p>{site.name}, LLC</p>
          <p>
            Phone: <a href={site.phone.href}>{site.phone.display}</a>
          </p>
          <p>Location: The Greater Charlotte Metro Area</p>
          <QuoteButton className="btn">Get Quote</QuoteButton>
          <div className="social">
            {site.social.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${site.name} on ${label}`}>
                  <Icon size={30} />
                </a>
              );
            })}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h3>{column.heading}</h3>
            <div className="footer__links">
              {column.links.map((link) =>
                link.href.startsWith("http") ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        ))}

        <div>
          <h3>Operating Hours</h3>
          <div className="footer__links">
            {site.hours.days.map((day) => (
              <p key={day}>
                {day}: {site.hours.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          {legalLinks.map((link, i) => (
            <span key={link.href}>
              {i > 0 && " | "}
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
        </p>
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
