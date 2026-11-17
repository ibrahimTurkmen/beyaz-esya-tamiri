import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { publishedRegions } from "@/content/regions";
import { ContactActions } from "@/components/contact-actions";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "Beyaz Eşya Servis Bölgeleri | Gebze, Darıca, Çayırova",
  "Gebze, Darıca ve Çayırova’da beyaz eşya bakım ve onarımı. İlçenize göre servis kapsamını inceleyin, adres ve randevu uygunluğunu öğrenin.",
  "/hizmet-bolgeleri/",
);
export default function RegionsPage() {
  return (
    <ContentPage
      title="Gebze, Darıca ve Çayırova hizmet bölgeleri"
      intro="Beyaz eşya bakım, arıza tespiti ve onarım hizmeti verdiğimiz ilçeleri inceleyin. Mahalle, cihaz ve uygun zaman bilgilerinizi paylaşarak adresiniz için servis planını netleştirin."
      path="/hizmet-bolgeleri/"
    >
      <div className="region-grid">
        {publishedRegions.map((region) => (
          <section key={region.slug} id={region.slug}>
            <h2>{region.name}</h2>
            <p>{region.summary}</p>
            <div className="card-actions">
              <Link
                className="text-link"
                href={`/hizmet-bolgeleri/${region.slug}/`}
              >
                Servis kapsamını inceleyin →
              </Link>
              <ContactActions context={region.contactContext} />
            </div>
          </section>
        ))}
      </div>
    </ContentPage>
  );
}
