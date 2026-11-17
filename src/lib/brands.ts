import type { SourceKey } from "./sources";
export type Brand = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; text: string }[];
  sources: SourceKey[];
};
export const brands: Brand[] = [
  {
    slug: "arcelik",
    name: "Arçelik",
    title: "Arçelik Beyaz Eşya Tamiri | Gebze ve Darıca Özel Servis",
    description:
      "Gebze, Darıca ve Çayırova’da Arçelik buzdolabı, çamaşır ve bulaşık makinesi tamiri. Bağımsız özel servis için telefon veya WhatsApp’tan ulaşın.",
    intro:
      "Arçelik beyaz eşyalarınız için Gebze, Darıca ve Çayırova’da bakım, arıza tespiti ve onarım hizmeti sunuyoruz. Cihazın modelini ve gördüğünüz belirtiyi paylaşarak servis görüşmesini başlatabilirsiniz.",
    sources: ["cooling", "water"],
    sections: [
      {
        heading: "Arçelik buzdolabı: soğutma kaybı mı, çalışma döngüsü mü?",
        text: "Dolabın uzun süre çalışması tek başına motor arızası anlamına gelmez. Arçelik’in sorun giderme kılavuzunda sıcaklık ayarı, kapı kapanışı ve yeni yerleştirilen yiyecekler de değerlendirilir. Görüşmede yalnızca ‘soğutmuyor’ demek yerine, dondurucu ile soğutucu bölmenin ikisinin de etkilenip etkilenmediğini belirtin. Motor, fan veya kapak contası için karar cihaz incelendikten sonra verilir.",
      },
      {
        heading: "Çamaşır ve bulaşık makinelerinde doğru arıza bilgisi",
        text: "Su almama, suyu boşaltamama, sıkmaya geçmeme veya programın yarıda kalması için model ve program bilgisi gerekir. Arçelik cihazlardaki tüm uyarıları tek bir hata kodu tablosuyla yorumlamıyoruz. Ekranın fotoğrafını, sorunun programın başında mı sonunda mı oluştuğunu ve varsa sızıntıyı paylaşın. Kapı emniyetini devre dışı bırakmayın; makineyi sökmeden destek alın.",
      },
      {
        heading: "Fırın ve kurutma makinesi için de destek",
        text: "Fırının ısıtmaması, programı başlatmaması; kurutma makinesinin çamaşırları nemli bırakması veya bakım uyarısı vermesi için arıza tespiti talep edebilirsiniz. Ankastre cihazlarda erişim koşullarını görüşmede belirtin. Modelin parça durumu ve yapılacak işlem değerlendirilmeden sabit onarım sonucu veya süre sözü verilmez.",
      },
      {
        heading: "Gebze ve Darıca’da Arçelik özel servis görüşmesi",
        text: "Telefon veya WhatsApp üzerinden ilçe, mahalle, cihaz modeli ve arıza belirtisini iletin. Adres ve randevu uygunluğu birlikte netleşir. Onarımdan önce tespit bedelini, işçilik ve parça kalemlerini sorun. Bu hizmet Arçelik’in resmi yetkili servis hizmeti değildir; üretici garantisi devam eden cihazlarda önce garanti belgenizi ve resmi servis seçeneklerini değerlendirin.",
      },
    ],
  },
  {
    slug: "bosch",
    name: "Bosch",
    title: "Bosch Özel Servis ve Beyaz Eşya Tamiri | Gebze, Darıca",
    description:
      "Bosch beyaz eşyanız için Gebze ve Darıca’da bağımsız özel servis. E18 tahliye, soğutma ve ısıtma sorunlarında modelinize uygun değerlendirme alın.",
    intro:
      "Bosch çamaşır makinesi, bulaşık makinesi, buzdolabı, fırın ve kurutma makinesi için özel servis desteği. Gebze, Darıca ve Çayırova’da cihazınıza ait model bilgisini paylaşarak bakım veya onarım talebinizi iletebilirsiniz.",
    sources: ["drain", "heating"],
    sections: [
      {
        heading: "Bosch E18 uyarısı: her zaman pompa değişimi gerekmez",
        text: "Bosch’un resmi destek açıklamasında E18, atık suyun tahliye edilememesiyle ilişkilendirilir. Hortumun bükülmesi veya tahliye yolundaki tıkanıklık da bu belirtiye yol açabilir. Yalnızca hata koduna bakarak su tahliye pompasının değişmesi gerektiği söylenemez. Tamburda su kalıp kalmadığını not edin; kapağı zorlamayın ve sıcak su varken filtreyi açmayın.",
      },
      {
        heading:
          "Bosch bulaşık makinesinde ıslak bulaşık ile ısıtma arızası farklıdır",
        text: "Program sonunda özellikle plastik kapların ıslak olması tek başına rezistans arızası kanıtı değildir. Yerleşim, program ve parlatıcı koşulları kurutmayı etkileyebilir. Suyun hiç ısınmadığından şüpheleniliyorsa teknik değerlendirme gerekir. Rezistans, sensör veya kontrol devresine erişmek için cihazı açmayın.",
      },
      {
        heading: "Model etiketindeki bilgiyi neden istiyoruz?",
        text: "Bosch cihazınızın model etiketinde bulunan E-Nr bilgisini ve varsa hata kodunu iletmeniz, hangi ürün varyantının değerlendirileceğini netleştirir. Aynı marka içinde farklı parça ve programlar bulunur. Buzdolabında soğutma kaybı, fırında ısıtmama veya kurutma makinesinde performans düşüşü için de cihaz türünü ve belirtinin başlangıcını paylaşın; söküm gerektiren etikete ulaşmaya çalışmayın.",
      },
      {
        heading: "Özel servis kapsamı ve randevu",
        text: "Gebze, Darıca ve Çayırova adresleri için bakım, arıza tespiti ve onarım görüşmesi yapabilirsiniz. Yerinde değerlendirme ve gerekiyorsa sonraki işlem, cihazın durumu ve adres koşulları görüşülerek planlanır. Marka adına resmi randevu oluşturulmaz. Bosch’un yetkili servisi değiliz; üretici garantisi ve marka kampanyaları hakkında resmi kanallardan bilgi alın.",
      },
    ],
  },
  {
    slug: "beko",
    name: "Beko",
    title: "Beko Beyaz Eşya Tamiri ve Özel Servis | Gebze ve Darıca",
    description:
      "Beko çamaşır makinesi, buzdolabı ve bulaşık makinesi için Gebze, Darıca, Çayırova özel servis. Model ve arızayı telefon veya WhatsApp’tan paylaşın.",
    intro:
      "Beko cihazlarınızda bakım, arıza tespiti ve onarım için doğrudan iletişime geçin. Gebze, Darıca ve Çayırova’da model, adres ve parça uygunluğu değerlendirilerek servis süreci planlanır.",
    sources: ["lock", "bekoCodes"],
    sections: [
      {
        heading: "Beko çamaşır makinesi kapağı neden açılmayabilir?",
        text: "Beko’nun kapak açıklamasında programın devam etmesi ve kapı kilidi göstergesi güvenli açılma açısından önemlidir. Program bittikten sonra kilit hemen çözülmeyebilir; bu durum tek başına kapak kilidinin bozuk olduğunu göstermez. Su içeride kaldıysa tahliye sorunu da değerlendirilmelidir. Kapağı çekerek açmaya veya kilidi iptal etmeye çalışmayın.",
      },
      {
        heading: "Bulaşık makinesinde su alma ile ısıtma belirtisini ayırın",
        text: "Beko’nun bazı bulaşık makinesi modelleri için E02 açıklaması, şebeke suyu veya giriş musluğu nedeniyle su alınamamasını içerir. Kodu her modele genellemeden kullanım kılavuzuyla karşılaştırın. Makine su alıyor fakat yıkama sonucu değiştiyse programı ve ekrandaki uyarıyı ayrıca bildirin. Isıtma ya da sensör sorunu, ölçüm yapılmadan parça adıyla kesinleştirilemez.",
      },
      {
        heading: "Buzdolabı, fırın ve kurutma makinesinde arıza tespiti",
        text: "Soğutma azalması, olağandışı ses, fırında ısı kaybı ve uzun kurutma süresi için de Beko özel servis görüşmesi yapabilirsiniz. Yakın zamanda ayar değişikliği, taşıma veya elektrik kesintisi yaşandıysa bunu belirtin. Randevu öncesi model bilgisi, işlem ihtiyacını ve parça değerlendirmesini doğru cihaz üzerinden konuşmayı sağlar.",
      },
      {
        heading: "Beko özel servise nasıl ulaşabilirsiniz?",
        text: "Telefonla arayabilir veya hazır WhatsApp mesajını açıp cihaz ve ilçe bilgilerinizi ekleyebilirsiniz. İnceleme öncesinde kesin ücret veya aynı gün onarım taahhüdü verilmez; tespit, parça ve işçilik bilgileri görüşmede netleşir. Bağımsız özel teknik servis olarak çalışıyoruz. Beko adına hareket etmiyor, yetkili servis olduğumuzu iddia etmiyoruz.",
      },
    ],
  },
];
export function brandHref(name: string) {
  const brand = brands.find((b) => b.name === name);
  return brand
    ? `/markalar/${brand.slug}/`
    : `/markalar/#${encodeURIComponent(name)}`;
}
