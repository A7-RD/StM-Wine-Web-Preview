"use client";

import { useCallback, useState } from "react";

type Status = "idle" | "exporting" | "error";

const LABEL: Record<Status, string> = {
  idle: "Export PDF",
  exporting: "Exporting…",
  error: "Export failed — retry",
};

export function ExportPdfButton() {
  const [status, setStatus] = useState<Status>("idle");

  const handleExport = useCallback(async () => {
    setStatus("exporting");
    try {
      const res = await fetch("/api/export-pdf", { method: "POST" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const blob = await res.blob();
      const filename = parseFilename(res.headers.get("content-disposition")) ?? "StM-Winelist.pdf";

      triggerDownload(blob, filename);
      setStatus("idle");
    } catch (err) {
      console.error("[ExportPdfButton] export failed:", err);
      setStatus("error");
      // Return to idle after a beat so the button is usable again.
      setTimeout(() => setStatus("idle"), 4000);
    }
  }, []);

  const isBusy = status === "exporting";

  return (
    <button
      type="button"
      className="export-pdf"
      onClick={handleExport}
      disabled={isBusy}
      aria-busy={isBusy}
      data-status={status}
      title="Download the wine list as a PDF"
    >
      <span className="export-pdf__icon" aria-hidden="true">
        {isBusy ? "⋯" : "↓"}
      </span>
      <span className="export-pdf__label">{LABEL[status]}</span>
    </button>
  );
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Give the browser a tick to start the download before revoking.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function parseFilename(contentDisposition: string | null): string | null {
  if (!contentDisposition) return null;
  const match = /filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(contentDisposition);
  return match?.[1] ?? null;
}
