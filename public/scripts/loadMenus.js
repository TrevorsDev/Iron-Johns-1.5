/* We need to dynamically load sharables.html (or any other menu item content) into the .menu-content-container of menu.html via hash or query parameter (when visiting menu.html directly), and also maintain the existing dynamic content loading mechanism when clicking the links in menu.html. */

// Function to dynamically load the content based on the target
// We use the variable/term "target" bc it is a semantic choice representing something you're "aiming" to load or fetch, in this case, a file (like shareables.html).
function loadMenuContent(target) {
  fetch(target)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(data => {
      document.querySelector('.menu-content-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching menu content:', error);
      document.querySelector('.menu-content-container').innerHTML = '<p>Sorry, there was an error loading the menu. Please try again later.</p>';
    });
}

// Add event listeners for menu button clicks
document.querySelectorAll('.menu-button').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    button.disabled = true;
    loadMenuContent(target); // Load the content dynamically
    button.disabled = false;
  });
});

// Check URL hash or query parameters when the page loads
window.addEventListener('DOMContentLoaded', () => {
  // Check if there's a hash or query parameter
  const hash = window.location.hash; // Check hash (e.g., #shareables)
  const params = new URLSearchParams(window.location.search); // Check query parameters (e.g., ?section=shareables)

  if (hash === '#shareables' ) {
    loadMenuContent('../components/menus/shareables.html'); // Load shareables.html dynamically
  } else if (hash === '#pizza') {
    loadMenuContent('../components/menus/pizza.html');
  } else if (hash === '#burger') {
    loadMenuContent('../components/menus/burger.html');
  } else if (hash === '#salads') {
    loadMenuContent('../components/menus/salads.html');
  } else {
    loadMenuContent('../components/menus/fullMenu.html'); // Default to fullMenu.html if no hash or query parameter is found
  }
});


