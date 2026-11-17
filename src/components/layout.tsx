import Link from "next/link";
import { business, phoneLabel } from "@/lib/business";
import { Icon } from "./icon";
import { MobileMenu } from "./mobile-menu";
import { Navigation } from "./navigation";
import {
  ContactActions,
  ContactButton,
  WhatsAppButton,
} from "./contact-actions";
import { ContactLink } from "./contact-link";
import { MobileContact } from "./mobile-contact";
import { BrandMark } from "./brand-mark";
export { ContactButton } from "./contact-actions";

export function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo-symbol">
        <BrandMark />
      </span>
      <span>
        <strong>Beyaz Eşya Servisi</strong>
        <small>Arıza · Bakım · Onarım</small>
      </span>
    </Link>
  );
}
export function Header() {
  return (
    <>
      <a href="#main" className="skip-link">
        İçeriğe geç
      </a>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Icon name="pin" size={15} />
            <span className="topbar-region-text">
              {business.areas.length
                ? business.areas
                    .map((area) => area.replace(" ve çevresi", ""))
                    .join(" · ")
                : "Gebze ve çevresi"}
            </span>
          </span>
          {business.hours && (
            <span>
              <Icon name="clock" size={15} />
              {business.hours}
            </span>
          )}
          <span className="topbar-disclosure">
            <Icon name="shield" size={15} />
            Bağımsız özel servis
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container nav-inner">
          <Logo />
          <Navigation />
          <div className="header-actions">
            <ContactButton />
            <WhatsAppButton compact />
          </div>
          <MobileMenu>
            <Navigation mobile />
          </MobileMenu>
        </div>
      </header>
    </>
  );
}
export function BottomCTA({ context }: { context?: string }) {
  return (
    <section className="container bottom-cta" aria-labelledby="cta-title">
      <Icon name="headphones" size={48} />
      <div>
        <h2 id="cta-title">Beyaz eşyanızda bir sorun mu var?</h2>
        <p>Cihazınızı ve yaşadığınız sorunu paylaşarak ilk adımı atın.</p>
      </div>
      <ContactActions context={context} />
    </section>
  );
}
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>
              Gebze beyaz eşya tamiri, bakım ve arıza süreçleri için bilgi ve
              iletişim.
            </p>
          </div>
          <div>
            <h2>Hızlı bağlantılar</h2>
            <Link href="/">Ana sayfa</Link>
            <Link href="/markalar/">Markalar</Link>
            <Link href="/hizmet-bolgeleri/">Hizmet bölgeleri</Link>
            <Link href="/hizmet-bolgeleri/gebze/">Gebze servis kapsamı</Link>
            <Link href="/hizmet-bolgeleri/darica/">
              Darıca beyaz eşya servisi
            </Link>
            <Link href="/hizmet-bolgeleri/cayirova/">
              Çayırova bakım ve onarım
            </Link>
            <Link href="/blog/">Bilgi & rehber</Link>
          </div>
          <div>
            <h2>Tamir hizmetleri</h2>
            <Link href="/camasir-makinesi-tamiri/">Çamaşır makinesi</Link>
            <Link href="/buzdolabi-tamiri/">Buzdolabı</Link>
            <Link href="/bulasik-makinesi-tamiri/">Bulaşık makinesi</Link>
            <Link href="/firin-tamiri/">Fırın</Link>
            <Link href="/kurutma-makinesi-tamiri/">Kurutma makinesi</Link>
          </div>
          <div>
            <h2>İletişim</h2>
            {business.address && <p>{business.address}</p>}
            {business.phone && (
              <ContactLink
                kind="phone"
                context="footer"
                href={`tel:${business.phone}`}
              >
                <Icon name="phone" size={16} />
                {phoneLabel}
              </ContactLink>
            )}
            {business.hours && <p>{business.hours}</p>}
            <Link href="/iletisim/">
              Servis talebi ve iletişim <Icon name="arrow" size={15} />
            </Link>
            <p className="disclosure">
              Bağımsız özel teknik servis. Markaların yetkili servisi değildir.
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {business.name}
          </span>
          <div>
            <Link href="/gizlilik/">Gizlilik ve çerezler</Link>
            <Link href="/kvkk/">KVKK</Link>
          </div>
        </div>
      </footer>
      <MobileContact phone={business.phone} whatsapp={business.whatsapp} />
    </>
  );
}
