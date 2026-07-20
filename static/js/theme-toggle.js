(function () {
  "use strict";

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

  btn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* localStorage unavailable (private browsing etc.) — theme just won't persist */
    }
  });
})();
