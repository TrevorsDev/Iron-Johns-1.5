function loadNav() {
  fetch('/components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // Mark the active page link for screen readers and styling
      const currentPath = window.location.pathname;
      document.querySelectorAll('.navbar__link').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath === '/' && linkPath === '/index.html')) {
          link.setAttribute('aria-current', 'page');
        }
      });

      const toggle = document.querySelector('.navbar__toggle');
      const menu   = document.querySelector('.navbar__menu');

      // Mobile: toggle menu open/closed
      toggle.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('is-open');
        toggle.classList.toggle('is-active');
        toggle.setAttribute('aria-expanded', isOpen);
      });

      // Close menu when clicking outside the navbar
      document.addEventListener('click', function (event) {
        const navbar = document.querySelector('.navbar');
        if (!navbar.contains(event.target)) {
          menu.classList.remove('is-open');
          toggle.classList.remove('is-active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    })
    .catch(error => console.error('Error loading navigation:', error));
}

document.addEventListener('DOMContentLoaded', loadNav);
