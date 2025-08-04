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
