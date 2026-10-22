import { PageView } from "@/components/PageView";
import { metadataFor, pages } from "@/lib/content";

export const metadata = metadataFor("thank-you");

/** Where both lead forms land after a successful submit. */
export default function ThankYou() {
  return <PageView page={pages["thank-you"]} />;
}
