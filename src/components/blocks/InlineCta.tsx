import { QuoteButton } from "@/components/QuoteModal";
import { trustLine } from "@/lib/site";

export function InlineCta() {
  return (
    <div className="cta">
      <QuoteButton />
      <p className="certified">{trustLine}</p>
    </div>
  );
}
