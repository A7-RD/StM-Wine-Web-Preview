import { Spreads } from "@/components/Spreads";
import { ZoomToggle } from "@/components/ZoomToggle";
import { ExportPdfButton } from "@/components/ExportPdfButton";
import { PdfDebugOverlay } from "@/components/PdfDebugOverlay";

export default function HomePage() {
  return (
    <>
      <ZoomToggle />
      <ExportPdfButton />
      <main className="preview">
        <Spreads />
      </main>
      <PdfDebugOverlay />
    </>
  );
}
