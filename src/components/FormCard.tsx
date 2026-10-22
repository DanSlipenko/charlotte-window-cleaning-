import type { FormKind } from "@/lib/content";
import { trustLine } from "@/lib/site";
import { LeadForm } from "./LeadForm";

export function FormCard({
  title = "Get Started",
  kind,
  note,
}: {
  title?: string;
  kind?: FormKind;
  note?: string;
}) {
  return (
    <div className="form-card">
      <h3 className="form-card__title">{title}</h3>
      {note && <p className="form-card__note">{note}</p>}
      <LeadForm kind={kind} />
      <p className="certified">{trustLine}</p>
    </div>
  );
}
