export const defaultMessage =
  "Merhaba, beyaz eşya tamiri için servis talebi oluşturmak istiyorum.";
export function contactMessage(context?: string) {
  return context
    ? `Merhaba, ${context} için servis talebi oluşturmak istiyorum.`
    : defaultMessage;
}
export function whatsappHref(number: string, context?: string) {
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(contactMessage(context))}`;
}
export function routeContactContext(path: string): string | undefined {
  const contexts: Record<string, string> = {
    "/markalar/arcelik": "Arçelik beyaz eşyamın tamiri",
    "/markalar/bosch": "Bosch beyaz eşyamın tamiri",
    "/markalar/beko": "Beko beyaz eşyamın tamiri",
    "/buzdolabi-tamiri": "buzdolabı tamiri",
    "/camasir-makinesi-tamiri": "çamaşır makinesi tamiri",
    "/bulasik-makinesi-tamiri": "bulaşık makinesi tamiri",
    "/firin-tamiri": "fırın tamiri",
    "/kurutma-makinesi-tamiri": "kurutma makinesi tamiri",
    "/hizmet-bolgeleri/gebze": "Gebze’de beyaz eşya tamiri",
    "/hizmet-bolgeleri/darica": "Darıca’da beyaz eşya tamiri",
  };
  const normalized = path.replace(/\/$/, "");
  if (contexts[normalized]) return contexts[normalized];
  if (normalized.startsWith("/blog/buzdolabi-"))
    return "buzdolabımdaki arızanın değerlendirilmesi";
  if (normalized.startsWith("/blog/camasir-makinesi-"))
    return "çamaşır makinemdeki arızanın değerlendirilmesi";
  if (normalized.startsWith("/blog/bulasik-makinesi-"))
    return "bulaşık makinemdeki arızanın değerlendirilmesi";
}
