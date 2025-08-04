// Mobile menu toggle functionality
const menuToggleContact = document.querySelector('.menu-toggle');
const mobileMenuContact = document.querySelector('.mobile-menu');
menuToggleContact.addEventListener('click', () => {
  if (mobileMenuContact.style.display === 'block') {
    mobileMenuContact.style.display = 'none';
    menuToggleContact.textContent = 'Menu';
  } else {
    mobileMenuContact.style.display = 'block';
    menuToggleContact.textContent = 'Close';
  }
});
// Contact form submission handler (dummy for offline demonstration)
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    contactForm.reset();
  });
}
// Newsletter subscribe form (as in other pages)
document.querySelectorAll('.subscribe-form, .subscribe-form-footer').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});
