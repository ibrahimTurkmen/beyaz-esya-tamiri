import Link from "next/link";
import { notFound } from "next/navigation";
import { devices, articles } from "@/lib/content";
import { serviceDetails } from "@/lib/service-details";
import { brandHref } from "@/lib/brands";
import { ContentPage } from "@/components/content-page";
import { metadata as makeMetadata, JsonLd } from "@/lib/seo";
import { business } from "@/lib/business";
export const dynamicParams = false;
export function generateStaticParams() {
  return devices.map((d) => ({ service: d.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const device = devices.find((d) => d.slug === service);
  return device
    ? makeMetadata(
        serviceDetails[service].title,
        serviceDetails[service].description,
        `/${service}/`,
      )
    : {};
}
export default async function DevicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const device = devices.find((d) => d.slug === service);
  if (!device) notFound();
  return (
    <ContentPage
      title={`${device.name} tamiri ve özel servis`}
      intro={serviceDetails[service].intro}
      path={`/${service}/`}
      contactContext={`${device.name.toLocaleLowerCase("tr-TR")} tamiri`}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${device.name} bakım ve onarım`,
          serviceType: `${device.name} tamiri`,
          areaServed: business.areas,
          url: `${business.site}/${service}/`,
          ...(business.identityReady && {
            provider: { "@id": `${business.site}/#business` },
          }),
        }}
      />
      <div className="prose">
        <h2>{device.name} için hangi arızaları değerlendiriyoruz?</h2>
        {serviceDetails[service].issues.map((issue) => (
          <section key={issue.heading}>
            <h3>{issue.heading}</h3>
            <p>{issue.text}</p>
          </section>
        ))}
        <h2>Servis öncesi güvenli kontroller</h2>
        <p>
          Bu adımlar kullanıcı seviyesindeki kontroller içindir; arıza tanısı
          veya teknik onarım talimatı değildir. Modelinize ait kullanım
          kılavuzunu esas alın.
        </p>
        <ol>
          {device.checks.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>
        <h2>Ne zaman kullanmayı bırakmalısınız?</h2>
        <div className="notice">{device.stop}</div>
        <h2>Teknik değerlendirme için hangi bilgiler gerekir?</h2>
        <p>
          Marka, model, varsa ekrandaki hata kodu ve arızanın ne zaman başladığı
          değerlendirmeyi kolaylaştırır. Sorunun sürekli mi yoksa belirli bir
          programda mı görüldüğünü belirtin. Parça değiştirilmesi gerekip
          gerekmediği ancak uygun incelemeyle anlaşılır.
        </p>
        <h2>Gebze, Darıca ve Çayırova’da servis süreci</h2>
        <p>
          Gebze, Darıca, Çayırova ve çevresinde cihazınız için bakım, arıza
          tespiti ve onarım talebinizi paylaşabilirsiniz. Adres ve model
          uygunluğu teyit edildikten sonra randevu planlanır. İşlem öncesinde
          tespit bedelini, parça ve işçilik tutarını ve varsa garanti
          koşullarını öğrenin.
        </p>
        <p>
          Bağımsız özel teknik servis hizmeti sunulur. Cihazınız üretici
          garantisindeyse işlem yaptırmadan önce üreticinin garanti koşullarını
          ve yetkili servis seçeneklerini değerlendirin.
        </p>
        <div className="related-links">
          <Link href="/hizmet-bolgeleri/gebze/">Gebze servis kapsamı →</Link>
          <Link href="/hizmet-bolgeleri/darica/">Darıca servis kapsamı →</Link>
          <Link href="/hizmet-bolgeleri/#cayirova">Çayırova için bilgi →</Link>
        </div>
        <h2>Hizmet verilen markalar</h2>
        <p>
          Arçelik, Bosch, Beko, Siemens, Vestel, Samsung ve diğer desteklenen
          markalarda model ve parça uygunluğu değerlendirilir. Markaların
          yetkili servisi değiliz.
        </p>
        <div className="related-links">
          {business.brands.map((name) => (
            <Link key={name} href={brandHref(name)}>
              {name}{" "}
              {name === "Arçelik" || name === "Bosch" || name === "Beko"
                ? "özel servis"
                : "cihazları"}
            </Link>
          ))}
        </div>
        {articles.some((a) => devices[a.device].slug === service) && (
          <section className="related-articles">
            <h2>Bu cihazla ilgili arıza rehberleri</h2>
            <ul>
              {articles
                .filter((a) => devices[a.device].slug === service)
                .map((a) => (
                  <li key={a.slug}>
                    <Link href={`/blog/${a.slug}/`}>{a.title}</Link>
                  </li>
                ))}
            </ul>
          </section>
        )}
      </div>
    </ContentPage>
  );
}
