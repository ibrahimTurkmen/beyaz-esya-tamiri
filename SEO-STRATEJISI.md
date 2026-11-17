# Sayfa ve arama niyeti haritası

## Araştırmanın kapsamı

Kullanıcının 17 Kasım 2026 tarihli Keyword Planner özetinden yararlanıldı. Ham 1.074 satırlık CSV bu görevde sağlanmadığından yeniden analiz edilmiş gibi sunulmadı. Dönem Kasım 2025–Ekim 2026, hedef Gebze–Darıca–Çayırova.

50 yaklaşık 10–100, 500 yaklaşık 100–1.000 aralığının planlama temsilidir; 5.000 kesin arama sayısı değildir. Benzer sorgular toplanıp benzersiz kişi sayısı üretilmedi. Ads rekabeti organik sıralama zorluğu olarak kullanılmadı. Arçelik tek büyüme kanalı seçilmedi; Bosch/Beko, cihaz niyeti ve yerel kapsam da geliştirildi.

## Birincil niyetler

| Sayfa | Birincil niyet | Rolü |
| --- | --- | --- |
| `/` | Gebze beyaz eşya servisi / tamiri, genel beyaz eşya tamircisi | Tüm cihaz, marka ve bölge yollarının ana ticari girişi |
| `/buzdolabi-tamiri/` | Buzdolabı tamircisi ve onarım | Genel soğutma hizmeti; motor/fan/conta rehberlerini hizmete bağlar |
| `/camasir-makinesi-tamiri/` | Çamaşır makinesi tamiri | Su alma, tahliye, kilit gibi belirtilerden servis görüşmesine geçiş |
| `/bulasik-makinesi-tamiri/` | Bulaşık makinesi tamiri | Yıkama, tahliye ve ısıtma hizmeti |
| `/firin-tamiri/`, `/kurutma-makinesi-tamiri/` | İlgili cihazın onarımı | Gerçek hizmet kapsamının tamamlanması |
| `/markalar/` | Markaya göre özel servis seçimi | Desteklenen markaları ve öncelikli detay sayfalarını toplar |
| `/markalar/arcelik/` | Arçelik tamiri / Arçelik özel servis | Marka cihazları, örnek belirtiler, yerel kapsam |
| `/markalar/bosch/` | Bosch özel servis | Model bilgisi, E18 örneği, ısıtma/kurutma ayrımı |
| `/markalar/beko/` | Beko özel servis | Kapak emniyeti, model bazlı su alma uyarısı, cihaz hizmeti |
| `/hizmet-bolgeleri/` | Hizmet verilen ilçeler | Gebze, Darıca, Çayırova kapsamı ve doğru bölge bağlantısı |
| `/hizmet-bolgeleri/gebze/` | Gebze adresi için servis kapsamı/randevu | Ana sayfayı kopyalamadan adres, erişim ve ziyaret hazırlığı |
| `/hizmet-bolgeleri/darica/` | Darıca beyaz eşya servisi / tamiri | Yerel cihaz seçimi, iletişim ve onarım değerlendirmesi |
| `/blog/` ve kategori/arşivler | Arıza bilgisine ulaşma | Ticari cihaz sayfalarını destekleyen rehber dizini |
| `/iletisim/` | Arama / WhatsApp görüşmesi | Son iletişim adımı |

Her marka + cihaz + ilçe kombinasyonu için ayrı sayfa üretilmedi. “En yakın” aramalarına gerçek hizmet alanı ve iletişimle yanıt verilir; sahte adres veya kesin yakınlık iddiası kullanılmaz. İlçe sayfaları birbirinin ad değiştirilmiş kopyası değildir. Yetkili servis niyeti açık özel servis açıklamasıyla ayrıştırılır.

## İçerik kümeleri

| Ana hizmet | Destekleyen bilgi niyetleri |
| --- | --- |
| Buzdolabı tamiri | Soğutmama (mevcut), motor arızası (yeni), fan motoru arızası (yeni). Kapak contası ve hava dolaşımı soğutmama rehberi/hizmet içinde ele alınır. |
| Çamaşır makinesi tamiri | Su almama (mevcut), su boşaltmama/tahliye pompası (yeni), kapak kilidi (yeni) |
| Bulaşık makinesi tamiri | Koku/tahliye (mevcut), ısıtmama/rezistans (yeni). Pompa konusu hizmet ve mevcut koku rehberindeki tahliye bağlantısıyla kapsanır. |

Yazılar birbirine ve ilgili cihaz hizmetine bağlanır; hizmet sayfaları da bu rehberlere geri bağlantı verir. Marka sayfaları cihaz ve bölge sayfalarına, ana sayfa üç marka detayına ve bölgelere bağlanır. Sekiz rehberin tamamı kategori ve gerçek sayfalama bağlantılarıyla erişilebilirdir.

## Teknik içerik kontrolü

Kaynaklar `src/lib/sources.ts` içinde ve ziyaretçiye açık kaynak bölümlerinde tutulur. Örnek doğrulamalar:

- E18’in tahliye sorunu olması ve doğrudan parça değişimi anlamına gelmemesi: [Bosch destek](https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/e18-ekrani).
- Islak plastik ile tamamen ısıtmama arasındaki fark: [Bosch ısıtma/kurutma açıklaması](https://www.bosch-home.co.uk/customer-service/get-support/dishwashers/not-heating-or-drying).
- Kilit simgesi, program ve güvenli kapak açılma koşulları: [Beko kapak açıklaması](https://www.beko.com.tr/blog/beko-camasir-makinesi-kapagi-acilmiyor-mu).
- Fan çevresinde buzun ses oluşturabilmesi ve ısı kaynağı kullanılmaması: [Samsung destek](https://www.samsung.com/ca/support/home-appliances/understand-the-noises-coming-from-your-samsung-refrigerator/).

Yazar/teknisyen kimliği veya sertifikası uydurulmadı. Yayın ve güncelleme tarihi, bu projede içeriklerin oluşturulup gözden geçirildiği 17 Kasım 2026 olarak gösterilir. Kaynakların model/bölge farklılıkları nedeniyle özel kodlar genellenmez.

## Ölçüm ve gerçek sonuçlar

Telefon/WhatsApp olayları mevcut analitik altyapıya bağlanabilir; bu görevde yeni sağlayıcı kurulmadı. Gerçek trafik ve sıralama etkisi yayından sonra Search Console ve uygun dönüşüm ölçümüyle izlenebilir. Lighthouse SEO 100, organik sıralama veya müşteri sayısı garantisi değildir. İşletme kimliği, adres ve Google işletme bilgileri doğrulanınca yerel işletme sinyalleri ayrıca tamamlanabilir.
