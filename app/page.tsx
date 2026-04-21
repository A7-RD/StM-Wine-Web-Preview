import { Spreads } from "@/components/Spreads";
import { ZoomToggle } from "@/components/ZoomToggle";
import { PdfDebugOverlay } from "@/components/PdfDebugOverlay";

export default function HomePage() {
  return (
    <>
      <ZoomToggle />
      <main className="preview">
        <Spreads />
      </main>
      <PdfDebugOverlay />
    </>
  );
}
