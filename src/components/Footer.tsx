import Image from "next/image";
import Link from "next/link";
import { SocialIcon, type SocialIconName } from "./icons";
import { areasServed, footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer" id="areas">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Image src={site.logo} alt={`${site.name} logo`} width={54} height={54} />
            <p>
              We bring clarity to every pane — residential, commercial, and auto detailing
              built on trust, quality, and community pride.
            </p>
            <div className="social">
              {site.social.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label}>
                  <SocialIcon name={item.icon as SocialIconName} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer__links">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer__links">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Areas Served</h4>
            <ul className="footer__areas">
              {areasServed.map((area) => (
                <li key={area}>
                  <a href="#">{area}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <span>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <nav aria-label="Legal">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
