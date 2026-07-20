(function () {
  "use strict";

  var LIGHT_BG = "#ffffff";
  var DARK_BG = "#14161a";

  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) {
    return;
  }

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) {
      return explicit;
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", theme === "dark" ? DARK_BG : LIGHT_BG);
  }

  btn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    setThemeColor(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* localStorage unavailable (private browsing etc.) — theme just won't persist */
    }
  });
})();
