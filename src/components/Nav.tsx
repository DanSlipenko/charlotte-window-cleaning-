"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { drawerLinks, navLinks, site } from "@/lib/site";
import { CallButton } from "./CallButton";

export function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const mounted = useRef(false);

  // Lock the page behind the drawer and hand focus to whichever control
  // the user is expected to reach for next.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (mounted.current) (open ? closeRef : toggleRef).current?.focus();
    mounted.current = true;
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <div className="nav__pill">
            <Link className="brand" href="/">
              <Image src={site.logo} alt={site.logoAlt} width={38} height={38} priority />
              <span>
                <span className="brand__name">{site.shortName}</span>
                <span className="brand__sub">{site.tagline}</span>
              </span>
            </Link>

            <CallButton variant="btn--gold btn--sm" responsive />

            <nav className="nav__links" aria-label="Main">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              ref={toggleRef}
              className="nav__toggle"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="drawer"
              onClick={() => setOpen(true)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className="drawer" id="drawer" data-open={open} aria-hidden={!open} inert={!open}>
        <div className="drawer__top">
          <button
            ref={closeRef}
            className="drawer__close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        <nav aria-label="Mobile">
          {drawerLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="drawer__foot">
          <CallButton label="Call " />
        </div>
      </div>
    </>
  );
}
