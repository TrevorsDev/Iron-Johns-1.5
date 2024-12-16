// Listens for the DOMContentLoaded event, which fires when the HTML is fully loaded and parsed but before images, stylesheets, or subframes have loaded. Waiting for this event ensures that the JavaScript only runs once the DOM is ready, preventing errors from trying to access elements that haven’t yet loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Fetch nav.html file and load it to index.html where the div with an id of "nav-placeholder" exists
  fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      // Replace placeholder with fetched data
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error('Error loading the footer', error));
});

