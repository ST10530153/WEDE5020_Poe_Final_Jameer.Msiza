/* Nexus Tech — shared helpers + live date (Part 3) */
(function () {
  "use strict";

  // Mark current page in navigation
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach(function (link) {
    if (link.getAttribute("href") === path) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Live date in footer (dynamic content example)
  var dateEl = document.querySelector("[data-live-date]");
  if (dateEl) {
    var now = new Date();
    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    dateEl.textContent = now.toLocaleDateString("en-ZA", options);
  }
})();
