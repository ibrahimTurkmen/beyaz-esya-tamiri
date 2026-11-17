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
        text: "Fırının ısıtmaması, programı başlatmaması; kurutma makinesinin çamaşırları nemli bırakması veya bakım uyarısı vermesi için arıza tespiti talep edebilirsiniz. Ankastre cihazlarda erişim koşullarını görüşmede belirtin. Modelin parça durumu ve gerekli işlem inceleme sonrasında değerlendirilir.",
      },
      {
        heading: "Gebze ve Darıca’da Arçelik özel servis görüşmesi",
        text: "Telefon veya WhatsApp üzerinden ilçe, mahalle, cihaz modeli ve arıza belirtisini iletin. Adres ve randevu uygunluğu birlikte netleşir. Onarımdan önce tespit bedelini, işçilik ve parça kalemlerini öğrenebilirsiniz.",
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
        text: "Gebze, Darıca ve Çayırova adresleri için bakım, arıza tespiti ve onarım görüşmesi yapabilirsiniz. Yerinde değerlendirme ve gerekiyorsa sonraki işlem, cihazın durumu ve adres koşulları görüşülerek planlanır. Telefon veya WhatsApp üzerinden size uygun zaman aralığını paylaşabilirsiniz.",
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
        text: "Telefonla arayabilir veya hazır WhatsApp mesajını açıp cihaz ve ilçe bilgilerinizi ekleyebilirsiniz. Tespit, parça ve işçilik bilgileri görüşmede netleşir. Size uygun zaman aralığını ileterek servis ziyaretini birlikte planlayabilirsiniz.",
      },
    ],
  },
  {
    slug: "siemens",
    name: "Siemens",
    title: "Siemens Beyaz Eşya Bakım ve Onarım | Gebze Özel Servis",
    description:
      "Siemens ankastre ve solo beyaz eşyalarınız için Gebze, Darıca ve Çayırova’da özel servis. Kurulum ve model bilgisiyle bakım veya onarım talebinizi iletin.",
    intro:
      "Siemens cihazınız ankastre bir mutfağın parçasıysa veya dar bir alana yerleştirilmişse, servis hazırlığında kurulum bilgisi de önem taşır. Beyaz eşyanızın modeli ve yaşadığınız sorunla birlikte bize ulaşabilirsiniz.",
    sources: [],
    sections: [
      {
        heading: "Ankastre cihaz için ziyaret hazırlığı",
        text: "Fırın veya bulaşık makinesinin dolap içindeki yerleşimini görüşmede belirtin. Cihazı yuvasından çıkarmadan erişimi tarif edebilirsiniz. Bakım veya arıza tespiti için gereken çalışma alanını birlikte değerlendirelim.",
      },
      {
        heading: "Program ve belirtiyi birlikte anlatın",
        text: "Yarım kalan program, yıkama sonucundaki değişim veya soğutma kaybı için cihaz türünü ve modelini paylaşın. Sorunun hangi kullanımda tekrarlandığı, inceleme öncesinde ihtiyacı anlamaya yardımcı olur. Siemens beyaz eşyalarınız için üç hizmet ilçemizden telefonla veya WhatsApp üzerinden görüşebilirsiniz.",
      },
    ],
  },
  {
    slug: "samsung",
    name: "Samsung",
    title: "Samsung Beyaz Eşya Tamiri | Gebze ve Çevresi Özel Servis",
    description:
      "Samsung çamaşır makinesi, buzdolabı ve diğer beyaz eşyalar için özel teknik servis. Gebze, Darıca ve Çayırova’dan model ve arıza bilgisiyle iletişime geçin.",
    intro:
      "Samsung çamaşır makineniz programı bitirmiyor veya buzdolabınız beklenen soğutmayı sağlamıyorsa, yaşadığınız değişimi bize anlatın. Gebze ve çevresinde bakım, arıza tespiti ve onarım için servis talebinizi alıyoruz.",
    sources: [],
    sections: [
      {
        heading: "Ekrandaki bilgiyi paylaşın",
        text: "Ekranda bir uyarı görünüyorsa kodu olduğu gibi yazın veya fotoğrafını iletin. Modeli bilmeden koddan kesin arıza sonucu çıkarmak yerine cihazın çalışma durumuyla birlikte değerlendirme yapılır. Etikete erişmek için ağır cihazı yerinden oynatmanız gerekmez.",
      },
      {
        heading: "Soğutma ve yıkama ihtiyaçları",
        text: "Buzdolabında hangi bölmenin etkilendiğini; çamaşır makinesinde ise su alma, yıkama, tahliye veya sıkma aşamasından hangisinde sorun olduğunu belirtin. Bakım ya da tamir görüşmesini bu bilgilerle başlatabilir, adresinize uygun ziyaret planını öğrenebilirsiniz.",
      },
    ],
  },
  {
    slug: "lg",
    name: "LG",
    title: "LG Buzdolabı ve Çamaşır Makinesi Tamiri | Özel Servis",
    description:
      "Gebze, Darıca ve Çayırova’da LG beyaz eşya bakım ve tamiri. Olağandışı ses, yıkama ve soğutma sorunları için bağımsız özel servisle doğrudan görüşün.",
    intro:
      "LG beyaz eşyanızın sesi, yıkama sonucu veya soğutma performansı değiştiğinde, gözlemlerinizi paylaşarak bakım ve onarım görüşmesi başlatabilirsiniz. Hizmetimizi Gebze, Darıca ve Çayırova’da sunuyoruz.",
    sources: [],
    sections: [
      {
        heading: "Sesin ne zaman çıktığını belirtin",
        text: "Çamaşır makinesinde su boşalırken duyulan ses ile sıkma sırasındaki ses farklı gözlemlerdir. Kısa bir açıklama veya kayıt, yaşadığınız sorunu anlatmanızı kolaylaştırır. Cihazın içini açmadan model ve program bilgisini iletin.",
      },
      {
        heading: "İnceleme ve onarım planı",
        text: "LG buzdolabı, yıkama grubu ve diğer beyaz eşyalar için yapılacak işlem cihazın incelenmesiyle belirlenir. Gereken parça, işçilik ve ücret hakkında bilgi verildikten sonra onayınız alınır. Birden fazla cihaz için talebiniz varsa görüşmede hepsini belirtebilirsiniz.",
      },
    ],
  },
  {
    slug: "vestel",
    name: "Vestel",
    title: "Vestel Beyaz Eşya Özel Servisi | Gebze, Darıca, Çayırova",
    description:
      "Vestel buzdolabı, çamaşır ve bulaşık makinesi, fırın ve kurutma makinesi için özel servis. Gebze ve çevresinde bakım ve arıza onarımını görüşün.",
    intro:
      "Vestel beyaz eşyalarınızın bakımını veya arıza onarımını tek iletişim hattından görüşebilirsiniz. Aynı evdeki buzdolabı ve çamaşır makinesi gibi birden fazla cihazın ihtiyacını ayrı ayrı değerlendiriyoruz.",
    sources: [],
    sections: [
      {
        heading: "Birden fazla cihaz için talep",
        text: "Her cihazın modelini, belirtisini ve sorunun başlangıç zamanını ayrı yazın. Bir cihaz için bakım, diğeri için arıza tespiti istiyorsanız bu ayrımı belirtmeniz ziyaret hazırlığını kolaylaştırır. İlçe ve mahallenizle birlikte uygun zamanınızı da paylaşın.",
      },
      {
        heading: "Kullanım sırasında değişen davranışlar",
        text: "Daha uzun süren program, eşit pişirmeyen fırın veya soğutması azalan buzdolabı için gözlemlerinizi dinliyoruz. Servis incelemesinde işlem ve parça ihtiyacı açıklanır. Ücret bilgisiyle birlikte onarım seçeneklerini değerlendirip karar verebilirsiniz.",
      },
    ],
  },
  {
    slug: "altus",
    name: "Altus",
    title: "Altus Beyaz Eşya Bakımı ve Tamiri | Gebze Özel Servis",
    description:
      "Altus beyaz eşyalarınız için Gebze, Darıca ve Çayırova’da bakım, arıza tespiti ve onarım. Model, program ve arıza bilgilerinizi telefon veya WhatsApp’tan iletin.",
    intro:
      "Altus cihazınızın günlük kullanımını aksatan bir sorunda veya bakım ihtiyacında bize ulaşabilirsiniz. Çamaşır ve bulaşık makinesi, buzdolabı, fırın ve kurutma makinesi taleplerini model bilgisiyle değerlendiriyoruz.",
    sources: [],
    sections: [
      {
        heading: "Su alma ve boşaltma belirtileri",
        text: "Makine hiç su almıyor mu, program sonunda içinde su mu kalıyor? Görüşmede bu ayrımı ve ekrandaki uyarıyı paylaşın. Cihazı sökmeden edindiğiniz gözlemler arıza tespiti hazırlığına yardımcı olur.",
      },
      {
        heading: "Bakım görüşmesinden ziyaret planına",
        text: "Arıza dışında düzenli bakım talebiniz varsa cihazın kullanım durumunu ve en son yapılan işlemi anlatabilirsiniz. Gebze, Darıca veya Çayırova’daki adresiniz için ziyaret zamanı birlikte planlanır; yapılacak işlem ve ücret incelemeyle netleşir.",
      },
    ],
  },
  {
    slug: "profilo",
    name: "Profilo",
    title: "Profilo Beyaz Eşya Tamiri ve Arıza Tespiti | Özel Servis",
    description:
      "Gebze ve çevresindeki Profilo beyaz eşyalar için bağımsız özel servis. Soğutma, yıkama ve pişirme sorunlarında modelinize göre bakım ve tamir görüşmesi yapın.",
    intro:
      "Profilo buzdolabınızın soğutması azaldığında, makineniz programı tamamlamadığında veya fırınınız beklediğiniz gibi pişirmediğinde özel servis için iletişime geçebilirsiniz. Gebze, Darıca ve Çayırova adreslerinden talep alıyoruz.",
    sources: [],
    sections: [
      {
        heading: "Model bilgisi neden istenir?",
        text: "Aynı marka içindeki cihazların parça ve kurulum özellikleri değişebilir. Model etiketine kolayca erişebiliyorsanız bilgisini iletin; erişemiyorsanız görüşmede bunu söyleyin. Sadece dış görünüşe dayanarak parça seçimi yapılmaz.",
      },
      {
        heading: "İşlem seçeneklerini öğrenin",
        text: "Arıza tespitinden sonra onarımın kapsamı, varsa parça gereksinimi ve ücret konuşulur. Bakım talebinde hangi performans değişimini fark ettiğinizi de paylaşabilirsiniz. Telefon ve WhatsApp bağlantılarıyla ilçenizi belirterek doğrudan servis görüşmesi başlatabilirsiniz.",
      },
    ],
  },
  {
    slug: "electrolux",
    name: "Electrolux",
    title: "Electrolux Beyaz Eşya Onarımı | Gebze Özel Teknik Servis",
    description:
      "Electrolux fırın, kurutma ve yıkama grubu ile buzdolabı için özel servis. Gebze, Darıca ve Çayırova’da model bazında bakım ve onarım seçeneklerini öğrenin.",
    intro:
      "Electrolux beyaz eşyanızda bakım veya tamir ihtiyacı için cihaz türünü ve modelini paylaşarak bize ulaşın. Fırın, kurutma makinesi, yıkama grubu ve buzdolabı taleplerini cihazın durumuna göre değerlendiriyoruz.",
    sources: [],
    sections: [
      {
        heading: "Pişirme ve kurutma sonucunu anlatın",
        text: "Fırında ısının yetersiz kalması veya kurutma süresinin uzaması gibi belirtilerde seçtiğiniz programı ve sonucu belirtin. Ne beklediğinizi ve ne yaşadığınızı birlikte anlatmanız servis görüşmesini kolaylaştırır.",
      },
      {
        heading: "Parça uygunluğu ve bakım kapsamı",
        text: "Parça gerektiren işlemlerde uygunluk model bilgisi üzerinden değerlendirilir. Cihazın yaşı, daha önce gördüğü işlem ve mevcut durum hakkında bildiklerinizi paylaşabilirsiniz. İnceleme sonrası yapılabilecek işlem, ücret ve ziyaret planı sizinle görüşülür.",
      },
    ],
  },
  {
    slug: "whirlpool",
    name: "Whirlpool",
    title: "Whirlpool Beyaz Eşya Tamiri | Gebze ve Darıca Özel Servis",
    description:
      "Whirlpool cihazlarınız için Gebze, Darıca ve Çayırova’da özel servis görüşmesi. Buzdolabı, yıkama grubu ve diğer beyaz eşyalarda bakım ve arıza onarımı.",
    intro:
      "Whirlpool beyaz eşyanız çalışmayı durdurduysa veya kullanımı etkileyen bir belirti gösteriyorsa model bilgisiyle servis talebinizi iletebilirsiniz. Bakım ve onarım kapsamını cihazınıza göre birlikte ele alıyoruz.",
    sources: [],
    sections: [
      {
        heading: "Arızanın tekrar ettiği koşullar",
        text: "Sorun her çalıştırmada mı, belirli bir programda mı oluşuyor? Elektrik kesintisi veya taşıma sonrasında başladıysa bunu da görüşmede anlatın. Bu bilgiler cihaz incelemesinden önce yaşadığınız durumu anlamaya yardımcı olur.",
      },
      {
        heading: "Adres ve cihaz bilgisiyle iletişim",
        text: "Gebze, Darıca veya Çayırova’daki mahallenizi, cihaz türünü ve uygun zamanınızı WhatsApp mesajına ekleyebilirsiniz. Model bazında parça ihtiyacı ve yapılacak işlem değerlendirilir; servis ziyareti ve onarım ücreti hakkında doğrudan bilgi alabilirsiniz.",
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
