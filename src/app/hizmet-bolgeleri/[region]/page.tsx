import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { publishedRegions } from "@/content/regions";
import { devices } from "@/lib/content";
import { metadata as makeMetadata, JsonLd } from "@/lib/seo";
import { business } from "@/lib/business";
export const dynamicParams = false;
export const generateStaticParams = () =>
  publishedRegions.map((r) => ({ region: r.slug }));
export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const item = publishedRegions.find((r) => r.slug === region);
  return item
    ? makeMetadata(
        item.title,
        item.description,
        `/hizmet-bolgeleri/${item.slug}/`,
      )
    : {};
}
export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const item = publishedRegions.find((r) => r.slug === region);
  if (!item) notFound();
  return (
    <ContentPage
      title={item.heading}
      intro={item.intro}
      path={`/hizmet-bolgeleri/${item.slug}/`}
      parent={{ name: "Hizmet bölgeleri", path: "/hizmet-bolgeleri/" }}
      contactContext={item.contactContext}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${item.name} beyaz eşya bakım ve onarım hizmeti`,
          areaServed: { "@type": "AdministrativeArea", name: item.name },
          url: `${business.site}/hizmet-bolgeleri/${item.slug}/`,
        }}
      />
      <div className="prose">
        {item.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>
      <section className="related-section">
        <h2>{item.name} için cihazınıza göre hizmet seçin</h2>
        <div className="service-link-grid">
          {devices.map((d) => (
            <Link key={d.slug} href={`/${d.slug}/`}>
              <strong>{d.name} tamiri</strong>
              <span>{d.description} →</span>
            </Link>
          ))}
        </div>
        <div className="related-links">
          <Link href="/markalar/arcelik/">Arçelik özel servis</Link>
          <Link href="/markalar/bosch/">Bosch özel servis</Link>
          <Link href="/markalar/beko/">Beko özel servis</Link>
        </div>
      </section>
    </ContentPage>
  );
}
