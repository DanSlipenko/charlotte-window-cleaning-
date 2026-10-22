"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { CallButton } from "./CallButton";
import { FormCard } from "./FormCard";
import { CloseIcon } from "./icons";

const OpenQuoteContext = createContext<() => void>(() => {});

/** Returns a function that opens the "Get a free quote" dialog. */
export function useOpenQuote() {
  return useContext(OpenQuoteContext);
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const opener = useRef<HTMLElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  // A successful submit navigates to /thank-you; the dialog should not follow.
  const pathname = usePathname();
  const [shownOn, setShownOn] = useState(pathname);
  if (pathname !== shownOn) {
    setShownOn(pathname);
    setOpen(false);
  }

  const openQuote = useCallback(() => {
    opener.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      opener.current?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <OpenQuoteContext value={openQuote}>
      {children}
      {open && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={(event) => event.target === event.currentTarget && setOpen(false)}
        >
          <section className="modal" role="dialog" aria-modal="true" aria-label="Get a free quote">
            <button
              ref={closeButton}
              className="modal__close"
              type="button"
              aria-label="Close quote form"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
            <div className="modal__brand">
              <Image src={site.logo.src} alt={site.logo.alt} width={110} height={110} />
            </div>
            <CallButton label={`Call ${site.phone.display}`} />
            <p>Or send us a message below.</p>
            <FormCard />
          </section>
        </div>
      )}
    </OpenQuoteContext>
  );
}

/** Any "Get Free Quote" style button: opens the quote dialog. */
export function QuoteButton({
  className = "btn btn--lg",
  children = "Get Free Quote",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const openQuote = useOpenQuote();
  return (
    <button type="button" className={className} aria-haspopup="dialog" onClick={openQuote}>
      {children}
    </button>
  );
}
