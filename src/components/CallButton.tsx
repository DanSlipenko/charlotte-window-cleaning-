import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

/** Gold tap-to-call button. */
export function CallButton({
  label = site.phone.display,
  className = "btn",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a className={className} href={site.phone.href}>
      <PhoneIcon />
      {label}
    </a>
  );
}
