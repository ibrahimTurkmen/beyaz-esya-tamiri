import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = {
  ...makeMetadata(
    "Kişisel Veriler Hakkında Bilgilendirme",
    "Telefon ve WhatsApp üzerinden servis görüşmelerinde kişisel bilgi paylaşımı ve işletmeye özgü aydınlatmanın durumu.",
    "/kvkk/",
  ),
  robots: { index: false, follow: true },
};
export default function KvkkPage() {
  return (
    <ContentPage
      title="Kişisel veriler hakkında bilgilendirme"
      intro="Telefon veya WhatsApp üzerinden görüşme başlatmadan önce iletişim yönteminin nasıl çalıştığını inceleyin."
      path="/kvkk/"
    >
      <div className="prose">
        <h2>İletişim sırasında paylaştıklarınız</h2>
        <p>
          Bu site üzerinden kişisel bilgi girilmesi veya talep kaydı
          oluşturulması istenmez. Telefon ve WhatsApp bağlantıları ilgili
          uygulamayı açar. Servis görüşmesinde cihazınız, arıza ve adres
          uygunluğu hakkında gerekli bilgileri paylaşabilirsiniz. WhatsApp hazır
          mesajı yalnızca genel hizmet konusunu içerir; mesajı göndermeyi siz
          tamamlarsınız.
        </p>
        <h2>Görüşme içeriği ve üçüncü taraflar</h2>
        <p>
          Telefon ve WhatsApp görüşmelerinde paylaşılan bilgiler bu web
          sitesinde saklanmaz. Harici hizmetlerin kendi koşulları geçerlidir.
          Servis için gerekmeyen kimlik veya ödeme bilgilerini göndermeyin.
        </p>
        <h2>Resmi aydınlatma metni</h2>
        <p>
          İşletmenin hukuki kimliği, veri sorumlusu ve başvuru kanalları
          doğrulanmış bilgilerle tamamlanmalıdır. Görüşmelerdeki gerçek veri
          işleme düzeni netleştiğinde ilgili amaçlar, hukuki sebepler, alıcı
          grupları ve saklama koşulları ayrıca açıklanacaktır. Bu metin nihai
          hukuki aydınlatma olarak sunulmaz.
        </p>
        <p>
          Mevcut teknik işleyiş için{" "}
          <Link href="/gizlilik/">gizlilik ve çerez açıklamasını</Link>{" "}
          inceleyin.
        </p>
      </div>
    </ContentPage>
  );
}
