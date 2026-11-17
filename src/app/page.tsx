import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { BottomCTA, ContactButton } from "@/components/layout";
import { WhatsAppButton } from "@/components/contact-actions";
import { brandHref } from "@/lib/brands";
import { devices, articles, faq } from "@/lib/content";
import { business } from "@/lib/business";
import { BusinessSchema, metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "Gebze Beyaz Eşya Servisi ve Tamiri | Bağımsız Özel Servis",
  "Gebze, Darıca ve Çayırova’da beyaz eşya tamircisi: buzdolabı, çamaşır ve bulaşık makinesi bakım ve onarımı. Özel servis için arayın veya WhatsApp’tan yazın.",
  "/",
);
const steps = [
  {
    icon: "phone",
    title: "Arızayı paylaşın",
    text: "Cihazınızı ve yaşadığınız sorunu anlatın.",
  },
  {
    icon: "calendar",
    title: "Randevuyu planlayın",
    text: "Adres ve uygun zaman karşılıklı teyit edilsin.",
  },
  {
    icon: "tool",
    title: "Onarımı değerlendirin",
    text: "Arıza tespiti, işlem ve ücret hakkında bilgi alın.",
  },
  {
    icon: "shield",
    title: "Koşulları öğrenin",
    text: "İşlem belgesini ve garanti kapsamını isteyin.",
  },
];
export default function Home() {
  return (
    <main id="main">
      <BusinessSchema />
      <section className="hero">
        <Image
          src="/images/hero.webp"
          alt="Modern mutfakta buzdolabı, çamaşır makinesi, bulaşık makinesi ve fırın"
          fill
          sizes="100vw"
          priority
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow">
            GEBZE VE ÇEVRESİNDE <span />
          </p>
          <h1>
            Gebze beyaz eşya
            <br />
            <span>tamiri ve</span>
            <br />
            özel servis hizmeti
          </h1>
          <p className="hero-copy">
            Gebze, Darıca ve Çayırova’da beyaz eşya tamircisi mi arıyorsunuz?
            Buzdolabı, çamaşır ve bulaşık makinesi bakım ve onarımı için
            doğrudan bize ulaşın.
          </p>
          <div className="hero-actions">
            <ContactButton label="Hemen Ara" />
            <WhatsAppButton />
          </div>
          <div className="hero-notes">
            <span>
              <Icon name="check" size={16} />
              Arıza & bakım
            </span>
            <span>
              <Icon name="check" size={16} />
              Cihazınıza özel değerlendirme
            </span>
          </div>
        </div>
        <div className="hero-badge">
          <Icon name="shield" size={32} />
          <span>
            Bağımsız
            <br />
            <strong>özel servis</strong>
          </span>
        </div>
      </section>
      <section id="hizmetler" className="device-section">
        <div className="container device-row">
          <div className="section-title compact">
            <h2>
              Hangi cihazınızda <br />
              sorun var?
            </h2>
            <span className="orange-line" />
          </div>
          <div className="device-grid">
            {devices.map((d) => (
              <Link className="device-card" href={`/${d.slug}/`} key={d.slug}>
                <Icon name={d.icon} size={34} />
                <h3>{d.name}</h3>
                <span>
                  İncele <Icon name="arrow" size={15} />
                </span>
              </Link>
            ))}
            <Link className="device-card" href="/iletisim/">
              <Icon name="more" size={34} />
              <h3>
                Diğer
                <br />
                beyaz eşyalar
              </h3>
              <span>
                Bilgi al <Icon name="arrow" size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section id="markalar" className="container brands-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CİHAZINIZA UYGUN DESTEK</p>
            <h2>
              Her cihazın ihtiyacı <span>farklıdır.</span>
            </h2>
          </div>
          <Link className="text-link" href="/markalar/">
            Marka bilgisi <Icon name="arrow" size={17} />
          </Link>
        </div>
        {business.brands.length ? (
          <div className="brand-grid">
            {business.brands.map((name) => (
              <Link href={brandHref(name)} className="brand-word" key={name}>
                {name}
              </Link>
            ))}
          </div>
        ) : (
          <div className="brand-info">
            <Icon name="tool" size={30} />
            <p>
              <strong>
                Marka ve modelinizi paylaşın, uygunluğu birlikte netleştirelim.
              </strong>
              <br />
              Hizmet kapsamı cihaz modeline ve parça durumuna göre
              değerlendirilir.
            </p>
            <span>Bağımsız özel servis</span>
          </div>
        )}
      </section>
      <section className="process-section">
        <div className="container process-row">
          <div className="section-title compact">
            <h2>
              Servis süreci <br />
              nasıl ilerler?
            </h2>
            <span className="orange-line" />
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <div className="step-top">
                  <span className="step-number">0{i + 1}</span>
                  <Icon name={s.icon} size={30} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {i < 3 && (
                  <Icon name="arrow" className="step-arrow" size={23} />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="trust-band">
        <div className="container service-summary">
          <Icon name="tool" size={40} />
          <div>
            <h2>Bakım, arıza tespiti ve onarım</h2>
            <p>
              Her belirti aynı parçadan kaynaklanmaz. Cihazınızın modelini ve
              sorunun ne zaman başladığını paylaşın; gerekli işlemi ve ücret
              koşullarını birlikte değerlendirelim.
            </p>
          </div>
          <Link className="button button-outline" href="/markalar/">
            Hizmet verilen markalar <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
      <section id="bolgeler" className="area-section">
        <div className="container area-layout">
          <div className="area-art" aria-hidden="true">
            <div className="area-orbit orbit-one" />
            <div className="area-orbit orbit-two" />
            <div className="area-orbit orbit-three" />
            <span className="area-dot dot-one" />
            <span className="area-dot dot-two" />
            <span className="area-dot dot-three" />
            <div className="area-center">
              <Icon name="pin" size={38} />
              <strong>Gebze</strong>
              <span>KOCAELİ</span>
            </div>
            <span className="area-label label-one">Darıca</span>
            <span className="area-label label-two">Çayırova</span>
            <span className="area-water">MARMARA DENİZİ</span>
          </div>
          <div className="area-copy">
            <p className="eyebrow">YAKININIZDAKİ ÇÖZÜM</p>
            <h2>
              Gebze’den çevre ilçelere,
              <br />
              <span>iletişimle başlayan hizmet.</span>
            </h2>
            <p>
              {business.areas.length
                ? `${business.areas.join(", ")} için adresinizi paylaşarak servis uygunluğunu öğrenebilirsiniz.`
                : "Gebze, Darıca veya Çayırova’da mısınız? İlçe, mahalle ve cihaz bilgilerinizi paylaşın; adresiniz için hizmet uygunluğu randevu öncesinde teyit edilsin."}
            </p>
            <Link href="/hizmet-bolgeleri/" className="button button-outline">
              <Icon name="pin" size={19} />
              Bölgeniz için bilgi alın
              <Icon name="arrow" size={17} />
            </Link>
            <div className="related-links">
              <Link href="/hizmet-bolgeleri/gebze/">
                Gebze servis kapsamı →
              </Link>
              <Link href="/hizmet-bolgeleri/darica/">
                Darıca beyaz eşya servisi →
              </Link>
              <Link href="/hizmet-bolgeleri/#cayirova">
                Çayırova hizmet bilgisi →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container questions-section">
        <div className="customer-panel">
          <p className="eyebrow">ŞEFFAF İLETİŞİM</p>
          <h2>
            Karar verirken
            <br />
            <span>doğru bilgiye bakın.</span>
          </h2>
          <p>
            Servis seçmeden önce işletmenin güncel bilgilerini, gerçek müşteri
            deneyimlerini ve işlem koşullarını inceleyin.
          </p>
          {business.googleUrl ? (
            <a
              href={business.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Google’daki yorumları inceleyin
              <Icon name="arrow" size={17} />
            </a>
          ) : (
            <div className="review-note">
              <Icon name="chat" size={24} />
              <span>
                İşlem ve ücret hakkında bilgi alın,
                <br />
                kararınızı açıklıkla verin.
              </span>
            </div>
          )}
          <span className="large-quote" aria-hidden="true">
            “
          </span>
        </div>
        <div className="faq">
          <div className="section-heading">
            <h2>Sıkça sorulan sorular</h2>
            <span className="orange-line" />
          </div>
          {faq.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="container articles-section">
        <div className="section-heading">
          <h2>
            Bilgi & rehber <span className="orange-line" />
          </h2>
          <Link className="text-link" href="/blog/">
            Tüm yazılar
            <Icon name="arrow" size={17} />
          </Link>
        </div>
        <div className="article-grid">
          {articles.slice(0, 3).map((a) => (
            <Link
              href={`/blog/${a.slug}/`}
              className="article-card"
              key={a.slug}
            >
              <div className={`article-image ${a.image}`}>
                <Image
                  src="/images/hero.webp"
                  alt={`${devices[a.device].name} bakım rehberi`}
                  fill
                  sizes="(max-width: 600px) 110px, 150px"
                />
              </div>
              <div>
                <span className="article-category">{a.category}</span>
                <h3>{a.title}</h3>
                <span className="article-meta">
                  <Icon name="clock" size={14} />
                  {a.read} okuma
                  <Icon name="arrow" size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <BottomCTA />
    </main>
  );
}
