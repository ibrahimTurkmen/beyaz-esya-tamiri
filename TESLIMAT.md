# SEO ve dönüşüm güncellemesi — 17 Kasım 2026

Bu rapor önceki teslimatın yerine geçer. Mevcut Next.js mimarisi, tasarım dili, görseller ve URL’ler korundu.

## İletişim ve arayüz

- Servis/iletişim veri giriş arayüzü, doğrulama kodu, ilgili stiller ve `/api/servis/` endpoint’i tamamen kaldırıldı. Webhook ayarları temizlendi; uygulamada talep toplama API’si yok.
- Tüm iletişim **0532 593 92 23** telefon ve WhatsApp hattına bağlandı. Ana sayfa, header, sayfa CTA’ları, footer ve mobil sabit çubuk çalışır.
- WhatsApp hazır mesajları marka, cihaz, yazı ve ilçe bağlamına uyarlanır. Mesajın gönderildiği iddia edilmez; gönderimi kullanıcı harici uygulamada yapar.
- Mevcut analitik altyapı varsa `phone_click` ve `whatsapp_click` ayrı üretilir. Yeni analiz sağlayıcısı veya çerez eklenmedi; testlerde yalnızca stub kullanıldı.
- Aktif header ve mobil menü bağlantısı gerçek pathname ile belirlenir; alt sayfada üst menü aktif, `aria-current="page"` mevcut.
- 12 px altındaki yazılar kaldırıldı. Gövde ve uzun metinler 16 px; dokunma hedefleri ve kontrast kontrol edildi. Tekrarlayan güven kartları tek açıklama bandına indirildi.

## Güncellenen sayfalar

- Ana sayfa: Gebze beyaz eşya tamiri/özel servis H1’i, kısa ticari açıklama, telefon/WhatsApp, marka ve bölge detaylarına bağlantılar.
- Markalar: ticari hizmet kapsamı, Arçelik/Bosch/Beko detaylarına geçiş, diğer desteklenen markalara bağlamsal WhatsApp.
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

Çayırova gerçek hizmet bölgesi olarak dizinde yer alır; özgün bilgi olmadan ayrı tekrar sayfası üretilmedi. Her marka/cihaz/ilçe kombinasyonu çoğaltılmadı. Sahte adres, şube, yorum, puan, garanti veya yetkili servis ilişkisi eklenmedi.

## Teknik SEO

İşletme adı eksikliğinin tüm içeriği engelleyen eski `noindex` bağımlılığı kaldırıldı. İndeksleme `SITE_INDEXABLE` ile bağımsız yönetilir; varsayılan açık. Bilinmeyen işletme kimliği yine LocalBusiness olarak yayınlanmaz. Gizlilik/KVKK ve 404 indekslenmez.

Özgün title/description, canonical, Open Graph/Twitter, tek H1, BreadcrumbList, Article/Service schema, Türkçe HTML ve sitemap güncellendi. İçerikler sunucudan HTML olarak gelir. Darıca domaininin ana domaine **301** yönlendirmesi korunur; yol ve sorgu parametresi test edildi. Kategori ve sayfalama gerçek bağlantılarla taranabilir.

## Doğrulama

| Kontrol | Sonuç |
| --- | --- |
| ESLint | Başarılı |
| TypeScript | Başarılı |
| Production build | Başarılı; API endpoint’i route listesinde yok |
| Playwright | **9/9 test geçti** |
| Metadata ve bağlantılar | **29 sayfada** özgün title/description, tek H1, canonical, OG/Twitter, veri giriş elementi bulunmaması ve iç linkler kontrol edildi |
| Responsive | 7 temsilî sayfa/şablon × **1440 / 768 / 375 px**; yatay taşma ve 12 px altı görünür metin yok |
| Erişilebilirlik | Temsilî sayfalarda axe WCAG 2.2 AA etiketli tarama: ihlal yok |
| Navigasyon | Ana/alt sayfa aktif menüsü, mobil menü kapanışı, SSS, sayfalama ve kategoriler başarılı |
| İletişim | Tüm sayfalardaki telefon/WhatsApp href’leri; üç marka hazır mesajı; ayrı analitik olayları doğrulandı |
| HTTP ve schema | 404, kaldırılmış API, sitemap/robots, iki ikincil hosttan 301, makale tarihi/başlığı ve kaynaklar doğrulandı |

Otomatik erişilebilirlik taraması tam bir manuel WCAG sertifikası değildir. Gerçek arama veya WhatsApp mesajı gönderilmedi; linkler ve olay akışı yerelde test edildi. Canlı DNS/hosting ve gerçek analitik kayıt teslimi bu görevde doğrulanmadı.

## Lighthouse mobil

Yerel production build, Microsoft Edge ve Lighthouse 12.8.2 mobil simülasyonu:

| Ölçüm | Sonuç |
| --- | --- |
| Performans | **97** |
| Erişilebilirlik | **100** |
| En iyi uygulamalar | **100** |
| SEO | **100** |
| LCP | **2,4 sn** |
| CLS | **0** |
| TBT | **120 ms** |

Önceki SEO 69 sonucu güncel değildir. LCP/CLS laboratuvar değerleridir; canlı hosting ve ağ koşulları farklı olabilir. INP saha verisi ölçülmedi; TBT, INP yerine sunulmaz. Lighthouse, sıralama garantisi vermez. Güncel [HTML raporu](reports/lighthouse-mobile.html) ve JSON `reports/` içindedir.

## Kalan yayın bilgileri

İşletme adı, açık adres, çalışma saatleri, garanti koşulları ve Google profili hâlâ doğrulanmadı; bunlar uydurulmadı. Resmi işletme/veri sorumlusu bilgileriyle nihai gizlilik açıklaması tamamlanmalıdır. DNS/TLS ve iki domainin gerçek yönlendirmesi hosting üzerinde kurulup kontrol edilmelidir. Bu görev canlı yayın yapmadı.

[Masaüstü](reports/desktop.png) · [Tablet](reports/tablet.png) · [Mobil](reports/mobile.png) · [İletişim](reports/contact-mobile.png) · [Arçelik mobil](reports/arcelik-mobile.png) · [Blog mobil](reports/blog-mobile.png)

Kurulum: [README](README.md). Niyet ve içerik haritası: [SEO stratejisi](SEO-STRATEJISI.md).
