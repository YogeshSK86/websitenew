// ============================================
// UNINOVA TRADE — Global Script
// No external libraries used.
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Mark active nav link based on current page
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Smooth page-leave transition on internal link clicks
  document.querySelectorAll("a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (
      href &&
      href.indexOf("http") !== 0 &&
      href.indexOf("mailto") !== 0 &&
      href.indexOf("tel") !== 0 &&
      href.indexOf("#") !== 0 &&
      a.target !== "_blank"
    ) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.add("is-leaving");
        setTimeout(function () {
          window.location.href = href;
        }, 280);
      });
    }
  });

  // Animate elements into view on scroll
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".biz-card, .step-card, .stat-item").forEach(function (el) {
    observer.observe(el);
  });

  // Contact form submit feedback (form posts to Formspree — see README)
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function () {
      var btn = form.querySelector("button[type='submit']");
      if (btn) {
        btn.textContent = "Sending...";
        btn.disabled = true;
      }
    });
  }
});
