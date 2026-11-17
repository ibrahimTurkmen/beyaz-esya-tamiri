import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { articles, devices } from "@/lib/content";
import { articleBodies } from "@/lib/articles";
import { metadata as makeMetadata, JsonLd } from "@/lib/seo";
import { articleDetails, publicationDate } from "@/lib/article-details";
import { Sources } from "@/components/sources";
import { business } from "@/lib/business";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) return {};
  const base = makeMetadata(a.title, articleDetails[slug].description, `/blog/${slug}/`);
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: publicationDate, modifiedTime: publicationDate } };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <ContentPage
      title={a.title}
      intro={articleDetails[slug].intro}
      path={`/blog/${slug}/`}
      parent={{ name: "Bilgi & rehber", path: "/blog/" }}
      contactContext={articleDetails[slug].context}
    >
      <article className="prose">
        <p className="article-dates">
          Yayın: <time dateTime={publicationDate}>17 Kasım 2026</time> ·
          Güncelleme: <time dateTime={publicationDate}>17 Kasım 2026</time>
        </p>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: articleDetails[slug].description,
            inLanguage: "tr-TR",
            datePublished: publicationDate,
            dateModified: publicationDate,
            mainEntityOfPage: `${business.site}/blog/${slug}/`,
            image: `${business.site}/images/hero.webp`,
            ...(business.identityReady && {
              publisher: { "@id": `${business.site}/#business` },
            }),
          }}
        />
        {articleBodies[slug].map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <div className="notice">
          Elektrik bağlantısı, iç parça veya soğutma devresine müdahale etmeyin.
          Güvenliğinden emin olmadığınız bir durumda cihazı kullanmayı bırakın.
        </div>
        <Link href={`/${devices[a.device].slug}/`}>
          {devices[a.device].name} tamiri ve servis desteği →
        </Link>
        <section className="related-articles">
          <h2>İlgili arıza rehberleri</h2>
          <ul>
            {articles
              .filter((item) => item.device === a.device && item.slug !== slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}/`}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </section>
        <Sources items={articleDetails[slug].sources} />
      </article>
    </ContentPage>
  );
}
