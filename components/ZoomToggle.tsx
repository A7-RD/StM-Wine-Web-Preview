"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

const LS_KEY = "stmZoomMode";

function subscribe(callback: () => void) {
  const obs = new MutationObserver(callback);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-zoom"] });
  return () => obs.disconnect();
}

function getClientSnapshot() {
  return document.documentElement.getAttribute("data-zoom") === "actual";
}

function getServerSnapshot() {
  // On the server we always render "Fit" — the beforeInteractive zoom-restore
  // script runs before hydration, so the client snapshot takes over immediately.
  return false;
}

function setZoomMode(next: boolean) {
  if (next) {
    document.documentElement.setAttribute("data-zoom", "actual");
  } else {
    document.documentElement.removeAttribute("data-zoom");
  }
  try {
    localStorage.setItem(LS_KEY, next ? "actual" : "fit");
  } catch {
    // ignore storage failures (private mode, quota)
  }
}

export function ZoomToggle() {
  const isActual = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    setZoomMode(!getClientSnapshot());
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!e.shiftKey || e.metaKey || e.ctrlKey || e.altKey) return;
      if (String(e.key).toLowerCase() !== "z") return;
      const t = e.target as HTMLElement | null;
      if (t && t.closest && t.closest("input, textarea, select, [contenteditable='true']")) return;
      e.preventDefault();
      toggle();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <button
      type="button"
      className="zoom-toggle"
      id="zoom-toggle"
      aria-label="Toggle zoom between fit-to-viewport and actual size"
      aria-pressed={isActual}
      title="Toggle zoom (Shift+Z)"
      onClick={toggle}
    >
      <span className="zoom-toggle__label">Zoom:</span>
      <span className="zoom-toggle__value" suppressHydrationWarning>
        {isActual ? "Actual" : "Fit"}
      </span>
    </button>
  );
}
