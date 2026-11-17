import { chromium } from "@playwright/test";
import lighthouse from "lighthouse";
import { mkdir, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "-p", "3001"],
  { stdio: "ignore", windowsHide: true },
);
let browser;
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch("http://localhost:3001")).ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  if (!ready) throw new Error("Audit server did not start.");
  browser = await chromium.launch({
    channel: "msedge",
    headless: true,
    args: ["--remote-debugging-port=9222"],
  });
  const result = await lighthouse("http://localhost:3001/", {
    port: 9222,
    output: ["html", "json"],
    logLevel: "error",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  await mkdir("reports", { recursive: true });
  await writeFile("reports/lighthouse-mobile.html", result.report[0]);
  await writeFile("reports/lighthouse-mobile.json", result.report[1]);
  console.log(
    JSON.stringify(
      {
        scores: Object.fromEntries(
          Object.entries(result.lhr.categories).map(([k, v]) => [
            k,
            v.score * 100,
          ]),
        ),
        metrics: Object.fromEntries(
          [
            "largest-contentful-paint",
            "cumulative-layout-shift",
            "total-blocking-time",
          ].map((k) => [k, result.lhr.audits[k].displayValue]),
        ),
        failures: Object.values(result.lhr.audits)
          .filter(
            (a) =>
              a.score !== null &&
              a.score < 1 &&
              a.scoreDisplayMode === "binary",
          )
          .map((a) => ({ id: a.id, title: a.title })),
      },
      null,
      2,
    ),
  );
} finally {
  if (browser) await browser.close();
  server.kill();
}
