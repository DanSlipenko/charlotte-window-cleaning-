import { images } from "@/lib/images";
import { serviceArea, site } from "@/lib/site";

/** Neighbourhoods and nearby towns listed for search engines beyond the 11 area pages. */
const extraAreas = [
  "Eastover", "Foxcroft", "Sherwood Forest", "Carmel", "Olde Providence", "Quail Hollow", "Sedgefield",
  "Madison Park", "Selwyn", "Elizabeth", "Lansdowne", "Providence Plantation", "Blakeney",
  "Country Club Heights", "Sharon Woods", "Mountainbrook", "Mint Hill", "Waxhaw",
];

/** LocalBusiness structured data (JSON-LD) for Google. */
export function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    logo: site.url + site.logo.src,
    image: site.url + images.founder.src,
    telephone: site.phone.schema,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: String(site.rating.count),
      bestRating: "5",
    },
    hasMap: site.googleMaps,
    sameAs: [site.googleMaps, ...site.social.map((profile) => profile.href)],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    areaServed: [
      ...[...serviceArea.areas, ...extraAreas].map((name) => `${name}, NC`),
      "Fort Mill, SC",
      "Tega Cay, SC",
    ].map((name) => ({ "@type": "Place", name })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
