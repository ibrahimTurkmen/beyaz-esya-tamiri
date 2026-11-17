# Tasarım, UX ve hizmet bölgeleri — 17 Kasım 2026

Bu rapor önceki teslimatın yerine geçer. Mevcut Next.js mimarisi, tasarım dili, görseller ve URL’ler korundu.

## Son düzenlemeler

- **Gebze, Darıca ve Çayırova kartlarının tamamı** özgün kısa açıklama, “Servis kapsamını inceleyin →”, mavi **0532 593 92 23** ve yeşil **WhatsApp'tan Yazın** içerir. Kartlar masaüstünde ve mobilde eşit yükseklikte; bağlantılar ve düğmeler alta hizalı, mobilde tek sütun ve tam genişliktedir.
- İlçe mesajları kullanıcının verdiği metinlerle birebir eşleşir. Çayırova için özgün içerikli `/hizmet-bolgeleri/cayirova/` eklendi; üç ilçenin title, H1, description ve canonical bilgileri ayrıdır. Detay sayfalarında ve mobil çubukta ilgili ilçe bağlamı korunur.
- İletişim sayfasındaki belirtilen uzun açıklama kaldırıldı. Bölge ve marka gövdelerindeki tekrarlar sadeleştirildi. Marka sayfalarında **bağımsız özel servis / yetkili servis değildir** açıklaması açıkça korunur.
- **11 marka kartının tamamında** detay bağlantısı ve “{Marka} İçin Yazın” düğmesi vardır. Marka mesajı merkezi yardımcıdan “Merhaba, {Marka} beyaz eşyam için teknik servis hizmeti almak istiyorum.” olarak üretilir. Eksik sekiz marka detay sayfası, özgün hizmet içeriği ve telefon/WhatsApp CTA’larıyla tamamlandı.
- **Beyaz Eşya Servisi** adı korundu. Özgün SVG logo header/footer, SVG favicon, çok boyutlu ICO, Apple ve uygulama ikonlarında kullanılır. WhatsApp simgesi resmi `whatsapp.com` SVG yollarıyla değiştirildi.
- Eski çizim kaldırıldı. **Google Maps anahtarı yokken çalışan bölge görünümü ve ilçe bağlantıları** gösterilir. İsteğe bağlı `GOOGLE_MAPS_EMBED_KEY` girildiğinde harita kullanıcı tıklamasıyla yüklenir; sahte işletme pini yoktur. Mevcut anahtarsız sürüm başlangıçta Google isteği yapmaz.
- **Beş müşterinin yayın onayı kullanıcı tarafından 17 Kasım 2026’da doğrulandı ve kayıtlar görünür yapıldı.** Ahmed Baki, İkra Oku, Merve İnce, Hayrettin Basir ve Ahmed Fevzi Yüksel; isim, bilinen cihazlar ve deneyim özetleriyle anasayfadaki **Şeffaf İletişim** alanında yer alır. Fotoğraf, avatar, puan ve doğrudan alıntı yoktur. Slider mobil kaydırma, yön düğmeleri ve klavyeyle çalışır; yeni bağımlılık eklenmedi. Beş boş kayıt gizlidir; onaysız/eksik kayıtlar sunucuda elenir. Yönetim ayrıntıları README’dedir.

## İletişim ve arayüz

- Servis/iletişim veri giriş arayüzü, doğrulama kodu, ilgili stiller ve `/api/servis/` endpoint’i tamamen kaldırıldı. Webhook ayarları temizlendi; uygulamada talep toplama API’si yok.
- Tüm iletişim **0532 593 92 23** telefon ve WhatsApp hattına bağlandı. Ana sayfa, header, sayfa CTA’ları, footer ve mobil sabit çubuk çalışır.
- WhatsApp hazır mesajları marka, cihaz, yazı ve ilçe bağlamına uyarlanır. Mesajın gönderildiği iddia edilmez; gönderimi kullanıcı harici uygulamada yapar.
- Mevcut analitik altyapı varsa `phone_click` ve `whatsapp_click` ayrı üretilir. Yeni analiz sağlayıcısı veya çerez eklenmedi; testlerde yalnızca stub kullanıldı.
- Aktif header ve mobil menü bağlantısı gerçek pathname ile belirlenir; alt sayfada üst menü aktif, `aria-current="page"` mevcut.
- 12 px altındaki yazılar kaldırıldı. Gövde ve uzun metinler 16 px; dokunma hedefleri ve kontrast kontrol edildi. Tekrarlayan güven kartları tek açıklama bandına indirildi.

