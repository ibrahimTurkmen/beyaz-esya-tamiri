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
          <section key={region.slug}>
            <h2>{region.name}</h2>
            <p>{region.intro}</p>
            <Link
              className="text-link"
              href={`/hizmet-bolgeleri/${region.slug}/`}
            >
              {region.name} servis kapsamını inceleyin →
            </Link>
          </section>
        ))}
        <section id="cayirova">
          <h2>Çayırova</h2>
          <p>
            Çayırova, doğrulanmış hizmet bölgelerimiz arasındadır. Cihazınızın
            modelini, arıza belirtisini ve mahalleyi ileterek adres uygunluğunu
            öğrenebilirsiniz. Ziyaret saati önceden görüşülür.
          </p>
          <ContactActions context="Çayırova’da beyaz eşya tamiri" />
        </section>
      </div>
      <div className="notice">
        Hizmet bölgesi bilgisi, bu ilçelerde fiziksel şube bulunduğu anlamına
        gelmez. Çevre adresler için uygunluk ayrıca teyit edilir; ziyaret ve
        onarım süresi hakkında doğrulanmamış taahhüt verilmez.
      </div>
    </ContentPage>
  );
}
