import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { business } from "@/lib/business";
import { metadata as makeMetadata } from "@/lib/seo";
import { brands, brandHref } from "@/lib/brands";
import { WhatsAppButton } from "@/components/contact-actions";
export const metadata = makeMetadata(
  "Beyaz Eşya Markaları İçin Özel Servis | Gebze ve Darıca",
  "Arçelik, Beko, Bosch, Siemens, Samsung, LG, Vestel ve diğer beyaz eşya markaları için bağımsız özel servis. Model ve parça uygunluğunu öğrenin.",
  "/markalar/",
);
export default function BrandsPage() {
  return (
    <ContentPage
      title="Beyaz eşya markaları için bağımsız özel servis"
      intro="Tüm beyaz eşya türlerinde bakım, arıza tespiti ve onarım. Marka adı tek başına yeterli değildir; doğru değerlendirme için model bilgisini de paylaşın."
      path="/markalar/"
      contactContext="beyaz eşyamın marka ve modeline uygun tamir"
    >
      <div className="notice">
        Bu işletme bağımsız özel teknik servistir; aşağıdaki markaların yetkili
        servisi değildir. Marka adları hizmet verilen cihazları belirtmek için
        kullanılır.
      </div>
      <div className="brand-list">
        {[
          ...brands.map((b) => b.name),
          ...business.brands.filter(
            (name) => !brands.some((b) => b.name === name),
          ),
        ]
          .filter((name) => business.brands.includes(name))
          .map((brand) => (
            <div id={brand} key={brand}>
              <h2>{brand}</h2>
              <p>
                Çamaşır makinesi, buzdolabı, bulaşık makinesi, fırın ve kurutma
                makinesi için bakım ve onarım.
              </p>
              {brands.some((b) => b.name === brand) ? (
                <Link href={brandHref(brand)}>
                  {brand} özel servis kapsamı →
                </Link>
              ) : (
                <WhatsAppButton
                  context={`${brand} beyaz eşyamın tamiri`}
                  label="Modeliniz için yazın"
                />
              )}
            </div>
          ))}
      </div>
      <div className="prose" style={{ marginTop: 30 }}>
        <h2>Markanız listede yok mu?</h2>
        <p>
          Diğer markalar için de cihaz türünü, modelini ve arızayı
          iletebilirsiniz. Servis planı ve parça bulunabilirliği model bazında
          teyit edilir. Her parça veya model için kesin onarım taahhüdü
          verilmez.
        </p>
        <h2>Üretici garantisi devam eden cihazlar</h2>
        <p>
          İşlem öncesinde garanti belgenizi kontrol edin ve üreticinin yetkili
          servis kanalıyla görüşün. Özel servis işleminin garanti kapsamına
          etkisini üreticiden öğrenin.
        </p>
      </div>
    </ContentPage>
  );
}
