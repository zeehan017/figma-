// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Subscribe Form Alert
document.querySelector('.subscribe-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ Thanks for subscribing!');
});

// Bookmark Button Alert
document.querySelectorAll('.bookmark-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('⭐ Doctor profile bookmarked!');
  });
});