import { PageView } from "@/components/PageView";
import { metadataFor, pages } from "@/lib/content";

export const metadata = metadataFor("thank-you");

/** Where the job application form lands after a successful submit (and the quote form, if Flyra redirects here). */
export default function ThankYou() {
  return <PageView page={pages["thank-you"]} />;
}
