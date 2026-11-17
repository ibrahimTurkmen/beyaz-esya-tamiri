import sharp from "sharp";
await sharp("public/images/hero-source.png")
  .resize(1536, 1024)
  .webp({ quality: 84 })
  .toFile("public/images/hero.webp");
console.log("Hero WebP hazır.");
