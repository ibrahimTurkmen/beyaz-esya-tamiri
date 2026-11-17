import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { articles, devices } from "../src/lib/content";
import { brands } from "../src/lib/brands";
import { publishedRegions } from "../src/content/regions";
const routes = [
  "/",
  "/markalar/",
  ...brands.map((b) => `/markalar/${b.slug}/`),
  ...devices.map((d) => `/${d.slug}/`),
  "/hizmet-bolgeleri/",
  ...publishedRegions.map((r) => `/hizmet-bolgeleri/${r.slug}/`),
  "/blog/",
  "/blog/sayfa/2/",
  ...["buzdolabi", "camasir-makinesi", "bulasik-makinesi"].map(
    (c) => `/blog/kategori/${c}/`,
  ),
  ...articles.map((a) => `/blog/${a.slug}/`),
  "/iletisim/",
  "/gizlilik/",
  "/kvkk/",
];
const representatives = [
  "/",
  "/markalar/arcelik/",
  "/buzdolabi-tamiri/",
  "/blog/",
  "/blog/buzdolabi-motor-arizasi/",
  "/iletisim/",
  "/hizmet-bolgeleri/darica/",
];
for (const width of [1440, 768, 375]) {
  test(`${width}px: yazılar en az 12px, taşma yok ve iletişim erişilebilir`, async ({
    page,
  }) => {
    test.setTimeout(120000);
    await page.setViewportSize({ width, height: 900 });
    for (const path of representatives) {
      await page.goto(path);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("form,input,textarea,select")).toHaveCount(0);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        path,
      ).toBe(true);
      const small = await page.evaluate(() =>
        [...document.querySelectorAll<HTMLElement>("body *")]
          .filter(
            (el) =>
              el.getClientRects().length &&
              getComputedStyle(el).visibility !== "hidden" &&
              [...el.childNodes].some(
                (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.trim(),
              ) &&
              parseFloat(getComputedStyle(el).fontSize) < 12,
          )
          .map((el) => ({
            tag: el.tagName,
            text: el.textContent?.slice(0, 60),
            size: getComputedStyle(el).fontSize,
          })),
      );
      expect(small, path).toEqual([]);
      await expect(
        page.locator('main a[href="tel:+905325939223"]').first(),
      ).toBeVisible();
      await expect(
        page
          .locator('main a[href^="https://wa.me/905325939223?text="]')
          .first(),
      ).toBeVisible();
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(
        result.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
        path,
      ).toEqual([]);
      if (path === "/")
        await page.screenshot({
          path: `test-results/home-${width}.png`,
          fullPage: true,
        });
      if (
        width === 375 &&
        ["/iletisim/", "/markalar/arcelik/", "/blog/"].includes(path)
      )
        await page.screenshot({
          path: `test-results/${path.split("/").filter(Boolean).join("-")}-${width}.png`,
          fullPage: true,
        });
    }
  });
}
test("Header ve mobil menü alt sayfalarda doğru aktif bağlantıyı gösterir", async ({
  page,
}) => {
  const cases = [
    ["/", "Ana Sayfa"],
    ["/markalar/", "Markalar"],
    ["/markalar/bosch/", "Markalar"],
    ["/blog/", "Blog"],
    ["/blog/camasir-makinesi-su-almiyor/", "Blog"],
    ["/iletisim/", "İletişim"],
    ["/buzdolabi-tamiri/", "Hizmetlerimiz"],
    ["/hizmet-bolgeleri/darica/", "Bölgeler"],
  ];
  for (const [path, label] of cases) {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(path);
    const nav = page.getByRole("navigation", {
      name: "Ana navigasyon",
      exact: true,
    });
    await expect(nav.locator('[aria-current="page"]')).toHaveText(label);
    await page.setViewportSize({ width: 375, height: 812 });
    await page.getByLabel("Menüyü aç veya kapat").click();
    await expect(
      page
        .getByRole("navigation", { name: "Mobil navigasyon" })
        .locator('[aria-current="page"]'),
    ).toHaveText(label);
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("navigation", { name: "Mobil navigasyon" }),
    ).not.toBeVisible();
  }
});
test("Mobil navigasyon kapanır; SSS ve gerçek sayfalama çalışır", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByLabel("Menüyü aç veya kapat").click();
  await page
    .getByRole("navigation", { name: "Mobil navigasyon" })
    .getByRole("link", { name: "Blog", exact: true })
    .click();
  await expect(page).toHaveURL(/\/blog\/$/);
  await expect(
    page.getByRole("navigation", { name: "Mobil navigasyon" }),
  ).not.toBeVisible();
  await page
    .getByRole("navigation", { name: "Blog sayfaları" })
    .getByRole("link", { name: "Sonraki →" })
    .click();
  await expect(page).toHaveURL(/\/blog\/sayfa\/2\/$/);
  await expect(page.locator(".blog-card")).toHaveCount(2);
  await page
    .getByRole("navigation", { name: "Rehber kategorileri" })
    .getByRole("link", { name: "Buzdolabı", exact: true })
    .click();
  await expect(page.locator(".blog-card")).toHaveCount(3);
  await page.goto("/");
  await page
    .locator(".faq summary")
    .filter({ hasText: "Servis ücreti nasıl belirlenir?" })
    .click();
  await expect(page.getByText(/Ücret; cihaz türüne/)).toBeVisible();
});
test("Her sayfada özgün metadata, tek H1, canonical, çalışan bağlantılar ve formsuz HTML", async ({
  page,
  request,
}) => {
  test.setTimeout(120000);
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  const hrefs = new Set<string>();
  for (const path of routes) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    expect(html).toContain('<html lang="tr"');
    expect(html.match(/<h1[ >]/g), path).toHaveLength(1);
    expect(html).not.toMatch(/<(form|input|select|textarea)[ >]/);
    expect(html).not.toContain("servis-formu");
    expect(html).not.toContain("aggregateRating");
    await page.goto(path);
    const title = await page.title();
    expect(titles.has(title), path).toBe(false);
    titles.add(title);
    const desc = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(desc?.length).toBeGreaterThan(50);
    expect(descriptions.has(desc!), path).toBe(false);
    descriptions.add(desc!);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://gebzebeyazesyatamiri.com${path}`,
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1);
    if (!["/gizlilik/", "/kvkk/"].includes(path))
      await expect(page.locator('meta[name="robots"]')).not.toHaveAttribute(
        "content",
        /noindex/,
      );
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((elements) =>
        elements.map((el) => el.getAttribute("href")!),
      ))
      hrefs.add(href.split("#")[0]);
    for (const href of await page
      .locator('a[data-contact="phone"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute("href"))))
      expect(href).toBe("tel:+905325939223");
    for (const href of await page
      .locator('a[data-contact="whatsapp"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute("href")!))) {
      const url = new URL(href);
      expect(url.origin + url.pathname).toBe("https://wa.me/905325939223");
      expect(url.searchParams.get("text")).toMatch(
        /^Merhaba, .+servis talebi oluşturmak istiyorum\.$/,
      );
    }
    if (path !== "/") expect(html).toContain('"@type":"BreadcrumbList"');
  }
  for (const href of hrefs)
    expect((await request.get(href)).status(), href).toBe(200);
});
test("Marka WhatsApp mesajı, makale şeması ve kaynak bağlantıları tutarlı", async ({
  page,
}) => {
  for (const brand of brands) {
    await page.goto(`/markalar/${brand.slug}/`);
    const href = await page
      .locator('main a[data-contact="whatsapp"]')
      .first()
      .getAttribute("href");
    expect(new URL(href!).searchParams.get("text")).toBe(
      `Merhaba, ${brand.name} beyaz eşyamın tamiri için servis talebi oluşturmak istiyorum.`,
    );
    await expect(page.locator("main .notice")).toContainText(
      "yetkili servisi değiliz",
    );
  }
  for (const article of articles) {
    await page.goto(`/blog/${article.slug}/`);
    const schemas = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((els) => els.map((el) => JSON.parse(el.textContent!)));
    const schema = schemas.find((s) => s["@type"] === "Article");
    expect(schema.headline).toBe(article.title);
    expect(schema.datePublished).toBe("2026-11-17");
    expect(schema.author).toBeUndefined();
    await expect(page.locator(".source-notes a").first()).toHaveAttribute(
      "href",
      /^https:\/\//,
    );
    await expect(
      page.locator(`main a[href="/${devices[article.device].slug}/"]`).first(),
    ).toBeVisible();
  }
});
test("Analitik varsa telefon/WhatsApp ayrı olay üretir; yoksa hata vermez", async ({
  page,
}) => {
  await page.goto("/markalar/arcelik/");
  await page.evaluate(() => {
    const w = window as unknown as {
      events: unknown[];
      gtag: (...args: unknown[]) => void;
    };
    w.events = [];
    w.gtag = (...args) => w.events.push(args);
    document.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).closest("[data-contact]"))
        e.preventDefault();
    });
  });
  await page.locator('main [data-contact="phone"]').first().click();
  await page.locator('main [data-contact="whatsapp"]').first().click();
  const events = await page.evaluate(
    () => (window as unknown as { events: unknown[][] }).events,
  );
  expect(events.map((e) => e[1])).toEqual(["phone_click", "whatsapp_click"]);
  expect(JSON.stringify(events)).toContain("/markalar/arcelik/");
  expect(JSON.stringify(events)).not.toContain("905325939223");
});
test("404, kaldırılmış API, sitemap, robots ve ikinci domain 301", async ({
  request,
}) => {
  for (const path of [
    "/olmayan-sayfa/",
    "/markalar/olmayan/",
    "/blog/sayfa/99/",
    "/api/servis/",
  ])
    expect((await request.get(path)).status(), path).toBe(404);
  expect(
    (await request.post("/api/servis/", { data: {} })).status(),
  ).toBeGreaterThanOrEqual(400);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const path of routes.filter(
    (x) => !["/gizlilik/", "/kvkk/"].includes(x),
  ))
    expect(sitemap).toContain(`https://gebzebeyazesyatamiri.com${path}`);
  for (const host of [
    "daricabeyazesyatamiri.com",
    "www.daricabeyazesyatamiri.com",
  ]) {
    const response = await request.get("/markalar/beko/?kaynak=test", {
      headers: { host },
      maxRedirects: 0,
    });
    expect(response.status()).toBe(301);
    expect(response.headers().location).toBe(
      "https://gebzebeyazesyatamiri.com/markalar/beko/?kaynak=test",
    );
  }
});
