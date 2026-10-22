"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { areaLinks, serviceLinks, site, type NavLink } from "@/lib/site";
import { CallButton } from "./CallButton";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./icons";

const pageLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const groups = [
  { label: "Services", links: serviceLinks },
  { label: "Areas", links: areaLinks },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const current = (href: string) => (pathname === href ? "page" : undefined);

  // Dropdowns open on :focus-within, so drop focus once a link is chosen.
  const blurLink = (event: MouseEvent) => (event.target as HTMLElement).closest("a")?.blur();
  const closeMenu = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" href="/">
          <Image src={site.logo.src} alt={site.logo.alt} width={110} height={110} loading="eager" />
        </Link>

        <nav className="nav" aria-label="Main navigation" onClick={blurLink}>
          <Link aria-current={current("/")} href="/">
            Home
          </Link>
          {groups.map((group) => (
            <div key={group.label} className="nav__dropdown">
              <button className="nav__trigger" type="button">
                {group.label}
                <ChevronDownIcon size={22} />
              </button>
              <div className="nav__menu">
                {group.links.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {pageLinks.map((link) => (
            <Link key={link.href} aria-current={current(link.href)} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <CallButton className="btn header__phone" />

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen} onClick={closeMenu}>
        <Link href="/">Home</Link>
        {groups.map((group) => (
          <details key={group.label}>
            <summary>
              {group.label}
              <ChevronDownIcon size={22} />
            </summary>
            <div>
              {group.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        {pageLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <CallButton />
      </nav>
    </header>
  );
}
