import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const source = await readFile(new URL("../src/app/icon.svg", import.meta.url));
await mkdir(new URL("../public/icons/", import.meta.url), { recursive: true });
for (const size of [180, 192, 512]) {
  await sharp(source)
    .resize(size, size)
    .png()
    .toFile(
      fileURLToPath(
        new URL(`../public/icons/app-${size}.png`, import.meta.url),
      ),
    );
}
// A real multi-resolution ICO also serves browsers requesting /favicon.ico.
const sizes = [16, 32, 48];
const frames = await Promise.all(
  sizes.map((size) => sharp(source).resize(size, size).png().toBuffer()),
);
const directory = Buffer.alloc(6 + frames.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(frames.length, 4);
let offset = directory.length;
frames.forEach((frame, index) => {
  const position = 6 + index * 16;
  directory[position] = sizes[index];
  directory[position + 1] = sizes[index];
  directory.writeUInt16LE(1, position + 4);
  directory.writeUInt16LE(32, position + 6);
  directory.writeUInt32LE(frame.length, position + 8);
  directory.writeUInt32LE(offset, position + 12);
  offset += frame.length;
});
await writeFile(
  new URL("../public/favicon.ico", import.meta.url),
  Buffer.concat([directory, ...frames]),
);
