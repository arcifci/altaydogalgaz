// Altay Doğalgaz - script.js
const yil = document.getElementById('yil');
if (yil) yil.textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const mobile = document.getElementById('mobil-menu');
if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const open = mobile.hasAttribute('hidden') ? false : true;
    if (open) mobile.setAttribute('hidden', '');
    else mobile.removeAttribute('hidden');
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});
