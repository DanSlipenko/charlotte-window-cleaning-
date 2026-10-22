import { PageView } from "@/components/PageView";
import { metadataFor, pages } from "@/lib/content";

export const metadata = metadataFor("home");

export default function Home() {
  return <PageView page={pages.home} />;
}
