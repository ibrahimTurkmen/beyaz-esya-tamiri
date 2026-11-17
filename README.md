# Gebze Beyaz Eşya Servisi

Mevcut Next.js App Router, TypeScript ve Tailwind projesi. İletişim yalnızca **0532 593 92 23** telefon ve WhatsApp hattından yürür. Site bağımsız özel teknik servisi tanıtır; marka yetkili servisi olduğu iddia edilmez.

## Çalıştırma ve doğrulama

Node.js 20.19+ ve npm gerekir. Desteklenen Node LTS sürümünü tercih edin.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run typecheck
npm test
npm run audit
```

Geliştirme: `http://localhost:3000`. Üretim: `npm run build`, ardından `npm start`. Playwright kendi üretim sunucusunu **3100** portunda açar; kullanıcının 3000 portundaki geliştirme oturumuna dokunmaz. Lighthouse ayrı **3001** portunda ölçüm yapar. Testler ve audit sistemdeki Microsoft Edge’i headless kullanır. Edge yoksa Playwright Chromium kurup test ve audit yapılandırmasındaki `channel` seçimini uyarlayın.

## Merkezi işletme ve yayın ayarları

`src/lib/business.ts`, doğrulanmış telefon, WhatsApp, hizmetler, ilçeler ve markaların kaynağıdır. `.env.example` dosyasındaki değişkenlerle özelleştirin; statik içerikler için yeniden derleme gerekir.

- `BUSINESS_NAME`, `BUSINESS_HOURS`, `BUSINESS_ADDRESS`, `BUSINESS_GUARANTEE`, `BUSINESS_GOOGLE_URL` doğrulanmadan doldurulmaz. Saat, adres, garanti süresi ve yorum bilgileri arayüzde üretilmez.
- “Beyaz Eşya Servisi” genel hizmet tanımıdır; bilinmeyen resmi işletme adı yerine LocalBusiness’a aktarılmaz.
- **İndeksleme işletme adından bağımsızdır.** İçerik varsayılan olarak `index, follow` sunulur. Yalnızca özel test ortamını kapatmak için `SITE_INDEXABLE=false` kullanın. Gizlilik/KVKK ve 404 sayfaları indekslenmez.
- LocalBusiness yalnızca `BUSINESS_VERIFIED` ve gerçek `BUSINESS_NAME` ile üretilir; olmayan adres, çalışma saati, puan veya yorum eklenmez. Article, BreadcrumbList ve Service şemaları görünür içerikle eşleşir.
- `npm run check:launch`, bilinmeyen işletme kimliğini ve kapalı indeksleme ayarını hatırlatır. Siteyi yayımlamaz.

## Doğrudan iletişim ve dönüşüm ölçümü

Talep/iletişim arayüzü, alan doğrulaması, ilgili stiller ve eski `/api/servis/` endpoint’i kaldırıldı. Webhook veya sunucuda talep kaydı bulunmaz. Eski endpoint 404 verir; müşteri verisi toplayan bir API yoktur.

`src/lib/contact.ts`, WhatsApp URL’sini ve hazır mesajı üretir. Genel mesaj: “Merhaba, beyaz eşya tamiri için servis talebi oluşturmak istiyorum.” Marka, cihaz, blog ve ilçe sayfaları bağlamı özelleştirir. Mobil sabit çubukta hem telefon hem WhatsApp vardır. Bu bağlantılar uygulamaları açar; mesajın gönderildiğini veya randevu oluştuğunu iddia etmez.

`ContactLink`, **mevcut** `window.gtag` veya `window.dataLayer` varsa `phone_click` ve `whatsapp_click` olaylarını iletir. Parametreler `contact_context` ve `page_path`; ziyaretçi adı, telefon, mesaj içeriği gibi kişisel bilgi yoktur. İki kanal aynı olay adına birleştirilmez, aynı tıklama iki farklı analitik adaptörüne gönderilmez. SDK, çerez, analiz sağlayıcısı veya takip pikseli kurulmamıştır. Gerçek analiz/izin düzeni eklenirse gizlilik açıklaması da güncellenmelidir. Event testleri stub kullanır; dış hizmete mesaj göndermez.

## İçerik ve SEO mimarisi

- Mevcut ana sayfa, beş cihaz sayfası, marka listesi, blog ve iletişim URL’leri korundu.
- On bir marka detay sayfası: Arçelik, Bosch, Beko, Siemens, Samsung, LG, Vestel, Altus, Profilo, Electrolux ve Whirlpool. Tüm marka kartlarında detay bağlantısı ve markaya özel WhatsApp düğmesi bulunur.
- Bölge dizini: `/hizmet-bolgeleri/`; özgün kapsam sayfaları: `/hizmet-bolgeleri/gebze/`, `/hizmet-bolgeleri/darica/`, `/hizmet-bolgeleri/cayirova/`. Üç kartın tamamında detay bağlantısı, telefon ve ilçeye özel WhatsApp mesajı vardır. Sahte şube veya mahalle listesi yoktur.
- Üç eski yazı korundu, beş arıza rehberi eklendi; toplam sekiz yazı.
- Blog arşivi sayfa başına altı yazı gösterir. `/blog/sayfa/2/` kendi canonical adresine sahiptir. `/blog/sayfa/1/` ana bloga kalıcı yönlenir. Geçersiz sayfa numarası 404 döner.
- Buzdolabı, çamaşır makinesi ve bulaşık makinesi kategori sayfaları gerçek HTML bağlantılarıyla taranabilir. Tüm yazılara sayfalama veya kategorilerden erişilir.
- `src/lib/content.ts`: cihazlar ve yazı listesi; `article-details.ts`: giriş/description/tarih; `articles.ts`: yazı gövdeleri; `brands.ts`: marka içerikleri; `service-details.ts`: ticari cihaz içerikleri; `src/content/regions.ts`: bölge içerikleri.
- `src/lib/sources.ts`, üretici kaynaklarını tutar. İlgili yazı ve marka sayfalarında görünür kaynak bağlantıları vardır. Model bazlı kodlar bütün markalara genellenmez; elektrikli cihazın sökülmesi önerilmez.
- `Navigation`, App Router `usePathname` ile ilgili üst bölümü seçer; masaüstü ve mobilde `aria-current="page"` ve aktif görünüm üretir.
- Font boyutu en az 12 px; gövde ve uzun açıklamalar 16 px. İçerikler Server Components/SSG ile ilk HTML’de bulunur. Küçük client bileşenleri navigasyon, mobil menü ve tıklama olaylarını yönetir.

