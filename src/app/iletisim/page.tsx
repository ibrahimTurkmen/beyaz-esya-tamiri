import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { ContactButton, WhatsAppButton } from "@/components/contact-actions";
import { Icon } from "@/components/icon";
import { business } from "@/lib/business";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "Beyaz Eşya Servisi İletişim | 0532 593 92 23",
  "Gebze, Darıca ve Çayırova beyaz eşya tamiri için 0532 593 92 23 numarasını arayın veya WhatsApp’tan yazın. Doğrudan özel servis iletişimi.",
  "/iletisim/",
);
export default function ContactPage() {
  return (
    <ContentPage
      title="Beyaz eşya servisine doğrudan ulaşın"
      intro="Gebze, Darıca ve Çayırova’da beyaz eşya bakım ve onarımı için arayın veya WhatsApp’tan yazın. Cihazınızın marka, model ve arıza bilgisini görüşmede paylaşabilirsiniz."
      path="/iletisim/"
    >
      <div className="contact-layout">
        <section
          className="direct-contact"
          aria-labelledby="direct-contact-title"
        >
          <p className="eyebrow">TELEFON · WHATSAPP</p>
          <h2 id="direct-contact-title">Size nasıl yardımcı olabiliriz?</h2>
          <p>
            Arızayı telefonda anlatın veya WhatsApp mesajına hata kodunu
            ekleyin. Randevu, adres ve işlem uygunluğunu birlikte netleştirelim.
          </p>
          <div className="contact-channel">
            <Icon name="phone" size={30} />
            <div>
              <h3>Telefonla görüşün</h3>
              <p>Cihazınız ve servis süreci hakkında bilgi alın.</p>
              <ContactButton />
            </div>
          </div>
          <div className="contact-channel">
            <Icon name="chat" size={30} />
            <div>
              <h3>WhatsApp’tan yazın</h3>
              <p>Hazır mesajı açın, cihazınızı ve ilçenizi ekleyin.</p>
              <WhatsAppButton />
            </div>
          </div>
        </section>
        <aside className="contact-aside">
          <h2>Görüşme öncesi hazırlık</h2>
          <ul className="check-list">
            <li>Cihazın marka ve modeli</li>
            <li>Arıza belirtisi ve varsa hata kodu</li>
            <li>İlçe ve mahalle bilgisi</li>
            <li>Size uygun görüşme veya ziyaret zamanı</li>
          </ul>
          <h3>Hizmet bölgeleri</h3>
          <p>{business.areas.join(" · ")}</p>
          <div className="related-links">
            <Link href="/hizmet-bolgeleri/gebze/">Gebze</Link>
            <Link href="/hizmet-bolgeleri/darica/">Darıca</Link>
            <Link href="/hizmet-bolgeleri/cayirova/">Çayırova</Link>
          </div>
          {business.hours && (
            <>
              <h3>Çalışma saatleri</h3>
              <p>{business.hours}</p>
            </>
          )}
          {business.address && (
            <>
              <h3>Adres</h3>
              <p>{business.address}</p>
            </>
          )}
        </aside>
      </div>
    </ContentPage>
  );
}
