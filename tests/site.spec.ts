import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { articles, devices } from "../src/lib/content";
import { brands } from "../src/lib/brands";
import { publishedRegions } from "../src/content/regions";
import {
  customerExperiences,
  publishableExperiences,
} from "../src/content/customer-experiences";
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
test("İlçe kartları ve detay CTA’ları tam, mesajları doğru ve hizaları tutarlı", async ({
  page,
}) => {
  for (const width of [1440, 375]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/hizmet-bolgeleri/");
    const cards = page.locator(".region-grid > section");
    await expect(cards).toHaveCount(3);
    for (const region of publishedRegions) {
      const card = page.locator(`.region-grid #${region.slug}`);
      await expect(card.locator("h2")).toHaveText(region.name);
      await expect(card.locator('a[data-contact="phone"]')).toHaveText(
        "0532 593 92 23",
      );
      await expect(card.locator('a[data-contact="phone"]')).toHaveAttribute(
        "href",
        "tel:+905325939223",
      );
      const whatsapp = card.getByRole("link", {
        name: "WhatsApp'tan Yazın",
        exact: true,
      });
      await expect(whatsapp).toBeVisible();
      const message = new URL(
        (await whatsapp.getAttribute("href"))!,
      ).searchParams.get("text");
      const expected = {
        gebze:
          "Merhaba, Gebze'de beyaz eşya tamiri için servis talebi oluşturmak istiyorum.",
        darica:
          "Merhaba, Darıca'da beyaz eşya tamiri için servis talebi oluşturmak istiyorum.",
        cayirova:
          "Merhaba, Çayırova'da beyaz eşya tamiri için servis talebi oluşturmak istiyorum.",
      };
      expect(message).toBe(expected[region.slug]);
      await expect(
        card.getByRole("link", { name: "Servis kapsamını inceleyin →" }),
      ).toHaveAttribute("href", `/hizmet-bolgeleri/${region.slug}/`);
    }
    const boxes = await cards.evaluateAll((els) =>
      els.map((el) => {
        const box = el.getBoundingClientRect();
        const actions = el
          .querySelector(".card-actions")!
          .getBoundingClientRect();
        const buttons = [...el.querySelectorAll(".button")].map(
          (b) => b.getBoundingClientRect().width,
        );
        return {
          height: box.height,
          left: box.left,
          bottom: box.bottom,
          top: box.top,
          actions: actions.top,
          buttons,
          innerWidth: actions.width,
        };
      }),
    );
    expect(new Set(boxes.map((b) => Math.round(b.height))).size).toBe(1);
    if (width === 1440) {
      expect(new Set(boxes.map((b) => b.actions)).size).toBe(1);
    } else {
      expect(new Set(boxes.map((b) => b.left)).size).toBe(1);
      expect(boxes[1].top).toBeGreaterThan(boxes[0].bottom);
      for (const box of boxes)
        for (const buttonWidth of box.buttons)
          expect(Math.abs(buttonWidth - box.innerWidth)).toBeLessThan(1);
    }
    await page.screenshot({
      path: `test-results/regions-${width}.png`,
      fullPage: true,
    });
    for (const region of publishedRegions) {
      await page.goto(`/hizmet-bolgeleri/${region.slug}/`);
      await expect(page.locator("h1")).toHaveText(region.heading);
      const links = await page
        .locator(
          'main a[data-contact="whatsapp"], .mobile-contact a[data-contact="whatsapp"]',
        )
        .evaluateAll((els) => els.map((el) => el.getAttribute("href")!));
      expect(links.length).toBeGreaterThanOrEqual(2);
      for (const link of links)
        expect(new URL(link).searchParams.get("text")).toBe(
          `Merhaba, ${region.contactContext} için servis talebi oluşturmak istiyorum.`,
        );
    }
  }
});

