// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll-reveal animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Contact form (no backend — just feedback)
const form = document.getElementById('contactForm');
const btn = document.getElementById('submitBtn');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const original = btn.textContent;
  btn.textContent = 'Message Sent ✓';
  btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
  form.reset();
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
  }, 2500);
});
