// Listens for the DOMContentLoaded event, which fires when the HTML is fully loaded and parsed but before images, stylesheets, or subframes have loaded. Waiting for this event ensures that the JavaScript only runs once the DOM is ready, preventing errors from trying to access elements that haven’t yet loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Fetch nav.html file and load it to index.html where the div with an id of "nav-placeholder" exists
  fetch('/components/nav.html')
    .then(response => response.text())
    .then(data => {
      // Replace placeholder with fetched data
      document.getElementById("nav-placeholder").innerHTML = data;
    })
    .catch(error => console.error('Error loading navigation bar', error));
});

// All of the code below handles the navigation animations for when a user clicks on the menu in mobile view

document.addEventListener("DOMContentLoaded", function () {
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

  // Toggle submenus on mobile
  submenus.forEach(submenu => {
      submenu.addEventListener("click", function (event) {
          event.stopPropagation();
          this.classList.toggle("activeSub");
      })
  });


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
});

