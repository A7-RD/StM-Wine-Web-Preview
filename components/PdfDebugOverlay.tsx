"use client";

/**
 * PDF-vs-web debug overlay.
 *
 * Activates when ANY of:
 *   - URL has ?pdfOverlay=1
 *   - localStorage.stmPdfOverlayEnabled === "1" (persists ?pdfOverlay=1 across reloads)
 *   - User presses Cmd+G once on the page
 *
 * 1:1 port of the original imperative debug-overlay.js: we inject a <div.pdf-debug-overlay>
 * into each .page[data-pdf-page] and drive visibility via a root class toggle. This keeps
 * the DOM layout identical to the vanilla build so the overlay lines up with the spreads.
 */

import { useCallback, useEffect, useRef, useState } from "react";

const LS_VISIBLE = "stmPdfOverlayVisible";
const LS_OPACITY = "stmPdfOverlayOpacity";
const LS_BLEND = "stmPdfOverlayBlend";
const LS_ENABLED = "stmPdfOverlayEnabled";

type OverlayBlendMode = "normal" | "multiply";

function parseBlend(raw: string | null): OverlayBlendMode {
  return raw === "multiply" ? "multiply" : "normal";
}

function pad2(n: number) {
  return n < 10 ? `0${n}` : String(n);
}

function isEditableTarget(el: EventTarget | null) {
  const node = el as HTMLElement | null;
  return !!(node && node.closest && node.closest("input, textarea, select, [contenteditable='true']"));
}

export function PdfDebugOverlay() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(true);
  const [opacityPct, setOpacityPct] = useState(55);
  const [blendMode, setBlendMode] = useState<OverlayBlendMode>("normal");
  const injectedRef = useRef(false);
  const activeRef = useRef(false);
  activeRef.current = active;

  useEffect(() => {
    if (typeof window === "undefined") return;

    let enabled = false;
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("pdfOverlay") === "1") {
        enabled = true;
        localStorage.setItem(LS_ENABLED, "1");
      } else if (localStorage.getItem(LS_ENABLED) === "1") {
        enabled = true;
      }
    } catch {
      // localStorage unavailable — fall back to checking the URL only
    }

    if (enabled) setActive(true);

    function onKey(e: KeyboardEvent) {
      if (!e.metaKey || String(e.key).toLowerCase() !== "g") return;
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
      if (!activeRef.current) {
        try {
          localStorage.setItem(LS_ENABLED, "1");
        } catch {
          // ignore
        }
        setActive(true);
        return;
      }
      setVisible((v) => {
        const next = !v;
        try {
          localStorage.setItem(LS_VISIBLE, next ? "1" : "0");
        } catch {
          // ignore
        }
        return next;
      });
    }

    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, []);

  useEffect(() => {
    if (!active) return;

    let storedVisible: boolean | null = null;
    let storedOpacity: number | null = null;
    let storedBlend: OverlayBlendMode | null = null;
    try {
      const v = localStorage.getItem(LS_VISIBLE);
      if (v === "1") storedVisible = true;
      else if (v === "0") storedVisible = false;
      const o = localStorage.getItem(LS_OPACITY);
      if (o !== null) {
        const parsed = parseInt(o, 10);
        if (!Number.isNaN(parsed)) storedOpacity = Math.max(0, Math.min(100, parsed));
      }
      storedBlend = parseBlend(localStorage.getItem(LS_BLEND));
    } catch {
      // ignore
    }

    if (storedVisible !== null) setVisible(storedVisible);
    if (storedOpacity !== null) setOpacityPct(storedOpacity);
    if (storedBlend !== null) setBlendMode(storedBlend);

    if (injectedRef.current) return;
    injectedRef.current = true;

    const pages = document.querySelectorAll<HTMLElement>(".page[data-pdf-page]");
    pages.forEach((page) => {
      const raw = page.getAttribute("data-pdf-page");
      const num = parseInt(raw ?? "", 10);
      if (Number.isNaN(num)) return;

      const wrap = document.createElement("div");
      wrap.className = "pdf-debug-overlay";
      wrap.setAttribute("aria-hidden", "true");

      const img = document.createElement("img");
      img.className = "pdf-debug-overlay__img";
      img.alt = "";
      img.src = `/assets/pdf-raster/page-${pad2(num)}.png`;
      img.addEventListener("error", function onImgErr() {
        img.removeEventListener("error", onImgErr);
        if (wrap.querySelector(".pdf-debug-overlay__missing")) return;
        img.style.display = "none";
        const miss = document.createElement("div");
        miss.className = "pdf-debug-overlay__missing";
        miss.textContent = `Missing /assets/pdf-raster/page-${pad2(num)}.png — run scripts/export-pdf-raster.sh`;
        wrap.appendChild(miss);
      });

      wrap.appendChild(img);
      page.insertBefore(wrap, page.firstChild);
    });
  }, [active]);

  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.toggle("pdf-debug-overlay-on", visible);
    document.documentElement.style.setProperty(
      "--stm-pdf-overlay-opacity",
      (opacityPct / 100).toFixed(2),
    );
    document.documentElement.style.setProperty("--stm-pdf-overlay-mix-blend", blendMode);
    return () => {
      // leave class in place; we only clean up if the overlay is disabled entirely
    };
  }, [active, visible, opacityPct, blendMode]);

  const togglePanel = useCallback(() => {
    setVisible((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(LS_VISIBLE, next ? "1" : "0");
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const onOpacityInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value, 10);
    const next = Number.isNaN(v) ? 0 : Math.max(0, Math.min(100, v));
    setOpacityPct(next);
    try {
      localStorage.setItem(LS_OPACITY, String(next));
    } catch {
      // ignore
    }
  }, []);

  const onBlendChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = parseBlend(e.target.value);
    setBlendMode(next);
    try {
      localStorage.setItem(LS_BLEND, next);
    } catch {
      // ignore
    }
  }, []);

  if (!active) return null;

  return (
    <div className="pdf-debug-panel" role="toolbar" aria-label="PDF overlay">
      <button
        type="button"
        className="zoom-toggle pdf-debug-panel__toggle"
        id="stm-pdf-overlay-toggle"
        aria-pressed={visible}
        aria-label="Toggle PDF comparison overlay"
        title="Toggle PDF overlay (⌘G)"
        onClick={togglePanel}
      >
        <span className="zoom-toggle__label">debug overlay</span>
        <span className="zoom-toggle__value" id="stm-pdf-overlay-toggle-value">
          {visible ? "On" : "Off"}
        </span>
      </button>
      {visible ? (
        <>
          <div className="zoom-toggle pdf-debug-panel__opacity" role="group" aria-label="PDF overlay opacity">
            <span className="zoom-toggle__label">Opacity</span>
            <input
              type="range"
              id="stm-pdf-debug-opacity"
              className="pdf-debug-panel__slider"
              min={0}
              max={100}
              step={1}
              value={opacityPct}
              onChange={onOpacityInput}
            />
          </div>
          <div className="zoom-toggle pdf-debug-panel__blend" role="group" aria-label="PDF overlay blend mode">
            <label htmlFor="stm-pdf-debug-blend" className="zoom-toggle__label">
              Blend
            </label>
            <select
              id="stm-pdf-debug-blend"
              className="pdf-debug-panel__select"
              value={blendMode}
              onChange={onBlendChange}
            >
              <option value="normal">Normal</option>
              <option value="multiply">Multiply</option>
            </select>
          </div>
        </>
      ) : null}
    </div>
  );
}
