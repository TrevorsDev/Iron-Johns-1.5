function loadNav() {
  fetch('/components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;

      // ✅ DOM elements are now available — safe to query and bind
      const menuToggle = document.querySelector(".menu-toggle");
      const navMenu = document.querySelector(".nav-menu");
      const dropdown = document.querySelectorAll(".dropdown");

      // Mobile menu toggle
      menuToggle.addEventListener("click", function () {
        console.log("Menu button clicked!");
        navMenu.classList.toggle("show");

        if (!navMenu.classList.contains("show")) {
          dropdown.forEach(drop => drop.classList.remove("active"));
        }
      });

      // Dropdown toggle
      dropdown.forEach(currentDrop => {
        currentDrop.addEventListener("click", function (event) {
          event.stopPropagation();

          dropdown.forEach(otherDrop => {
            if (otherDrop !== currentDrop) {
              otherDrop.classList.remove("active");
            }
          });

          currentDrop.classList.toggle("active");
        });
      });

      // Close menus when clicking outside
      document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
          navMenu.classList.remove("show");
          dropdown.forEach(drop => drop.classList.remove("active"));
        }
      });
    })
    .catch(error => console.error('Error loading navigation bar', error));
}

document.addEventListener("DOMContentLoaded", loadNav);