test("Tüm marka kartları detay bağlantısı ve markaya özel WhatsApp içerir", async ({
  page,
}) => {
  for (const width of [1440, 375]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/markalar/");
    await expect(page.locator(".brand-list > div")).toHaveCount(brands.length);
    for (const brand of brands) {
      const card = page.locator(".brand-list > div").filter({
        has: page.getByRole("heading", { name: brand.name, exact: true }),
      });
      const link = card.getByRole("link", {
        name: `${brand.name} İçin Yazın`,
        exact: true,
      });
      await expect(link).toBeVisible();
      expect(
        new URL((await link.getAttribute("href"))!).searchParams.get("text"),
      ).toBe(
        `Merhaba, ${brand.name} beyaz eşyam için teknik servis hizmeti almak istiyorum.`,
      );
      await expect(
        card.getByRole("link", { name: `${brand.name} özel servis kapsamı →` }),
      ).toHaveAttribute("href", `/markalar/${brand.slug}/`);
    }
    await page.screenshot({
      path: `test-results/brands-${width}.png`,
      fullPage: true,
    });
  }
});

test("Yayın onayı ve cihaz bilgisi olmayan müşteri kayıtları gizlidir", async ({
  request,
}) => {
  expect(customerExperiences).toHaveLength(10);
  const published = publishableExperiences(customerExperiences);
  expect(published).toHaveLength(5);
  const fixture = {
    ...customerExperiences[0],
    publicationApproved: true,
    approvalDate: "2026-11-17",
  };
  expect(publishableExperiences([fixture])).toHaveLength(1);
  expect(
    publishableExperiences([{ ...fixture, publicationApproved: false }]),
  ).toEqual([]);
  expect(publishableExperiences([{ ...fixture, appliance: "" }])).toEqual([]);
  expect(publishableExperiences([{ ...fixture, approvalDate: null }])).toEqual(
    [],
  );
  const html = await (await request.get("/")).text();
  for (const entry of customerExperiences.filter((e) => e.name)) {
    if (published.some((p) => p.id === entry.id))
      expect(html).toContain(entry.name);
    else expect(html).not.toContain(entry.name);
  }
  expect(html).not.toContain("aggregateRating");
  expect(html).not.toContain('"approvalDate"');
});

test("Onaylı beş deneyim Şeffaf İletişim slider’ında kaydırma ve klavyeyle gezilir", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 768, 375]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const panel = page.locator(".questions-section .customer-panel");
    const cards = panel.locator(".experience-card");
    const track = panel.locator(".experience-track");
    const counter = panel.locator(".experience-count");
    const previous = panel.getByRole("button", {
      name: "Önceki müşteri deneyimi",
    });
    const next = panel.getByRole("button", {
      name: "Sonraki müşteri deneyimi",
    });
    await expect(panel.locator(".eyebrow")).toHaveText("ŞEFFAF İLETİŞİM");
    await expect(cards).toHaveCount(5);
    const sliderAccessibility = await new AxeBuilder({ page })
      .include(".experience-slider")
      .analyze();
    expect(sliderAccessibility.violations).toEqual([]);
    await expect(cards.locator("img, svg, blockquote")).toHaveCount(0);
    for (const [index, entry] of publishableExperiences(
      customerExperiences,
    ).entries()) {
      await expect(cards.nth(index).locator("h3")).toHaveText(entry.name);
      await expect(
        cards.nth(index).locator(".experience-person span"),
      ).toHaveText(entry.appliance);
    }
    await panel.scrollIntoViewIfNeeded();
    await expect(counter).toHaveText("1 / 5");
    await expect(previous).toBeDisabled();
    await panel.screenshot({ path: `reports/experiences-${width}.png` });
    await next.click();
    await expect(counter).toHaveText("2 / 5");
    await previous.click();
    await expect(counter).toHaveText("1 / 5");
    await track.focus();
    await page.keyboard.press("End");
    await expect(counter).toHaveText("5 / 5");
    await expect(next).toBeDisabled();
    await panel.screenshot({ path: `reports/experiences-last-${width}.png` });
    await page.keyboard.press("ArrowLeft");
    await expect(counter).toHaveText("4 / 5");
    await page.keyboard.press("Home");
    await expect(counter).toHaveText("1 / 5");
    // Native scrolling (also used by a touch swipe) must update the controls.
    await track.evaluate((el) =>
      el.scrollTo({ left: el.clientWidth + 16, behavior: "instant" }),
    );
    await expect(counter).toHaveText("2 / 5");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator(".experience-count")).toHaveText("2 / 5");
  await page.locator(".experience-track").focus();
  await page.keyboard.press("End");
  await expect(page.locator(".experience-count")).toHaveText("5 / 5");
});