Teknik SEO: özgün metadata, canonical, Open Graph/Twitter, Türkçe HTML, sitemap, robots, yapılandırılmış veri ve doğru 404. Strateji ve sayfa/niyet eşlemesi: [SEO-STRATEJISI.md](SEO-STRATEJISI.md).

## Logo, harita ve müşteri deneyimleri

- Site adı **Beyaz Eşya Servisi** olarak sabittir. Özgün SVG işaret `src/components/brand-mark.tsx` ve `src/app/icon.svg` içindedir. PNG uygulama/Apple ikonlarını güncellemek için `node scripts/generate-icons.mjs` çalıştırın; manifest aynı kimliği kullanır.
- WhatsApp simgesinin vektör yolları resmi `whatsapp.com` sayfasından alınmıştır; SVG olarak net ölçeklenir. Marka mesajları merkezi `src/lib/contact.ts` üzerinden URL kodlamasıyla üretilir.
- Harita için API anahtarı zorunlu değildir. Anahtar yoksa Google Maps genel bölge görünümü ve üç ilçe arama bağlantısı gösterilir. İsteğe bağlı `GOOGLE_MAPS_EMBED_KEY` eklenip yeniden derlendiğinde kullanıcı tıklamasıyla Embed API haritası açılır; başlangıçta Google isteği yapılmaz. Anahtarı HTTP referrer ve Maps Embed API ile sınırlayın; tarayıcıda görünmesi normaldir. Harita işletme pini oluşturmaz.
- `src/content/customer-experiences.ts` toplam 10 kayıt alanı içerir. Kullanıcı 17 Kasım 2026’da beş müşterinin isim ve deneyimlerinin yayın onayını doğruladı; bu beş kayıt görünürdür. Ahmed Fevzi Yüksel’in cihazları Beko çamaşır makinesi ve Siemens bulaşık makinesi olarak tamamlandı. Kalan beş boş kayıt gizlidir. Yeni kayıt için `publicationApproved: true`, `approvalDate`, ad, cihaz ve özet eksiksiz olmalıdır. Onaysız kayıtlar HTML’e veya istemci bileşenine gönderilmez. Metinler deneyim özetidir; birebir alıntı, yıldız veya Google yorumu değildir.
- `src/components/customer-experiences.tsx` onay filtresini sunucuda uygular; `src/components/experience-slider.tsx` yalnızca görünür alanları alır. Kartlar anasayfanın **Şeffaf İletişim** bölümündedir. Mobil dokunma/kaydırma, önceki/sonraki düğmeleri, ok tuşları ve Home/End desteklenir. Otomatik oynatma yoktur; azaltılmış hareket tercihi korunur. Yeni üçüncü taraf paketi eklenmedi. Tüm kayıtlar gizlenirse mevcut bilgilendirme görünümü kullanılır. Statik sayfayı güncellemek için veri değişikliğinden sonra yeniden derleme gerekir.

## Domainler ve yayın

Ana domain `https://gebzebeyazesyatamiri.com`. `src/proxy.ts`, `daricabeyazesyatamiri.com` ve `www` sürümünden ana domaine **301** döndürür; yol ve sorguyu korur. İkinci bir kopya site yoktur. Bu kuralın internette işlemesi için DNS/TLS’in uygulamaya bağlanması veya aynı kuralın hosting seviyesinde kurulması gerekir.

Yerel test DNS yapılandırması yapmaz. Ana domain yayınlandıktan sonra iki domainin TLS’i ve gerçek HTTP yanıtları ayrıca kontrol edilmelidir. Mevcut Next.js Node.js hedefi korunmuştur; statik export veya Cloudflare Worker’a çevrilmemiştir.

## Görseller ve doğrulama raporu

Önceki tasarım ve özgün, markasız cihaz görseli korundu. Next/Image, öncelikli hero ve lazy diğer görseller kullanılır. Sistem fontu dış istek oluşturmaz. Görsel kaynak `public/images/hero-source.png`, optimize dosya `public/images/hero.webp`.

Güncel değişiklikler ve gerçek test sonuçları: [TESLIMAT.md](TESLIMAT.md). Lighthouse HTML/JSON ve masaüstü/tablet/mobil görüntüler `reports/` klasöründedir. Eski rapordaki düşük SEO puanı ve talep toplama akışı artık geçerli değildir.
#   b e y a z - e s y a - t a m i r i  
 
