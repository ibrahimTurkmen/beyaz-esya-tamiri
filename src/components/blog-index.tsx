import Image from "next/image";
import Link from "next/link";
import { articles, devices } from "@/lib/content";
import { articleDetails, publicationDate } from "@/lib/article-details";
import { ContentPage } from "./content-page";
export const blogPageSize = 6;
export const blogCategories = [
  { slug: "buzdolabi", name: "Buzdolabı", device: 1 },
  { slug: "camasir-makinesi", name: "Çamaşır makinesi", device: 0 },
  { slug: "bulasik-makinesi", name: "Bulaşık makinesi", device: 2 },
];
export function BlogIndex({
  page = 1,
  category,
}: {
  page?: number;
  category?: (typeof blogCategories)[number];
}) {
  const subset = category
    ? articles.filter((a) => a.device === category.device)
    : articles;
  const visible = subset.slice((page - 1) * blogPageSize, page * blogPageSize);
  const count = Math.ceil(subset.length / blogPageSize);
  const path = category
    ? `/blog/kategori/${category.slug}/`
    : page === 1
      ? "/blog/"
      : `/blog/sayfa/${page}/`;
  return (
    <ContentPage
      title={
        category
          ? `${category.name} arıza ve bakım rehberleri`
          : page === 1
            ? "Beyaz eşya arıza ve bakım rehberleri"
            : `Beyaz eşya rehberleri — sayfa ${page}`
      }
      intro="Belirtiyi anlayın, güvenli ilk kontrolleri öğrenin. Onarım gerektiren durumlarda ilgili cihazın servis sayfasından telefon veya WhatsApp ile destek alın."
      path={path}
      parent={
        path === "/blog/"
          ? undefined
          : { name: "Bilgi & rehber", path: "/blog/" }
      }
    >
      <nav className="category-nav" aria-label="Rehber kategorileri">
        <Link href="/blog/" aria-current={!category ? "page" : undefined}>
          Tüm rehberler
        </Link>
        {blogCategories.map((c) => (
          <Link
            href={`/blog/kategori/${c.slug}/`}
            aria-current={category?.slug === c.slug ? "page" : undefined}
            key={c.slug}
          >
            {c.name}
          </Link>
        ))}
      </nav>
      <div className="blog-grid">
        {visible.map((a) => (
          <article className="blog-card" key={a.slug}>
            <Link href={`/blog/${a.slug}/`}>
              <div className={`article-image ${a.image}`}>
                <Image
                  src="/images/hero.webp"
                  alt={`${devices[a.device].name}: ${a.title}`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 400px"
                />
              </div>
              <span className="article-category">{a.category}</span>
              <h2>{a.title}</h2>
            </Link>
            <p>{articleDetails[a.slug].description}</p>
            <div className="blog-card-meta">
              <time dateTime={publicationDate}>17 Kasım 2026</time>
              <span>{a.read} okuma</span>
            </div>
            <Link className="text-link" href={`/blog/${a.slug}/`}>
              Rehberi okuyun →
            </Link>
          </article>
        ))}
      </div>
      {!category && count > 1 && (
        <nav className="pagination" aria-label="Blog sayfaları">
          {page > 1 && (
            <Link
              rel="prev"
              href={page === 2 ? "/blog/" : `/blog/sayfa/${page - 1}/`}
            >
              ← Önceki
            </Link>
          )}
          {Array.from({ length: count }, (_, i) => i + 1).map((number) => (
            <Link
              key={number}
              href={number === 1 ? "/blog/" : `/blog/sayfa/${number}/`}
              aria-current={number === page ? "page" : undefined}
              aria-label={`Sayfa ${number}`}
            >
              {number}
            </Link>
          ))}
          {page < count && (
            <Link rel="next" href={`/blog/sayfa/${page + 1}/`}>
              Sonraki →
            </Link>
          )}
        </nav>
      )}
      <section className="blog-service-links">
        <h2>Onarım desteği mi gerekiyor?</h2>
        <p>
          Bir parça adından önce cihazınızı ve yaşadığınız sorunu konuşalım.
        </p>
        <div className="related-links">
          {devices.slice(0, 3).map((d) => (
            <Link key={d.slug} href={`/${d.slug}/`}>
              {d.name} tamiri →
            </Link>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
