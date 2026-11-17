import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { business } from "@/lib/business";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(business.site),
  title: {
    default: "Gebze Beyaz Eşya Tamiri | Beyaz Eşya Servisi",
    template: "%s | Gebze Beyaz Eşya Servisi",
  },
  robots: { index: business.indexable, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
