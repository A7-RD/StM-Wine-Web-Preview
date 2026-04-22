/**
 * POST /api/export-pdf
 *
 * Renders the chrome-free /print route with headless Chromium and streams
 * the resulting PDF back to the browser as a file download. This is the
 * backing endpoint for the <ExportPdfButton /> on the home page.
 *
 * The actual rendering lives in lib/export-pdf.ts so the CLI script and this
 * handler share a single Puppeteer implementation.
 */

import { NextResponse } from "next/server";
import { PDF_FILENAME, renderPdf } from "@/lib/export-pdf";

// Puppeteer requires the Node runtime; the default is fine but being explicit
// prevents any future edge-runtime surprises.
export const runtime = "nodejs";
// Headless Chrome launch + fonts.ready + pdf() takes ~3–5s in practice.
// Bump the default 10s ceiling so we don't time out on cold starts.
export const maxDuration = 60;
// Always run this fresh; never cache.
export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
  const host = request.headers.get("host") ?? "localhost:3000";
  const proto = request.headers.get("x-forwarded-proto") ?? "http";
  const printUrl = `${proto}://${host}/print`;

  try {
    const bytes = await renderPdf(printUrl);
    return new NextResponse(new Uint8Array(bytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${PDF_FILENAME}"`,
        "Content-Length": String(bytes.byteLength),
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[/api/export-pdf] render failed:", err);
    return NextResponse.json(
      { error: "PDF export failed. See server logs for details." },
      { status: 500 },
    );
  }
}
