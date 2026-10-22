import Link from "next/link";
import { Band } from "@/components/blocks/Band";
import { PageHeading } from "@/components/blocks/Legal";

export default function NotFound() {
  return (
    <main id="main">
      <PageHeading
        type="pageHeading"
        title="Page Not Found"
        text="The page you're looking for doesn't exist or may have moved."
      >
        <Link className="btn btn--lg" href="/">
          Back To Home
        </Link>
      </PageHeading>
      <Band />
    </main>
  );
}
