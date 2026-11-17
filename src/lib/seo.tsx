import type { Metadata } from "next";
import { business } from "./business";
export function metadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${business.site}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "/images/hero.webp",
          width: 1536,
          height: 1024,
          alt: "Modern mutfakta beyaz eşyalar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.webp"],
    },
  };
}
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function BusinessSchema() {
  if (!business.verified || !business.identityReady) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${business.site}/#business`,
        name: business.name,
        url: business.site,
        ...(business.phone && { telephone: business.phone }),
        ...(business.address && { address: business.address }),
        ...(business.areas.length > 0 && { areaServed: business.areas }),
        ...(business.googleUrl && { sameAs: [business.googleUrl] }),
      }}
    />
  );
}
