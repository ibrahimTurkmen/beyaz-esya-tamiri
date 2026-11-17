export const serviceDetails: Record<
  string,
  {
    title: string;
    description: string;
    intro: string;
    issues: { heading: string; text: string }[];
  }
> = {
  "buzdolabi-tamiri": {
    title: "Buzdolabı Tamiri ve Tamircisi | Gebze, Darıca, Çayırova",
    description:
      "Soğutmayan, buzlanan veya ses yapan buzdolabı için arıza tespiti ve onarım. Gebze, Darıca ve Çayırova’da özel servisle telefon veya WhatsApp’tan görüşün.",
    intro:
      "Gebze, Darıca ve Çayırova’da buzdolabı tamiri için özel servis desteği alın. Soğutma kaybı, buzlanma, kapak contası ve olağandışı ses belirtilerini modelinizle birlikte değerlendiriyoruz.",
    issues: [
      {
        heading: "Yetersiz soğutma ve sürekli çalışma",
        text: "Sıcaklık ayarı, kapı kapanışı ve kullanım koşulları kontrol edildikten sonra soğutma sistemi değerlendirilir. Kompresör, sensör ve kontrol bileşenleri için teknik inceleme gerekir. ‘Motor çalışıyor’ veya ‘ses gelmiyor’ bilgisi tek başına kesin teşhis sağlamaz.",
      },
      {
        heading: "Fan sesi ve bölmeler arasında sıcaklık farkı",
        text: "Fanlı modellerde buzlanma veya hava dolaşımı sorunu bölmelerin farklı soğumasına yol açabilir. Sesin kapı açılınca değişip değişmediğini ve hangi bölmenin etkilendiğini iletin. Fan motoru tamiri veya değişimi kararı cihaz üzerinde değerlendirilir.",
      },
      {
        heading: "Kapak contası ve tekrarlayan buzlanma",
        text: "Kapak contasında görünür yırtık veya kapının kapanmasına engel bir nesne olup olmadığını dışarıdan kontrol edin. Conta değişimi, kapı ayarı veya başka bir işlem gerekip gerekmediği incelenir. Buzları kesici aletle temizlemeyin ve soğutma borularına müdahale etmeyin.",
      },
    ],
  },
  "camasir-makinesi-tamiri": {
    title: "Çamaşır Makinesi Tamiri | Gebze ve Darıca Özel Servis",
    description:
      "Su almama, su boşaltmama, sıkma ve kapak kilidi sorunlarında çamaşır makinesi tamiri. Gebze, Darıca, Çayırova için doğrudan arayın veya WhatsApp’tan yazın.",
    intro:
      "Çamaşır makinesi tamircisi arıyorsanız marka, model ve hata kodunuzu paylaşın. Gebze, Darıca ve Çayırova’da bakım, arıza tespiti ve onarım hizmeti için doğrudan görüşebilirsiniz.",
    issues: [
      {
        heading: "Su almıyor veya program başlamıyor",
        text: "Su kaynağı, kapı kapanışı ve program seçimi ilk değerlendirmedir. Su giriş valfi, kapı kilidi veya algılama devresi gibi parçalar için ölçüm gerekir. Yalnızca belirtiye bakarak hangi parçanın değişeceğini söylemek doğru olmaz.",
      },
      {
        heading: "Suyu boşaltmıyor veya sıkmaya geçmiyor",
        text: "Tahliye hortumu, tıkanıklık ve su tahliye pompası birlikte değerlendirilir. Tamburda su kaldığını, ekrandaki kodu ve problemin hangi aşamada ortaya çıktığını belirtin. Sıcak su varken filtreyi açmayın veya kapıyı zorlamayın.",
      },
      {
        heading: "Kapak kilidi ve tekrarlayan ses",
        text: "Kilit simgesinin sönmemesi normal güvenlik koşullarından da kaynaklanabilir. Sorun program bittikten sonra sürüyorsa destek alın. Sıkmada ses için yük ve yerleşim koşulları önemlidir; iç mekanizma, motor veya yatak gibi bileşenlere kullanıcı müdahalesi önerilmez.",
      },
    ],
  },
  "bulasik-makinesi-tamiri": {
    title: "Bulaşık Makinesi Tamiri | Gebze, Darıca ve Çayırova",
    description:
      "Bulaşık makinesinde su boşaltmama, ısıtmama, yıkama ve koku sorunları için özel servis. Gebze, Darıca ve Çayırova’da bakım ve arıza tespiti alın.",
    intro:
      "Bulaşık makineniz suyu boşaltmıyor, iyi yıkamıyor veya ısıtmıyor mu? Gebze, Darıca ve Çayırova’da modelinize uygun arıza tespiti ve onarım için bize telefon veya WhatsApp’tan ulaşın.",
    issues: [
      {
        heading: "Su birikmesi ve pompa sorunları",
        text: "Tabanda biriken su; kullanıcı bakımı, tahliye hattı veya pompa ile ilişkili olabilir. Görülen su miktarı ve hata kodu görüşmede yararlıdır. Pompa tamiri gerekip gerekmediği incelenmeden karar verilmez; pompa kapağı ve elektrik bağlantıları sökülmemelidir.",
      },
      {
        heading: "Isıtmama ve zayıf kurutma",
        text: "Plastik bulaşıkların ıslak kalması tek başına rezistans arızası değildir. Program ve yerleşim değerlendirilir; gerçek ısıtma kaybında ısıtıcı, sensör ve kontrol bileşenleri teknisyen tarafından kontrol edilir. Çalışan cihazın sıcaklığını elle ölçmeye çalışmayın.",
      },
      {
        heading: "Kirli bulaşık ve tekrarlayan koku",
        text: "Uygun deterjan, doğru yükleme ve kılavuza uygun filtre bakımı ilk adımdır. Temizlikten sonra da su birikiyor veya koku sürüyorsa tahliye koşulları incelenmelidir. Tespit edilen soruna göre bakım veya onarım planlanır.",
      },
    ],
  },
  "firin-tamiri": {
    title: "Fırın Tamiri ve Arıza Tespiti | Gebze Özel Servis",
    description:
      "Gebze, Darıca ve Çayırova’da fırın ısıtma ve program sorunları için özel servis. Model ve arızayı paylaşın; bakım ve onarım uygunluğunu öğrenin.",
    intro:
      "Fırınınızda ısıtmama, program başlatmama veya düzensiz pişirme sorunu için bakım ve arıza tespiti talep edin. Gebze, Darıca ve Çayırova’da ankastre ve bağımsız cihazın modeline göre onarım değerlendirilir.",
    issues: [
      {
        heading: "Isıtma ve program sorunları",
        text: "Program, saat ayarı ve kullanım koşulları gözden geçirilir. Isıtıcı ve kontrol bileşenleri için teknisyen incelemesi gerekir. Ankastre cihazı kendiniz yerinden sökmeyin; elektrik veya gaz bağlantısına müdahale etmeyin.",
      },
    ],
  },
  "kurutma-makinesi-tamiri": {
    title: "Kurutma Makinesi Tamiri | Gebze ve Darıca Özel Servis",
    description:
      "Uzun kurutma, nemli çamaşır ve tekrarlayan uyarılar için kurutma makinesi tamiri. Gebze, Darıca ve Çayırova’da özel servis için iletişime geçin.",
    intro:
      "Kurutma makinesinde uzun program süresi, nemli çamaşır veya tekrarlayan uyarılar için modelinizi paylaşın. Gebze, Darıca ve Çayırova’da bakım, arıza tespiti ve onarım hizmeti sunuyoruz.",
    issues: [
      {
        heading: "Kurutma performansı ve uyarılar",
        text: "Yük miktarı, program seçimi ve kılavuzdaki kullanıcı bakım adımları değerlendirilir. Bakım sonrası tekrarlayan sorunlar teknik inceleme gerektirebilir. Isıtma ve koruma bileşenleri kullanıcı tarafından açılmamalı veya devre dışı bırakılmamalıdır.",
      },
    ],
  },
};
