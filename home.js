// home.js
document.addEventListener("DOMContentLoaded", () => {
  // — 1) Mobile menu toggle ——
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuToggle.addEventListener("click", () => {
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
      menuToggle.textContent = '☰ Menu';
    } else {
      mobileMenu.style.display = 'block';
      menuToggle.textContent = '✕ Close';
    }
  });

  // — 2) Smooth scroll for anchor links on the same page ——
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          window.scrollTo({
            top: targetEl.offsetTop - 60, // adjust for fixed header height
            behavior: "smooth"
          });
        }
      }
    });
  });

  // — 3) Subscribe form handler (works for both forms) ——
  document.querySelectorAll(".subscribe-form, .subscribe-form-footer")
    .forEach(form => {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for subscribing!");
        this.reset();
      });
    });
});




document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.stack-item').forEach(el => observer.observe(el));
});