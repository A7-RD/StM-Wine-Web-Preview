/**
 * Shared Puppeteer-based PDF export for the St. Martin's Wine List.
 *
 * Single source of truth used by both entry points:
 *   - scripts/export-pdf.ts  (CLI: `npm run export-pdf`)
 *   - app/api/export-pdf/    (HTTP Route Handler behind the in-app button)
 *
 * The caller is responsible for deciding where the URL points and what to do
 * with the returned PDF bytes. This module only knows how to render /print.
 */

import puppeteer from "puppeteer";

export const PDF_FILENAME = "StM-Winelist.pdf";

export async function renderPdf(url: string): Promise<Uint8Array> {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    // Wait for @font-face files (Galipos, Xanh Mono) before snapshot;
    // otherwise Chromium may capture system-fallback glyphs.
    await page.evaluateHandle("document.fonts.ready");
    return await page.pdf({
      width: "7in",
      height: "8.5in",
      printBackground: true,
      preferCSSPageSize: true,
    });
  } finally {
    await browser.close();
  }
}
