import type { MetadataRoute } from "next";
import { devices, articles } from "@/lib/content";
import { business } from "@/lib/business";
import { brands } from "@/lib/brands";
import { publishedRegions } from "@/content/regions";
import { publicationDate } from "@/lib/article-details";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    ...devices.map((d) => `/${d.slug}/`),
    "/markalar/",
    ...brands.map((b) => `/markalar/${b.slug}/`),
    "/hizmet-bolgeleri/",
    ...publishedRegions.map((r) => `/hizmet-bolgeleri/${r.slug}/`),
    "/blog/",
    "/blog/sayfa/2/",
    ...["buzdolabi", "camasir-makinesi", "bulasik-makinesi"].map(
      (c) => `/blog/kategori/${c}/`,
    ),
    ...articles.map((a) => `/blog/${a.slug}/`),
    "/iletisim/",
  ].map((path) => ({
    url: `${business.site}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
    ...(articles.some((a) => path === `/blog/${a.slug}/`) && {
      lastModified: new Date(publicationDate),
    }),
  }));
}
