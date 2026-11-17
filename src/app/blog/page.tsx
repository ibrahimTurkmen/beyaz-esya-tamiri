import { BlogIndex } from "@/components/blog-index";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "Beyaz Eşya Arıza ve Bakım Rehberleri | Blog",
  "Buzdolabı motoru ve fanı, çamaşır makinesi su tahliyesi ve kapak kilidi, bulaşık makinesi ısıtma sorunları: güvenli kontroller ve servis rehberleri.",
  "/blog/",
);
export default function BlogPage() {
  return <BlogIndex />;
}
