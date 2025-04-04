// Fucntion to load the nav
function loadNav() {
  fetch('/components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;
      setupMenuToggle(); //Call function to set up the menu toggle and event listeners
    })
    .catch(error => console.error('Error loading navigation bar', error));
}

// Function to set up the menu toggle and event listeners
function setupMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const dropdown = document.querySelector(".dropdown"); // Single dropdown
  const submenus = document.querySelectorAll(".dropdown-submenu"); // Select submenus
   
  // Toggle main menu on mobile
  menuToggle.addEventListener("click", function () {
      console.log("Menu button clicked!"); // Debugging
      navMenu.classList.toggle("show");

      // If menu is being closed, also close dropdown and submenus
      if (!navMenu.classList.contains("show")) {
          if (dropdown) {
              dropdown.classList.remove("active");
          }
          submenus.forEach(submenu => submenu.classList.remove("activeSub"));
      }
  });

  // Toggle dropdown menu on mobile
  if (dropdown) { //Check if it exists to avoid errors
      dropdown.addEventListener("click", function (event) {
          event.stopPropagation();
          this.classList.toggle("active");
      })
  };

  // Close menus when clicking outside
  document.addEventListener("click", function (event) {
      if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
          navMenu.classList.remove("show");
          if (dropdown) {
              dropdown.classList.remove("active"); // Fix: No .forEach() needed
          }
          submenus.forEach(submenu => submenu.classList.remove("activeSub"));
      }
  });
}

// After the DOM has loaded all the HTML, the loadNav function is called
document.addEventListener("DOMContentLoaded", loadNav);






