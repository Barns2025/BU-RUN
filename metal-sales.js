// Mobile menu toggle
const menuToggleMetal = document.querySelector('.menu-toggle');
const mobileMenuMetal = document.querySelector('.mobile-menu');
menuToggleMetal.addEventListener('click', () => {
  if (mobileMenuMetal.style.display === 'block') {
    mobileMenuMetal.style.display = 'none';
    menuToggleMetal.textContent = 'Menu';
  } else {
    mobileMenuMetal.style.display = 'block';
    menuToggleMetal.textContent = 'Close';
  }
});
// Form submission for subscribe (same as elsewhere)
document.querySelectorAll('.subscribe-form, .subscribe-form-footer').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});
