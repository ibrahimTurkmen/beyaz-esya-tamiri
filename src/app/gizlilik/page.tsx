import { ContentPage } from "@/components/content-page";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = {
  ...makeMetadata(
    "Gizlilik ve Çerez Bilgilendirmesi",
    "Telefon ve WhatsApp iletişim bağlantıları, mevcut çerez ve analiz kullanımı hakkında teknik bilgilendirme.",
    "/gizlilik/",
  ),
  robots: { index: false, follow: true },
};
export default function PrivacyPage() {
  return (
    <ContentPage
      title="Gizlilik ve çerezler"
      intro="Bu sayfa, sitedeki iletişim bağlantılarının ve mevcut veri akışının nasıl çalıştığını açıklar."
      path="/gizlilik/"
    >
      <div className="prose">
        <h2>Telefon ve WhatsApp iletişimi</h2>
        <p>
          Telefon bağlantısı cihazınızın arama uygulamasını açar. WhatsApp
          bağlantısı, bulunduğunuz sayfaya uygun genel bir mesajla WhatsApp
          hizmetini açar. Hazır mesajda kişisel bilgi bulunmaz. Mesajı düzenleme
          ve gönderme işlemini WhatsApp’ta siz tamamlarsınız. Bu sitede servis
          talebi veritabanı veya kullanıcı hesabı bulunmaz.
        </p>
        <h2>Çerez ve tıklama ölçümü</h2>
        <p>
          Bu sürüme reklam, pazarlama çerezi, analiz SDK’sı veya takip pikseli
          eklenmemiştir. Telefon ve WhatsApp tıklamalarını ayrı olaylar olarak
          iletebilen bağlantı desteği vardır; yalnızca önceden yapılandırılmış
          bir analitik altyapı varsa çalışır. Olaylarda sayfa yolu ve hizmet
          konusu kullanılır; görüşme içeriği veya ziyaretçinin kişisel bilgileri
          gönderilmez. Böyle bir altyapı eklenirse gizlilik ve tercih düzeni
          ayrıca güncellenmelidir.
        </p>
        <h2>Harici hizmetler ve hosting</h2>
        <p>
          Google Maps bağlantıları harici harita hizmetini açar. Sayfa içine
          harita eklenmişse yalnızca “Google haritasını göster” düğmesine
          bastığınızda Google’dan yüklenir. Bu aşamada bağlantı bilgileriniz
          Google’a iletilir ve Google’ın kendi gizlilik koşulları uygulanır.
        </p>
        <p>
          WhatsApp’ta paylaştığınız bilgiler bu hizmetin kendi koşullarına
          tabidir. Kimlik, ödeme veya hassas bilgi paylaşmadan önce
          gerekliliğini değerlendirin. Hosting sağlayıcısının erişim ve güvenlik
          kayıtları kullanılan sağlayıcıya göre değişebilir.
        </p>
        <h2>İşletmeye özgü açıklamalar</h2>
        <p>
          Resmi veri sorumlusu kimliği, başvuru kanalı, saklama koşulları ve
          hizmet sağlayıcı bilgileri gerçek işletme düzeniyle tamamlanmalıdır.
          Bu sayfa mevcut teknik işleyişi anlatır; tamamlanmış bir hukuki
          aydınlatma metni yerine geçmez.
        </p>
      </div>
    </ContentPage>
  );
}
