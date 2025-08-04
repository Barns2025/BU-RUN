// Menu toggle
const menuToggleTest = document.querySelector('.menu-toggle');
const mobileMenuTest = document.querySelector('.mobile-menu');
menuToggleTest.addEventListener('click', () => {
  if (mobileMenuTest.style.display === 'block') {
    mobileMenuTest.style.display = 'none';
    menuToggleTest.textContent = 'Menu';
  } else {
    mobileMenuTest.style.display = 'block';
    menuToggleTest.textContent = 'Close';
  }
});
// Subscribe form
document.querySelectorAll('.subscribe-form, .subscribe-form-footer').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});
