import { notFound, permanentRedirect } from "next/navigation";
import { BlogIndex, blogPageSize } from "@/components/blog-index";
import { articles } from "@/lib/content";
import { metadata as makeMetadata } from "@/lib/seo";
export const dynamicParams = true;
export function generateStaticParams() {
  return Array.from(
    { length: Math.ceil(articles.length / blogPageSize) - 1 },
    (_, i) => ({ page: String(i + 2) }),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  return makeMetadata(
    `Beyaz Eşya Rehberleri — Sayfa ${page}`,
    `Beyaz eşya arızaları ve güvenli ilk kontroller: rehber arşivinin ${page}. sayfası. Cihazınıza uygun teknik servis içeriğine ulaşın.`,
    `/blog/sayfa/${page}/`,
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (page === "1") permanentRedirect("/blog/");
  const number = Number(page);
  if (
    !/^\d+$/.test(page) ||
    !Number.isInteger(number) ||
    number < 2 ||
    number > Math.ceil(articles.length / blogPageSize) ||
    String(number) !== page
  )
    notFound();
  return <BlogIndex page={number} />;
}
