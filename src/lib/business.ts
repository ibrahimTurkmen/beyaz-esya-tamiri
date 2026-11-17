const list = (value?: string) =>
  value
    ?.split(",")
    .map((x) => x.trim())
    .filter(Boolean) ?? [];
const verified = process.env.BUSINESS_VERIFIED !== "false";
const phone = process.env.BUSINESS_PHONE?.trim() || "+905325939223";
export const business = {
  verified,
  identityReady: !!process.env.BUSINESS_NAME?.trim(),
  name: process.env.BUSINESS_NAME?.trim() || "Beyaz Eşya Servisi",
  site: "https://gebzebeyazesyatamiri.com",
  phone: verified && /^\+90\d{10}$/.test(phone) ? phone : "",
  whatsapp:
    verified &&
    /^\+90\d{10}$/.test(process.env.BUSINESS_WHATSAPP || "+905325939223")
      ? process.env.BUSINESS_WHATSAPP || "+905325939223"
      : "",
  hours: verified ? process.env.BUSINESS_HOURS || "" : "",
  areas: verified
    ? list(process.env.BUSINESS_AREAS || "Gebze,Darıca,Çayırova ve çevresi")
    : [],
  brands: verified
    ? list(
        process.env.BUSINESS_BRANDS ||
          "Arçelik,Beko,Bosch,Siemens,Samsung,LG,Vestel,Altus,Profilo,Electrolux,Whirlpool",
      )
    : [],
  services: verified
    ? list(process.env.BUSINESS_SERVICES || "Bakım,Arıza tespiti,Onarım")
    : [],
  address: verified ? process.env.BUSINESS_ADDRESS || "" : "",
  googleUrl:
    verified &&
    /^https:\/\/(maps\.app\.goo\.gl|g\.page|www\.google\.com)\//.test(
      process.env.BUSINESS_GOOGLE_URL || "",
    )
      ? process.env.BUSINESS_GOOGLE_URL!
      : "",
  guarantee: verified ? process.env.BUSINESS_GUARANTEE || "" : "",
  indexable: process.env.SITE_INDEXABLE !== "false",
};
export const phoneLabel = business.phone
  ? business.phone.replace(/^\+90(\d{3})(\d{3})(\d{2})(\d{2})$/, "0$1 $2 $3 $4")
  : "";
