export const devices = [
  {
    slug: "camasir-makinesi-tamiri",
    name: "Çamaşır makinesi",
    icon: "washer",
    description: "Su almama, sıkma ve ses sorunları",
    intro:
      "Çamaşır makinesi su almıyor, programı tamamlamıyor ya da sıkma sırasında ses yapıyor olabilir. Ekrandaki hata kodunu ve sorunun hangi aşamada başladığını not etmek, doğru değerlendirmeye yardımcı olur.",
    checks: [
      "Su kesintisi olup olmadığını ve musluğun açık olduğunu kontrol edin.",
      "Kapının tam kapandığından, çamaşırların kapıya sıkışmadığından emin olun.",
      "Yük miktarı ve program seçimini cihazın kullanım kılavuzuyla karşılaştırın.",
    ],
    stop: "Su sızıntısı, yanık kokusu veya elektrik kaçağı şüphesinde cihazı kullanmayın. Islak fişe ya da prize dokunmayın; güvenli biçimde enerjisini kestirip uzman desteği alın.",
  },
  {
    slug: "buzdolabi-tamiri",
    name: "Buzdolabı",
    icon: "fridge",
    description: "Soğutma, buzlanma ve ses sorunları",
    intro:
      "Buzdolabında yetersiz soğutma tek bir parçaya bağlı olmayabilir. Kapı kapanışı, yerleşim ve sıcaklık ayarı değerlendirilmeden kesin arıza tanısı konulamaz.",
    checks: [
      "Kapının yiyecek veya ambalaj nedeniyle açık kalmadığını kontrol edin.",
      "İç hava kanallarının önünü kapatmayın; cihazı fazla doldurmayın.",
      "Sıcaklık ayarını kullanım kılavuzuyla karşılaştırın ve yakın zamanda elektrik kesintisi olup olmadığını not edin.",
    ],
    stop: "Soğutma devresine müdahale etmeyin, buzu kesici aletle kazımayın. Süren soğutma kaybında cihaz modelini ve gözleminizi teknik ekibe iletin.",
  },
  {
    slug: "bulasik-makinesi-tamiri",
    name: "Bulaşık makinesi",
    icon: "dishwasher",
    description: "Yıkama, tahliye ve koku sorunları",
    intro:
      "Bulaşıklarda kalan kir, makine içinde su birikmesi veya koku; program, yerleştirme ve bakım koşullarıyla ilişkili olabilir. Sorunun tekrar edip etmediğini gözlemlemek önemlidir.",
    checks: [
      "Bulaşıkların püskürtme kollarına engel olmadığını kontrol edin.",
      "Uygun deterjanı ve kir düzeyine uygun programı seçin.",
      "Filtre bakımını yalnızca cihaz kapalıyken ve kullanım kılavuzundaki talimata göre yapın.",
    ],
    stop: "Cihazın altında su, yanık kokusu ya da sürekli tekrarlayan hata varsa çalıştırmaya devam etmeyin. Elektrik bağlantılarına ve pompa bölümüne müdahale etmeyin.",
  },
  {
    slug: "firin-tamiri",
    name: "Fırın",
    icon: "oven",
    description: "Isıtma ve program sorunları",
    intro:
      "Fırının ısıtmaması veya yiyecekleri eşit pişirmemesi farklı nedenlere bağlı olabilir. Kullanılan program, raf konumu ve ekrandaki uyarılar servis öncesi değerlendirmede yararlıdır.",
    checks: [
      "Program ve sıcaklık seçiminin doğru olduğundan emin olun.",
      "Saat ayarı gerektiren modellerde kılavuzdaki ilk çalıştırma adımlarını kontrol edin.",
      "Kapı kapanışını ve raf yerleşimini cihaz soğukken inceleyin.",
    ],
    stop: "Elektrik bağlantılarını veya ısıtıcı parçaları sökmeyin. Gaz kokusu varsa cihazı kullanmayın; elektrik düğmelerine dokunmadan ortamdan uzaklaşıp gaz acil hattına başvurun.",
  },
  {
    slug: "kurutma-makinesi-tamiri",
    name: "Kurutma makinesi",
    icon: "dryer",
    description: "Kurutma ve filtre uyarıları",
    intro:
      "Kurutmanın uzun sürmesi, nemli çamaşır veya filtre uyarısı her zaman parça arızası anlamına gelmez. Yük, program ve kullanıcı bakım adımları birlikte değerlendirilir.",
    checks: [
      "Çamaşır yükünü ve programı kumaş türüne göre kontrol edin.",
      "Cihaz soğukken tiftik filtresini kılavuza uygun temizleyin.",
      "Su haznesi bulunan modellerde hazne doluluğunu kontrol edin.",
    ],
    stop: "Aşırı ısınma, yanık kokusu veya olağandışı ses varsa kullanımı durdurun. Koruma sensörlerini devre dışı bırakmayın; teknik destek alın.",
  },
] as const;
export const articles = [
  {
    slug: "camasir-makinesi-su-almiyor",
    title: "Çamaşır makinesi su almıyor: önce neyi kontrol etmeli?",
    device: 0,
    category: "KULLANIM REHBERİ",
    read: "3 dk",
    image: "washer",
  },
  {
    slug: "buzdolabi-sogutmuyor",
    title: "Buzdolabı neden soğutmuyor? Olası nedenler",
    device: 1,
    category: "ARIZA REHBERİ",
    read: "4 dk",
    image: "fridge",
  },
  {
    slug: "bulasik-makinesi-koku",
    title: "Bulaşık makinesindeki kötü koku nasıl önlenir?",
    device: 2,
    category: "BAKIM REHBERİ",
    read: "3 dk",
    image: "dishwasher",
  },
  {
    slug: "buzdolabi-motor-arizasi",
    title: "Buzdolabı motor arızası nasıl anlaşılır?",
    device: 1,
    category: "ARIZA REHBERİ",
    read: "3 dk",
    image: "fridge",
  },
  {
    slug: "camasir-makinesi-suyu-bosaltmiyor",
    title: "Çamaşır makinesi suyu boşaltmıyor: nedenleri",
    device: 0,
    category: "ARIZA REHBERİ",
    read: "3 dk",
    image: "washer",
  },
  {
    slug: "camasir-makinesi-kapak-kilidi-arizasi",
    title: "Çamaşır makinesi kapak kilidi arızası belirtileri",
    device: 0,
    category: "ARIZA REHBERİ",
    read: "3 dk",
    image: "washer",
  },
  {
    slug: "bulasik-makinesi-isitmiyor",
    title: "Bulaşık makinesi ısıtmıyor: olası nedenler",
    device: 2,
    category: "ARIZA REHBERİ",
    read: "3 dk",
    image: "dishwasher",
  },
  {
    slug: "buzdolabi-fan-motoru-arizasi",
    title: "Buzdolabı fan motoru arızası nasıl anlaşılır?",
    device: 1,
    category: "ARIZA REHBERİ",
    read: "3 dk",
    image: "fridge",
  },
] as const;
export const faq = [
  [
    "Servis ücreti nasıl belirlenir?",
    "Ücret; cihaz türüne, arızanın nedenine, işçilik ve gerekli parçaya göre değişir. Randevu öncesinde arıza tespit veya ulaşım bedeli olup olmadığını, onarımdan önce de toplam tutarı öğrenin. İnceleme yapılmadan kesin fiyat vermek doğru olmaz.",
  ],
  [
    "Aynı gün servis alabilir miyim?",
    "Randevu uygunluğu bulunduğunuz ilçeye, ekip planına ve parça ihtiyacına bağlıdır. Talep bırakmak kesinleşmiş randevu anlamına gelmez; gün ve saat karşılıklı teyit edilmelidir.",
  ],
  [
    "Onarımın garanti koşulları nelerdir?",
    "Garanti kapsamı yapılan işleme ve değiştirilen parçaya göre değerlendirilir. Süreyi, kapsamı ve istisnaları işlem öncesinde yazılı olarak isteyin. Doğrulanmış bir koşul olmadan sabit garanti süresi belirtilmez.",
  ],
  [
    "Hangi marka ve ilçeler için hizmet alabilirim?",
    "Cihazınızın marka ve modelini, bulunduğunuz ilçeyi talebinize ekleyin. İlgili model ve adres için hizmet uygunluğu randevu oluşturulmadan önce teyit edilir.",
  ],
  [
    "Servis gelmeden önce ne hazırlamalıyım?",
    "Cihazın marka ve modelini, varsa hata kodunu ve arızanın ne zaman başladığını not edin. Faturanızı ve önceki servis belgelerinizi hazır bulundurun. Cihazı sökmeyin; riskli bir belirti varsa kullanmayı bırakın.",
  ],
] as const;