test("Google harita bağlantıları hafif; yeni logo ve uygulama ikonları sunulur", async ({
  page,
  request,
}) => {
  const googleRequests: string[] = [];
  page.on("request", (req) => {
    if (/google\.(com|net)/.test(req.url())) googleRequests.push(req.url());
  });
  for (const width of [1440, 375]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator(".service-map iframe")).toHaveCount(0);
    for (const name of ["Gebze", "Darıca", "Çayırova"]) {
      const link = page
        .locator(".map-links")
        .getByRole("link", { name: `${name} ↗` });
      const url = new URL((await link.getAttribute("href"))!);
      expect(url.hostname).toBe("www.google.com");
      expect(url.searchParams.get("api")).toBe("1");
      expect(url.searchParams.get("query")).toBe(`${name}, Kocaeli`);
    }
    const mapButton = page.getByRole("button", {
      name: "Google haritasını göster",
    });
    if (await mapButton.count()) {
      await page.route("https://www.google.com/maps/embed/**", (route) =>
        route.fulfill({
          contentType: "text/html",
          body: "<p>Map test fixture</p>",
        }),
      );
      await mapButton.click();
      await expect(page.locator(".service-map iframe")).toHaveAttribute(
        "src",
        /\/maps\/embed\/v1\/view/,
      );
      await page.unroute("https://www.google.com/maps/embed/**");
    } else {
      await expect(
        page.getByRole("link", { name: "Google Maps’te aç" }),
      ).toHaveAttribute("href", /map_action=map/);
      expect(googleRequests).toEqual([]);
    }
    await expect(page.locator(".header .logo strong")).toHaveText(
      "Beyaz Eşya Servisi",
    );
    await expect(page.locator(".header .logo-symbol svg")).toHaveAttribute(
      "viewBox",
      "0 0 64 64",
    );
  }
  const manifest = await (await request.get("/manifest.webmanifest")).json();
  expect(manifest.name).toBe("Beyaz Eşya Servisi");
  for (const icon of manifest.icons)
    expect((await request.get(icon.src)).status()).toBe(200);
  expect((await request.get("/icon.svg")).status()).toBe(200);
  expect((await request.get("/favicon.ico")).status()).toBe(200);
  expect((await request.get("/icons/app-180.png")).status()).toBe(200);
  await page.goto("/iletisim/");
  await expect(page.locator("main")).not.toContainText(
    "tek başına kesinleşmiş randevu",
  );
  await expect(page.locator(".contact-aside .notice")).toHaveCount(0);
});
const representatives = [
  "/",
  "/markalar/arcelik/",
  "/buzdolabi-tamiri/",
  "/blog/",
  "/blog/buzdolabi-motor-arizasi/",
  "/iletisim/",
  "/hizmet-bolgeleri/darica/",
  "/hizmet-bolgeleri/",
  "/hizmet-bolgeleri/cayirova/",
  "/markalar/",
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
        /^Merhaba, .+(servis talebi oluşturmak|teknik servis hizmeti almak) istiyorum\.$/,
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
      `Merhaba, ${brand.name} beyaz eşyam için teknik servis hizmeti almak istiyorum.`,
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
