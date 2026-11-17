import Link from "next/link";
import { JsonLd } from "@/lib/seo";
import { business } from "@/lib/business";
import { BottomCTA } from "./layout";
import { ContactActions } from "./contact-actions";
export function ContentPage({
  title,
  intro,
  path,
  children,
  parent,
  contactContext,
}: {
  title: string;
  intro: string;
  path: string;
  children: React.ReactNode;
  parent?: { name: string; path: string };
  contactContext?: string;
}) {
  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    ...(parent ? [parent] : []),
    { name: title, path },
  ];
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${business.site}${item.path}`,
          })),
        }}
      />
      <div className="page-heading">
        <div className="container">
          <nav className="breadcrumbs" aria-label="İçerik yolu">
            {crumbs.map((item, i) => (
              <span key={item.path}>
                {i > 0 && <span aria-hidden="true"> / </span>}
                {i === crumbs.length - 1 ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
              </span>
            ))}
          </nav>
          <p className="eyebrow">BİLGİ · BAKIM · ÇÖZÜM</p>
          <h1>{title}</h1>
          <p className="page-intro">{intro}</p>
          {contactContext && <ContactActions context={contactContext} />}
        </div>
      </div>
      <div className="container content-body">{children}</div>
      <BottomCTA context={contactContext} />
    </main>
  );
}
