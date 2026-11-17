import Link from "next/link";
export const metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: true },
};
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <p className="eyebrow">404 · SAYFA BULUNAMADI</p>
      <h1>Aradığınız sayfa burada değil.</h1>
      <p>Bağlantı değişmiş olabilir. Ana sayfadan devam edebilirsiniz.</p>
      <Link href="/" className="button button-blue">
        Ana sayfaya dön
      </Link>
    </main>
  );
}
