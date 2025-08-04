// Menu toggle for mobile on Services page
const menuToggleServices = document.querySelector('.menu-toggle');
const mobileMenuServices = document.querySelector('.mobile-menu');
menuToggleServices.addEventListener('click', () => {
  if (mobileMenuServices.style.display === 'block') {
    mobileMenuServices.style.display = 'none';
    menuToggleServices.textContent = 'Menu';
  } else {
    mobileMenuServices.style.display = 'block';
    menuToggleServices.textContent = 'Close';
  }
});
// Smooth scrolling for anchor links within the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});
// Subscribe form handler
const subscribeFormsServices = document.querySelectorAll('.subscribe-form, .subscribe-form-footer');
subscribeFormsServices.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});
