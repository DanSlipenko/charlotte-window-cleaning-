"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { site } from "@/lib/site";

const flyra = "https://app.flyra.io";
const formUrl = `${flyra}/f/${site.quoteFormId}?embed=1`;

/** The iframe's height before the form first reports, and while it is re-measured. */
const shortest = 120;

/**
 * The page's query string (UTM tags, ad click ids), passed on so Flyra records
 * where the lead came from. It is empty on the server, so the iframe is in the
 * static HTML and only reloads for visitors who arrive with a query string.
 */
const subscribe = () => () => {};
const pageQuery = () => window.location.search.slice(1);
const serverQuery = () => "";

type AdTags = {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

/**
 * The quote request form, hosted by Flyra (the CRM) and shown in an iframe.
 * Where leads go, and any thank-you redirect, are set up in Flyra.
 *
 * This is Flyra's embed snippet, rewritten so one page can hold several copies
 * (hero, closing section, dialog): each iframe only acts on its own messages.
 * The iframe fits each step, and a submit is reported to the Meta pixel and
 * Google Ads tags when the page has them.
 */
export function QuoteCard({ className, eager = false }: { className?: string; eager?: boolean }) {
  const card = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const query = useSyncExternalStore(subscribe, pageQuery, serverQuery);

  useEffect(() => {
    const box = card.current;
    const iframe = frame.current;
    if (!box || !iframe) return;

    // Flyra reports the height of the page inside the iframe, which is never less
    // than the iframe itself. So a report can make the iframe taller, but can't
    // say the form got shorter (a step back, or the "Request Received" screen).
    // Flyra reports every 500ms, and twice within a few milliseconds whenever the
    // step changes. When both of those equal the current height, the form may have
    // shrunk: "testing" takes 1px off the iframe, which a form that still fills it
    // wins back on the next report, unseen. If the form fits in the smaller
    // iframe, "measuring" hides it and drops to `shortest`, and the next report
    // gives its real height.
    let height = iframe.offsetHeight;
    let stage: "idle" | "testing" | "measuring" = "idle";
    let last = { at: -Infinity, pinned: false };
    let fallback: ReturnType<typeof setTimeout> | undefined;
    // Reports already on their way when the height changes still carry the old one.
    let stale = { height: 0, until: 0 };

    const setHeight = (next: number) => {
      stale = { height, until: performance.now() + 300 };
      height = next;
      iframe.style.height = `${next}px`;
    };
    const reveal = () => {
      box.style.minHeight = "";
      delete box.dataset.measuring;
      // Visitors scroll down to submit; bring the shorter form back into view.
      if (box.getBoundingClientRect().top < 0) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        box.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
      }
    };

    const resize = (reported: number) => {
      const now = performance.now();
      if (reported === stale.height && now < stale.until) return;
      clearTimeout(fallback);
      const pinned = reported === height;
      const stepChanged = pinned && last.pinned && now - last.at < 40;
      last = { at: now, pinned };

      if (!pinned) {
        setHeight(reported);
        box.dataset.ready = "";
        if (stage === "measuring") reveal();
        stage = "idle";
      } else if (stage === "testing") {
        // The form fits in the smaller iframe: it really is shorter now.
        stage = "measuring";
        box.style.minHeight = `${box.offsetHeight}px`; // keeps the page still meanwhile
        box.dataset.measuring = "";
        const before = height + 1;
        setHeight(shortest);
        // Never leave the form hidden if the next report doesn't come.
        fallback = setTimeout(() => {
          setHeight(before);
          reveal();
          stage = "idle";
        }, 1500);
      } else if (stage === "measuring") {
        reveal(); // The form is no taller than `shortest`.
        stage = "idle";
      } else if (stepChanged && height > shortest) {
        stage = "testing";
        const before = height;
        setHeight(height - 1);
        fallback = setTimeout(() => {
          setHeight(before);
          stage = "idle";
        }, 1500);
      }
    };

    const onMessage = (event: MessageEvent) => {
      const form = iframe.contentWindow;
      const data = event.data;
      if (event.origin !== flyra || !form || event.source !== form || data?.id !== site.quoteFormId) return;

      if (data.type === "crm-form-resize") {
        const reported = Math.round(Number(data.height));
        if (reported > 0) resize(reported);
      } else if (data.type === "crm-form-redirect" && data.url) {
        try {
          const url = new URL(String(data.url), window.location.href);
          if (url.protocol === "https:" || url.protocol === "http:") window.location.assign(url);
        } catch {
          // Not a URL: stay on the page, where the form shows its own confirmation.
        }
      } else if (data.type === "crm-form-submitted") {
        const { fbq, gtag } = window as Window & AdTags;
        let meta = false;
        try {
          if (data.metaTrackingAllowed !== false && /^\d{5,20}$/.test(data.metaPixelId) && fbq) {
            fbq("init", data.metaPixelId);
            fbq("trackSingle", data.metaPixelId, "Lead", {}, { eventID: data.eventId });
            meta = true;
          }
        } catch {
          // A broken pixel must not stop the reply below.
        }
        try {
          if (data.googleAdsSendTo && gtag) {
            gtag("event", "conversion", { send_to: data.googleAdsSendTo, transaction_id: data.eventId });
          }
        } catch {
          // As above.
        }
        // Tells Flyra which conversions the page reported, so it doesn't count them twice.
        form.postMessage({ type: "crm-form-tracked", id: data.id, eventId: data.eventId, meta }, flyra);
      }
    };
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={card} className={className ? `quote-card ${className}` : "quote-card"}>
      <p className="quote-card__badge">Free &middot; No Obligation</p>
      <iframe
        ref={frame}
        className="quote-card__frame"
        src={query ? `${formUrl}&${query}` : formUrl}
        title="Get a free quote"
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}
