import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beyaz Eşya Servisi",
    short_name: "Beyaz Eşya Servisi",
    description:
      "Gebze, Darıca ve Çayırova beyaz eşya bakım ve onarım hizmetleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#092847",
    icons: [
      { src: "/icons/app-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/app-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
