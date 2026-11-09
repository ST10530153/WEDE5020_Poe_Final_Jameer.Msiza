/* Product catalogue — loaded dynamically, searchable and filterable (Part 3) */
(function () {
  "use strict";

  var products = [
    { name: "Nexus 14 Workbook", price: 16999, category: "laptops", stock: "In stock — Sandton and Midrand", desc: "14-inch work laptop for students and office use.", img: "images/laptop-hero-800.jpg", alt: "Nexus 14 Workbook laptop" },
    { name: "Nexus 16 Creator", price: 24999, category: "laptops", stock: "In stock — Sandton", desc: "Larger display and more RAM for design and media work.", img: "images/laptop-desk-800.jpg", alt: "Nexus 16 Creator laptop on a desk" },
    { name: "Pulse A55 128 GB", price: 7499, category: "phones", stock: "In stock — both stores", desc: "Reliable Android phone with a clear screen and long battery life.", img: "images/smartphone-800.jpg", alt: "Pulse A55 smartphone" },
    { name: "Studio Wireless Headphones", price: 4999, category: "audio", stock: "In stock — Midrand", desc: "Over-ear wireless headphones tuned for calls and music.", img: "images/headphones-800.jpg", alt: "Studio wireless headphones" }
  ];

  var grid = document.getElementById("product-grid");
  var search = document.getElementById("product-search");
  var filterBtns = document.querySelectorAll("[data-filter]");

  if (!grid) return;

  function render(list) {
    grid.innerHTML = "";
    if (!list.length) {
      grid.innerHTML = "<p>No products match that search or filter.</p>";
      return;
    }
    list.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "card";
      card.innerHTML =
        '<img src="' + p.img + '" alt="' + p.alt + '" class="lightbox-trigger" data-full="' + p.img.replace("-800", "") + '">' +
        '<div class="body">' +
          "<h3>" + p.name + "</h3>" +
          '<p class="price">R ' + p.price.toLocaleString("en-ZA") + "</p>" +
          '<p class="stock">' + p.stock + "</p>" +
          "<p>" + p.desc + "</p>" +
        "</div>";
      grid.appendChild(card);
    });
    // Re-bind lightbox after render
    if (window.initLightbox) window.initLightbox();
  }

  function apply() {
    var q = (search && search.value || "").toLowerCase().trim();
    var cat = document.querySelector("[data-filter].active");
    var filter = cat ? cat.getAttribute("data-filter") : "all";
    var filtered = products.filter(function (p) {
      var matchCat = filter === "all" || p.category === filter;
      var matchQ = !q || p.name.toLowerCase().indexOf(q) !== -1 || p.desc.toLowerCase().indexOf(q) !== -1;
      return matchCat && matchQ;
    });
    render(filtered);
  }

  if (search) search.addEventListener("input", apply);
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      apply();
    });
  });

  apply();
})();
