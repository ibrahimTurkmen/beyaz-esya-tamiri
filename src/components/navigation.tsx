"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", name: "Ana Sayfa", key: "home" },
  { href: "/#hizmetler", name: "Hizmetlerimiz", key: "services" },
  { href: "/markalar/", name: "Markalar", key: "brands" },
  { href: "/hizmet-bolgeleri/", name: "Bölgeler", key: "regions" },
  { href: "/blog/", name: "Blog", key: "blog" },
  { href: "/iletisim/", name: "İletişim", key: "contact" },
];
export function Navigation({ mobile = false }: { mobile?: boolean }) {
  const path = usePathname();
  const key =
    path === "/"
      ? "home"
      : path.startsWith("/markalar")
        ? "brands"
        : path.startsWith("/hizmet-bolgeleri")
          ? "regions"
          : path.startsWith("/blog")
            ? "blog"
            : path.startsWith("/iletisim")
              ? "contact"
              : /-tamiri\/$/.test(path)
                ? "services"
                : "";
  return (
    <nav
      className={mobile ? "mobile-nav" : "desktop-nav"}
      aria-label={mobile ? "Mobil navigasyon" : "Ana navigasyon"}
    >
      {links.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          className={key === link.key ? "nav-active" : undefined}
          aria-current={key === link.key ? "page" : undefined}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
