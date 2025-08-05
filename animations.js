// animations.js
document.addEventListener("DOMContentLoaded", () => {
  // Options for the observer: fire when 10% of the element is visible
  const observerOptions = {
    threshold: 0.1
  };

  // Create the IntersectionObserver callback
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the CSS animation class
        entry.target.classList.add("fade-in-up");
        // Stop observing once animated
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Find all elements marked for scroll animation
  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    // Optionally, start them hidden via inline style or CSS:
    // el.style.opacity = 0;
    observer.observe(el);
  });
});



/*makes content constanatly fade in and out*/
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;
      // only add once it's at least 20% visible
      if (ratio > 0.2) {
        entry.target.classList.add('in-view');
      }
      // only remove once it's less than 5% visible
      else if (ratio < 0.05) {
        entry.target.classList.remove('in-view');
      }
      // in-between ratios do nothing, avoiding rapid toggles
    });
  }, {
    threshold: [0.05, 0.2]   // watch for both 5% and 20% crossings
  });

  document.querySelectorAll('.stack-item').forEach(el => observer.observe(el));
});
