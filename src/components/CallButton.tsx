import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

type CallButtonProps = {
  /** Extra `.btn--*` modifiers, e.g. "btn--gold btn--sm". */
  variant?: string;
  /** Prefix such as "Call " shown before the number. */
  label?: string;
  /** Collapses to a short "Call" label on narrow screens (nav pill only). */
  responsive?: boolean;
};

export function CallButton({
  variant = "btn--gold",
  label = "",
  responsive = false,
}: CallButtonProps) {
  return (
    <a className={`btn ${variant}`} href={site.phone.href}>
      <PhoneIcon />
      {responsive ? (
        <>
          <span className="num">{site.phone.display}</span>
          <span className="lbl">Call</span>
        </>
      ) : (
        `${label}${site.phone.display}`
      )}
    </a>
  );
}
