import { readFile, writeFile } from "node:fs/promises";
const pkg = JSON.parse(await readFile("package.json", "utf8"));
const lock = JSON.parse(await readFile("package-lock.json", "utf8"));
for (const group of ["dependencies", "devDependencies"]) {
  for (const key of Object.keys(pkg[group]))
    pkg[group][key] = lock.packages[`node_modules/${key}`].version;
}
pkg.engines = { node: ">=20.19.0" };
pkg.scripts.format =
  "prettier --write src tests scripts *.ts *.mjs *.json *.md";
pkg.scripts.audit = "node scripts/audit.mjs";
await writeFile("package.json", JSON.stringify(pkg, null, 2) + "\n");
