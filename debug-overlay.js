(function () {
  if (window.__stmPdfOverlayInit) return;
  window.__stmPdfOverlayInit = true;

  var LS_VISIBLE = "stmPdfOverlayVisible";
  var LS_OPACITY = "stmPdfOverlayOpacity";

  function pad2(n) {
    var x = Number(n);
    return x < 10 ? "0" + x : String(n);
  }

  function isEditableTarget(el) {
    return !!(el && el.closest && el.closest("input, textarea, select, [contenteditable='true']"));
  }

  function init() {
    var pages = document.querySelectorAll(".page[data-pdf-page]");
    pages.forEach(function (page) {
      var raw = page.getAttribute("data-pdf-page");
      var num = parseInt(raw, 10);
      if (Number.isNaN(num)) return;

      var wrap = document.createElement("div");
      wrap.className = "pdf-debug-overlay";
      wrap.setAttribute("aria-hidden", "true");

      var img = document.createElement("img");
      img.className = "pdf-debug-overlay__img";
      img.alt = "";
      img.src = "assets/pdf-raster/page-" + pad2(num) + ".png";
      img.addEventListener("error", function onImgErr() {
        img.removeEventListener("error", onImgErr);
        if (wrap.querySelector(".pdf-debug-overlay__missing")) return;
        img.style.display = "none";
        var miss = document.createElement("div");
        miss.className = "pdf-debug-overlay__missing";
        miss.textContent =
          "Missing assets/pdf-raster/page-" +
          pad2(num) +
          ".png — run scripts/export-pdf-raster.sh";
        wrap.appendChild(miss);
      });

      wrap.appendChild(img);
      page.insertBefore(wrap, page.firstChild);
    });

    var panel = document.createElement("div");
    panel.className = "pdf-debug-panel";
    panel.setAttribute("role", "toolbar");
    panel.setAttribute("aria-label", "PDF overlay");

    var toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "zoom-toggle pdf-debug-panel__toggle";
    toggleBtn.id = "stm-pdf-overlay-toggle";
    toggleBtn.setAttribute("aria-pressed", "true");
    toggleBtn.setAttribute("aria-label", "Toggle PDF comparison overlay");
    toggleBtn.title = "Toggle PDF overlay (⌘G)";

    var toggleLbl = document.createElement("span");
    toggleLbl.className = "zoom-toggle__label";
    toggleLbl.textContent = "PDF:";
    var toggleVal = document.createElement("span");
    toggleVal.className = "zoom-toggle__value";
    toggleVal.id = "stm-pdf-overlay-toggle-value";
    toggleBtn.appendChild(toggleLbl);
    toggleBtn.appendChild(toggleVal);

    var opacityChip = document.createElement("div");
    opacityChip.className = "zoom-toggle pdf-debug-panel__opacity";
    opacityChip.setAttribute("role", "group");
    opacityChip.setAttribute("aria-label", "PDF overlay opacity");

    var opLbl = document.createElement("span");
    opLbl.className = "zoom-toggle__label";
    opLbl.textContent = "Opacity";

    var rng = document.createElement("input");
    rng.type = "range";
    rng.id = "stm-pdf-debug-opacity";
    rng.className = "pdf-debug-panel__slider";
    rng.min = "0";
    rng.max = "100";
    rng.step = "1";

    opacityChip.appendChild(opLbl);
    opacityChip.appendChild(rng);
    panel.appendChild(toggleBtn);
    panel.appendChild(opacityChip);
    document.body.appendChild(panel);

    var params = new URLSearchParams(location.search);
    var urlOn = params.get("pdfOverlay") === "1";
    if (urlOn) {
      try {
        localStorage.setItem("stmPdfOverlayEnabled", "1");
      } catch (e) {}
    }

    var visible;
    if (urlOn) visible = true;
    else if (localStorage.getItem(LS_VISIBLE) === "0") visible = false;
    else if (localStorage.getItem(LS_VISIBLE) === "1") visible = true;
    else visible = true;

    var opacityPct = parseInt(localStorage.getItem(LS_OPACITY) || "55", 10);
    if (Number.isNaN(opacityPct)) opacityPct = 55;
    opacityPct = Math.max(0, Math.min(100, opacityPct));

    function applyOpacity() {
      var v = (opacityPct / 100).toFixed(2);
      document.documentElement.style.setProperty("--stm-pdf-overlay-opacity", v);
    }

    function sync() {
      document.documentElement.classList.toggle("pdf-debug-overlay-on", visible);
      toggleBtn.setAttribute("aria-pressed", visible ? "true" : "false");
      toggleVal.textContent = visible ? "On" : "Off";
      rng.value = String(opacityPct);
      applyOpacity();
    }

    toggleBtn.addEventListener("click", function () {
      visible = !visible;
      try {
        localStorage.setItem(LS_VISIBLE, visible ? "1" : "0");
      } catch (e) {}
      sync();
    });

    rng.addEventListener("input", function () {
      opacityPct = parseInt(rng.value, 10) || 0;
      try {
        localStorage.setItem(LS_OPACITY, String(opacityPct));
      } catch (e) {}
      applyOpacity();
    });

    document.addEventListener(
      "keydown",
      function (e) {
        if (!e.metaKey || String(e.key).toLowerCase() !== "g") return;
        if (isEditableTarget(e.target)) return;
        e.preventDefault();
        visible = !visible;
        try {
          localStorage.setItem(LS_VISIBLE, visible ? "1" : "0");
        } catch (err) {}
        sync();
      },
      true
    );

    sync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
