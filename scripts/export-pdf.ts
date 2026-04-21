/**
 * Headless PDF export for the St. Martin's Wine List.
 *
 * Usage:
 *   1. Start the Next server:  npm run dev   (or npm run build && npm run start)
 *   2. Export the PDF:         npm run export-pdf
 *
 * Environment overrides:
 *   PRINT_URL   — defaults to http://localhost:3000/print
 *   PRINT_OUT   — defaults to ./StM-Winelist.pdf
 */

import puppeteer from "puppeteer";

async function main() {
  const url = process.env.PRINT_URL ?? "http://localhost:3000/print";
  const out = process.env.PRINT_OUT ?? "StM-Winelist.pdf";

  console.log(`[export-pdf] Navigating to ${url}`);
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    // Wait for custom @font-face files (Galipos, Xanh Mono) to finish loading
    // before we capture — otherwise Chromium may snapshot system-fallback glyphs.
    await page.evaluateHandle("document.fonts.ready");
    await page.pdf({
      path: out,
      width: "7in",
      height: "8.5in",
      printBackground: true,
      preferCSSPageSize: true,
    });
    console.log(`[export-pdf] Wrote ${out}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("[export-pdf] failed:", err);
  process.exit(1);
});
