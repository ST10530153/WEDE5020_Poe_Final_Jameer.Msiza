/* Accordion for FAQs (Part 3) */
(function () {
  "use strict";

  document.querySelectorAll(".accordion-item").forEach(function (item) {
    var btn = item.querySelector(".accordion-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var open = item.classList.contains("open");
      document.querySelectorAll(".accordion-item").forEach(function (i) { i.classList.remove("open"); });
      if (!open) item.classList.add("open");
    });
  });
})();
