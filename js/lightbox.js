/* Lightbox for product images (Part 3) */
(function () {
  "use strict";

  var overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(overlay);

  var img = overlay.querySelector("img");
  var closeBtn = overlay.querySelector(".lightbox-close");

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "Enlarged product image";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    img.src = "";
  }

  function bind() {
    document.querySelectorAll(".lightbox-trigger").forEach(function (el) {
      el.addEventListener("click", function () {
        open(el.getAttribute("data-full") || el.src, el.alt);
      });
    });
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  window.initLightbox = bind;
  bind();
})();