## Güncellenen sayfalar

- Ana sayfa: Gebze beyaz eşya tamiri/özel servis H1’i, kısa ticari açıklama, telefon/WhatsApp, marka ve bölge detaylarına bağlantılar.
- Markalar: 11 gerçek marka detayına geçiş ve her kartta markaya özel WhatsApp.
- Beş cihaz sayfası: özgün ticari metadata, arıza grupları, mevcut güvenli kontroller, teknisyen sınırı, markalar, gerçek ilçeler ve ilgili blog bağlantıları.
- Mevcut üç blog yazısı: özgün giriş/description, tarih, Article schema, resmi teknik kaynaklar, ilgili yazı/hizmet bağlantıları ve bağlamsal CTA. URL’leri ve içerik gövdeleri korundu.
- İletişim: tamamen telefon/WhatsApp odaklı. Gizlilik/KVKK açıklamaları güncel veri akışına uyarlandı.

## Eklenen sayfalar

- `/markalar/arcelik/`
- `/markalar/bosch/`
- `/markalar/beko/`
- `/hizmet-bolgeleri/`, `/hizmet-bolgeleri/gebze/`, `/hizmet-bolgeleri/darica/`
- `/blog/buzdolabi-motor-arizasi/`
- `/blog/camasir-makinesi-suyu-bosaltmiyor/`
- `/blog/camasir-makinesi-kapak-kilidi-arizasi/`
- `/blog/bulasik-makinesi-isitmiyor/`
- `/blog/buzdolabi-fan-motoru-arizasi/`
- `/blog/sayfa/2/` ve üç cihaz kategorisi.

Son düzenlemede Çayırova ile Siemens, Samsung, LG, Vestel, Altus, Profilo, Electrolux ve Whirlpool detayları eklendi. Önceki 29 içerik URL’si korunarak toplam **38 içerik sayfasına** ulaşıldı. Her marka/cihaz/ilçe kombinasyonu çoğaltılmadı. Sahte adres, şube, yorum, puan, garanti veya yetkili servis ilişkisi eklenmedi.

## Teknik SEO

İşletme adı eksikliğinin tüm içeriği engelleyen eski `noindex` bağımlılığı kaldırıldı. İndeksleme `SITE_INDEXABLE` ile bağımsız yönetilir; varsayılan açık. Bilinmeyen işletme kimliği yine LocalBusiness olarak yayınlanmaz. Gizlilik/KVKK ve 404 indekslenmez.

Özgün title/description, canonical, Open Graph/Twitter, tek H1, BreadcrumbList, Article/Service schema, Türkçe HTML ve sitemap güncellendi. İçerikler sunucudan HTML olarak gelir. Darıca domaininin ana domaine **301** yönlendirmesi korunur; yol ve sorgu parametresi test edildi. Kategori ve sayfalama gerçek bağlantılarla taranabilir.

## Doğrulama

