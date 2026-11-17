import type { SourceKey } from "./sources";
export const publicationDate = "2026-11-17";
export const articleDetails: Record<
  string,
  { description: string; intro: string; context: string; sources: SourceKey[] }
> = {
  "camasir-makinesi-su-almiyor": {
    description:
      "Çamaşır makinesi su almıyorsa su kaynağı, kapak ve programı güvenle kontrol edin. Valf ya da kilit arızası ne zaman teknik inceleme gerektirir?",
    intro:
      "Makine programa başlayıp su almıyorsa önce su kaynağı ve kapak kapanışına bakılır. Su giriş valfi, kapak kilidi veya seviye algılama sorunu ise cihaz açılmadan doğrulanamaz.",
    context: "su almayan çamaşır makinemin tamiri",
    sources: ["water"],
  },
  "buzdolabi-sogutmuyor": {
    description:
      "Buzdolabı soğutmuyorsa kapı contası, sıcaklık ayarı ve hava dolaşımı neden önemlidir? Güvenli kontrolleri ve teknik servis gereken belirtileri öğrenin.",
    intro:
      "Soğutma azalması her zaman motor arızası değildir. Kapı kapanışı, yerleşim ve ayarlar ilk kontrollerdir; kompresör, fan ve soğutma sistemi için teknik değerlendirme gerekir.",
    context: "soğutmayan buzdolabımın tamiri",
    sources: ["cooling", "fan"],
  },
  "bulasik-makinesi-koku": {
    description:
      "Bulaşık makinesindeki koku için filtre, yemek kalıntıları ve tahliye belirtilerini kontrol edin. Tekrarlayan koku ve biriken suda ne zaman servis gerekir?",
    intro:
      "Koku, içeride kalan yemek artıkları ve kullanıcı bakımıyla ilişkili olabilir. Ancak temizliğe rağmen süren koku veya tabanda biriken su, tahliye yolunun incelenmesini gerektirebilir.",
    context: "koku ve tahliye sorunu olan bulaşık makinemin tamiri",
    sources: ["dishwasher"],
  },
  "buzdolabi-motor-arizasi": {
    description:
      "Buzdolabı motoru sürekli çalışıyor veya çalışmıyor mu? Kompresör arızasını tek sesle teşhis etmek neden mümkün değildir; ne zaman teknisyen gerekir?",
    intro:
      "Buzdolabının motoru olarak anılan kompresör, soğutma çevriminin bir parçasıdır. Uzun çalışma veya bir tık sesi, tek başına kompresörün bozulduğunu göstermez. Belirtiyi soğutma durumuyla birlikte değerlendirmek gerekir.",
    context: "buzdolabımda motor arızası şüphesinin değerlendirilmesi",
    sources: ["noise", "cooling"],
  },
  "camasir-makinesi-suyu-bosaltmiyor": {
    description:
      "Çamaşır makinesinde su kalması ve sıkmaya geçmeme nedenleri. Tahliye hortumu, pompa ve hata kodları için güvenli kontroller ve servis gerektiren durumlar.",
    intro:
      "Program sonunda tamburda su kalıyorsa su tahliyesi tamamlanmamış olabilir. Aynı belirti hortum, tıkanıklık veya pompa sorunlarında görülebildiği için doğrudan parça değişimi kararı verilmez.",
    context: "suyu boşaltmayan çamaşır makinemin tamiri",
    sources: ["drain", "lock"],
  },
  "camasir-makinesi-kapak-kilidi-arizasi": {
    description:
      "Çamaşır makinesi kapağı açılmıyor veya program başlamıyorsa kapak kilidi gerçekten arızalı mı? Kilit simgesi, su seviyesi ve güvenli kontrol adımları.",
    intro:
      "Kapak açılmaması bazen güvenlik kilidinin normal çalışmasıdır. Programın durumu ve tamburdaki su görülmeden ‘kilit bozuk’ demek doğru olmaz. Kilidi zorlamadan belirtileri ayırın.",
    context: "çamaşır makinemdeki kapak kilidi sorununun değerlendirilmesi",
    sources: ["lock", "water"],
  },
  "bulasik-makinesi-isitmiyor": {
    description:
      "Bulaşık makinesi suyu ısıtmıyor mu, sadece iyi kurutmuyor mu? Program, parlatıcı, rezistans ve sensör olasılıkları ile güvenli servis öncesi kontroller.",
    intro:
      "Islak bulaşık ile suyun hiç ısınmaması aynı belirti değildir. Program seçimi ve bulaşıkların malzemesi değerlendirilmeden rezistans arızası sonucuna varılamaz.",
    context: "ısıtmayan bulaşık makinemin tamiri",
    sources: ["heating", "bekoCodes"],
  },
  "buzdolabi-fan-motoru-arizasi": {
    description:
      "Buzdolabında fan sesi ve düzensiz soğutma ne anlama gelebilir? Buzlanma, hava kanalları ve fan motoru için güvenli gözlem ve teknik servis sınırları.",
    intro:
      "Fanlı buzdolaplarında hava dolaşımı, bölmeler arasındaki soğutmayı etkiler. Sürtünme sesi veya bir bölmenin ısınması fanla ilişkili olabilir; bu belirtiler fan motorunun kesin arızalı olduğunu kanıtlamaz.",
    context: "buzdolabımın fan ve hava dolaşımı sorununun değerlendirilmesi",
    sources: ["fan", "noise"],
  },
};
