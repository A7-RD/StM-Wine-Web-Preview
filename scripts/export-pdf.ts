/**
 * Headless PDF export for the St. Martin's Wine List (CLI entry point).
 *
 * Usage:
 *   1. Start the Next server:  npm run dev   (or npm run build && npm run start)
 *   2. Export the PDF:         npm run export-pdf
 *
 * Environment overrides:
 *   PRINT_URL   — defaults to http://localhost:3000/print
 *   PRINT_OUT   — defaults to ./StM-Winelist.pdf
 *
 * The actual rendering logic lives in lib/export-pdf.ts so it can be shared
 * with the in-app /api/export-pdf Route Handler.
 */

import { writeFile } from "node:fs/promises";
import { PDF_FILENAME, renderPdf } from "../lib/export-pdf";

async function main() {
  const url = process.env.PRINT_URL ?? "http://localhost:3000/print";
  const out = process.env.PRINT_OUT ?? PDF_FILENAME;

  console.log(`[export-pdf] Navigating to ${url}`);
  const bytes = await renderPdf(url);
  await writeFile(out, bytes);
  console.log(`[export-pdf] Wrote ${out}`);
}

main().catch((err) => {
  console.error("[export-pdf] failed:", err);
  process.exit(1);
});
