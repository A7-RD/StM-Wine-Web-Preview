import { Spreads } from "@/components/Spreads";

export const metadata = {
  title: "StM Wine List — Print",
};

/**
 * Chrome-free route used by:
 *   - Puppeteer (`npm run export-pdf`)
 *   - Anyone who opens /print and does Cmd+P
 *
 * The @media print rules in globals.css pin --page-w to 7in and hide the zoom
 * toggle / debug overlay, so the resulting PDF is a pixel-clean
 * reproduction of the InDesign layout.
 */
export default function PrintPage() {
  return (
    <main className="preview print-root">
      <Spreads />
    </main>
  );
}
