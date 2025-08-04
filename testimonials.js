// Menu toggle
const menuToggleTest = document.querySelector('.menu-toggle');
const mobileMenuTest = document.querySelector('.mobile-menu');
menuToggleTest.addEventListener('click', () => {
  if (mobileMenuTest.style.display === 'block') {
    mobileMenuTest.style.display = 'none';

   menuToggleTest.textContent = '☰ Menu';    // add the hamburger icon back
  } else {
    mobileMenuTest.style.display = 'block';

   menuToggleTest.textContent = '✕ Close';   // include the close icon
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