| Kontrol                 | Sonuç                                                                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ESLint                  | Başarılı                                                                                                                                                       |
| TypeScript              | Başarılı                                                                                                                                                       |
| Production build        | Başarılı; API endpoint’i route listesinde yok                                                                                                                  |
| Playwright              | **14/14 test geçti**; beş yorum, onay filtresi, slider düğmeleri/klavye/kaydırma ve ekran boyutu değişimi dahil                                                |
| Metadata ve bağlantılar | **38 sayfada** özgün title/description, tek H1, canonical, OG/Twitter, veri giriş elementi bulunmaması ve iç linkler kontrol edildi                            |
| Responsive              | 10 temsilî sayfa/şablon × **1440 / 768 / 375 px**; yatay taşma ve 12 px altı görünür metin yok                                                                 |
| Erişilebilirlik         | Temsilî sayfalarda axe WCAG 2.2 AA etiketli tarama: ihlal yok                                                                                                  |
| Navigasyon              | Ana/alt sayfa aktif menüsü, mobil menü kapanışı, SSS, sayfalama ve kategoriler başarılı                                                                        |
| İletişim                | 11 marka ve üç ilçe kartı/detay mesajı, tüm telefon/WhatsApp href’leri, ayrı analitik olayları doğrulandı                                                      |
| Kartlar ve varlıklar    | Eşit ilçe kartı yükseklikleri, alta hizalama, mobil tam genişlik, logo/favicon/manifest, harita bağlantıları ve onaysız müşteri verisinin gizliliği doğrulandı |
| HTTP ve schema          | 404, kaldırılmış API, sitemap/robots, iki ikincil hosttan 301, makale tarihi/başlığı ve kaynaklar doğrulandı                                                   |

Otomatik erişilebilirlik taraması tam bir manuel WCAG sertifikası değildir. Gerçek arama veya WhatsApp mesajı gönderilmedi; linkler ve olay akışı yerelde test edildi. Canlı DNS/hosting ve gerçek analitik kayıt teslimi bu görevde doğrulanmadı.

## Lighthouse mobil

Yerel production build, Microsoft Edge ve Lighthouse 12.8.2 mobil simülasyonu:

| Ölçüm              | Sonuç      |
| ------------------ | ---------- |
| Performans         | **96**     |
| Erişilebilirlik    | **100**    |
| En iyi uygulamalar | **100**    |
| SEO                | **100**    |
| LCP                | **2,6 sn** |
| CLS                | **0**      |
| TBT                | **70 ms**  |

Önceki SEO 69 sonucu güncel değildir. LCP/CLS laboratuvar değerleridir; canlı hosting ve ağ koşulları farklı olabilir. INP saha verisi ölçülmedi; TBT, INP yerine sunulmaz. Lighthouse, sıralama garantisi vermez. Güncel [HTML raporu](reports/lighthouse-mobile.html) ve JSON `reports/` içindedir.

Bu ölçüm, beş onaylı müşteri deneyimi ve slider erişilebilirlik düzeltmesini içerir. Önceki ölçümde performans 98 idi; güncel ölçüm 96’dır. Tam test turu 14/14 başarılı; son ARIA düzeltmesinden sonra onay filtresi ve slider testleri ayrıca 2/2 başarılıdır. Slider’ın tam axe taramasında ihlal bulunmadı.

## Kalan yayın bilgileri

Site adı Beyaz Eşya Servisi olarak kesinleşti. Resmi işletme kimliği, açık adres, çalışma saatleri, garanti koşulları ve Google profili paylaşılmadı. Beş müşteri kaydı onaylıdır; yeni kayıtlar için yayın onayı gerekir. Harita gömmek isteğe bağlı API anahtarı gerektirir; anahtarsız bağlantılar hazırdır. Bu görev canlı yayın yapmadı.

[Masaüstü](reports/desktop.png) · [Tablet](reports/tablet.png) · [Mobil](reports/mobile.png) · [İletişim](reports/contact-mobile.png) · [Arçelik mobil](reports/arcelik-mobile.png) · [Blog mobil](reports/blog-mobile.png)

[Bölgeler masaüstü](reports/regions-desktop.png) · [Bölgeler mobil](reports/regions-mobile.png) · [Markalar masaüstü](reports/brands-desktop.png) · [Markalar mobil](reports/brands-mobile.png)

[Yorumlar masaüstü](reports/experiences-1440.png) · [Yorumlar mobil](reports/experiences-375.png) · [Beşinci yorum mobil](reports/experiences-last-375.png)

Kaynaklar: [WhatsApp marka kaynakları](https://www.meta.com/brand/resources/whatsapp/whatsapp-brand/) ve [Google Maps URL belgeleri](https://developers.google.com/maps/documentation/urls/get-started).

Kurulum: [README](README.md). Niyet ve içerik haritası: [SEO stratejisi](SEO-STRATEJISI.md).
