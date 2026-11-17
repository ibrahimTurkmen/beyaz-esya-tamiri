import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
const missing = [];
if (!process.env.BUSINESS_NAME?.trim())
  missing.push(
    "Gerçek işletme adı henüz girilmedi; Organization/LocalBusiness schema gizli kalır. İçerik indekslemesi bundan bağımsızdır.",
  );
if (process.env.SITE_INDEXABLE === "false")
  missing.push(
    "SITE_INDEXABLE=false: bu ortam indekslemeye kapalı. Canlı site için ayarı gözden geçirin.",
  );
console.log(
  "Telefon ve WhatsApp doğrudan bağlantılarla çalışır; talep API’si veya webhook gerekmez.",
);
console.log(
  "DNS/TLS, iki domain arasındaki 301, gerçek iletişim teslimi ve işletmeye özgü gizlilik bilgilerini yayından önce kontrol edin.",
);
if (missing.length) {
  console.error(missing.map((x) => `- ${x}`).join("\n"));
  process.exitCode = 1;
}
