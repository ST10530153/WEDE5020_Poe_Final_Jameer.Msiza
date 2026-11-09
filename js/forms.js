/* Form validation + AJAX submission (Part 3) */
(function () {
  "use strict";

  // Enquiry form — AJAX submission with contextual response
  var enquiry = document.getElementById("enquiry-form");
  if (enquiry) {
    enquiry.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors(enquiry);
      if (!validate(enquiry)) return;

      var formData = new FormData(enquiry);
      var type = formData.get("type");
      var store = formData.get("store");
      var name = formData.get("name").trim();
      var response = document.getElementById("enquiry-response");
      var btn = enquiry.querySelector("button[type=submit]");

      btn.disabled = true;
      btn.textContent = "Sending…";
      response.hidden = true;

      // Simulated AJAX request (no real server on this static prototype)
      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then(function () {
          var messages = {
            product: "Thanks, " + name + ". A product specialist at our " + store + " store will check stock and reply with current pricing and availability within one business day.",
            bulk: "Thanks, " + name + ". Our business desk will prepare a quote for the quantity you listed. Expect an email within two business days with pricing, lead times and delivery options.",
            tradein: "Thanks, " + name + ". Bring the device to our " + store + " store for a free valuation. Most trade-ins are assessed the same day.",
            repair: "Thanks, " + name + ". A repair slot has been noted for our " + store + " workshop. We will confirm the booking and estimated turnaround by email or phone."
          };
          response.textContent = messages[type] || "Thank you. We will respond during store hours.";
          response.hidden = false;
          enquiry.reset();
        })
        .catch(function () {
          response.textContent = "Something went wrong. Please try again or call the store.";
          response.hidden = false;
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = "Send enquiry";
        });
    });
  }

  // Contact form — AJAX submission then open mailto as fallback
  var contact = document.getElementById("contact-form");
  if (contact) {
    contact.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors(contact);
      if (!validate(contact)) return;

      var formData = new FormData(contact);
      var name = formData.get("name").trim();
      var email = formData.get("email").trim();
      var store = formData.get("store");
      var msg = formData.get("message").trim();
      var btn = contact.querySelector("button[type=submit]");
      var response = document.getElementById("contact-response");

      if (!response) {
        response = document.createElement("div");
        response.id = "contact-response";
        response.className = "response";
        response.hidden = true;
        contact.after(response);
      }

      btn.disabled = true;
      btn.textContent = "Sending…";
      response.hidden = true;

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then(function () {
          response.textContent = "Message prepared. Your email client will open so you can send it to " + (store === "midrand" ? "Midrand" : "Sandton") + ".";
          response.hidden = false;
          // Open mailto after successful AJAX
          var to = store === "midrand" ? "midrand@nexustech.co.za" : "sandton@nexustech.co.za";
          var subject = encodeURIComponent("Website contact from " + name);
          var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nStore: " + store + "\n\nMessage:\n" + msg);
          window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
          contact.reset();
        })
        .catch(function () {
          response.textContent = "Could not send. Please try again or email the store directly.";
          response.hidden = false;
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = "Send message";
        });
    });
  }

  function validate(form) {
    var ok = true;
    form.querySelectorAll("[required]").forEach(function (field) {
      var val = String(field.value).trim();
      if (!val) {
        showError(field, "This field is required.");
        ok = false;
      } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        showError(field, "Enter a valid email address.");
        ok = false;
      } else if (field.type === "tel" && !/^0[0-9]{9}$/.test(val.replace(/\s/g, ""))) {
        showError(field, "Enter a valid South African cellphone (10 digits, starting with 0).");
        ok = false;
      }
    });
    return ok;
  }

  function showError(field, msg) {
    var err = document.createElement("span");
    err.className = "field-error";
    err.textContent = msg;
    field.parentElement.appendChild(err);
    field.setAttribute("aria-invalid", "true");
  }

  function clearErrors(form) {
    form.querySelectorAll(".field-error").forEach(function (el) { el.remove(); });
    form.querySelectorAll("[aria-invalid]").forEach(function (el) { el.removeAttribute("aria-invalid"); });
  }
})();
