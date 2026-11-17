import { notFound } from "next/navigation";
import { BlogIndex, blogCategories } from "@/components/blog-index";
import { metadata as makeMetadata } from "@/lib/seo";
export const dynamicParams = false;
export const generateStaticParams = () =>
  blogCategories.map((c) => ({ category: c.slug }));
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const entry = blogCategories.find((c) => c.slug === category);
  return entry
    ? makeMetadata(
        `${entry.name} Arıza ve Bakım Rehberleri`,
        `${entry.name} belirtileri, güvenli kontroller ve teknik destek gerektiren durumlar. İlgili arıza yazılarını ve servis bağlantılarını inceleyin.`,
        `/blog/kategori/${category}/`,
      )
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const entry = blogCategories.find((c) => c.slug === category);
  if (!entry) notFound();
  return <BlogIndex category={entry} />;
}
