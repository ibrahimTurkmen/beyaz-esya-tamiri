import Link from "next/link";
import { notFound } from "next/navigation";
import { brands } from "@/lib/brands";
import { devices } from "@/lib/content";
import { business } from "@/lib/business";
import { ContentPage } from "@/components/content-page";
import { Sources } from "@/components/sources";
import { JsonLd, metadata as makeMetadata } from "@/lib/seo";
export const dynamicParams = false;
export const generateStaticParams = () =>
  brands.map((b) => ({ brand: b.slug }));
export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const entry = brands.find((b) => b.slug === brand);
  return entry
    ? makeMetadata(entry.title, entry.description, `/markalar/${entry.slug}/`)
    : {};
}
export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const entry = brands.find((b) => b.slug === brand);
  if (!entry) notFound();
  return (
    <ContentPage
      title={`${entry.name} beyaz eşya tamiri ve özel servis`}
      intro={entry.intro}
      path={`/markalar/${entry.slug}/`}
      parent={{ name: "Markalar", path: "/markalar/" }}
      contactContext={`${entry.name} beyaz eşyamın tamiri`}
    >
      <div className="notice">
        <strong>Bağımsız özel teknik servis.</strong> {entry.name} markasının
        resmi veya yetkili servisi değiliz. Marka adı, bakım ve onarımı yapılan
        cihazları tanımlamak için kullanılır.
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${entry.name} beyaz eşya özel servis hizmeti`,
          serviceType: "Beyaz eşya bakım, arıza tespiti ve onarım",
          areaServed: business.areas,
          url: `${business.site}/markalar/${entry.slug}/`,
          ...(business.identityReady && {
            provider: { "@id": `${business.site}/#business` },
          }),
        }}
      />
      <section aria-labelledby="brand-devices">
        <h2 id="brand-devices">
          Hangi {entry.name} cihazınız için destek gerekiyor?
        </h2>
        <div className="service-link-grid">
          {devices.map((d) => (
            <Link href={`/${d.slug}/`} key={d.slug}>
              <strong>{d.name} tamiri</strong>
              <span>{d.description} →</span>
            </Link>
          ))}
        </div>
      </section>
      <div className="prose">
        {entry.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <div className="related-links">
          <Link href="/hizmet-bolgeleri/gebze/">Gebze’de servis kapsamı →</Link>
          <Link href="/hizmet-bolgeleri/darica/">Darıca’da servis planı →</Link>
        </div>
        <Sources items={entry.sources} />
      </div>
    </ContentPage>
  );
}
