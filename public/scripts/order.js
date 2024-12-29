/* Import the function from loadApi.js. Order.js (Modal Logic): The modal and content management remain in order.js. It fetches the API key from loadApi.js using getApiKey() and creates the iframe dynamically based on the button clicked.*/
import { getApiKey } from './loadApi.js';


// Select elements
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

// Function to create Google Maps iframe dynamically
async function getGoogleMapsIframe() {
  try {
    const apiKey = await getApiKey(); /* Get the API key using the utility function. Efficiency: By calling the getApiKey() function inside order.js, you avoid duplicating the fetching logic, adhering to the DRY principle*/

    // Create the iframe with the API key
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=5350 E Broadway #128, Tucson, AZ 85711`;
    iframe.width = "100%";
    iframe.height = "300";
    iframe.style.border = "0";
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;

    return iframe; // Return the created iframe element
  } catch (error) {
    console.error('Error creating Google Maps iframe:', error);
  }
}

// Add event listeners to buttons
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', event => {


    // Show modal
    modal.style.display = 'flex';

    // Set content based on button clicked
    if (button.textContent === 'Map Location') {
      modalBody.innerHTML = `
      <div class="rest-details-header">
        <h2>Map Location</h2>
      </div>  
        <p>We are located at the Williams Centre Shopping Mall.</p>
      `;

      // Fetch the iframe and append it to the modal body
      getGoogleMapsIframe().then(iframe => {
        modalBody.appendChild(iframe);
      });

    } else if (button.textContent === 'Restaurant Details') {
      modalBody.innerHTML = `
      <div class="rest-details-header">
        <h2>Restaurant Details</h2>
      </div>
      <div class="hours-addy-container">
        <div class="addy">
          <h3>Address</h3>
          <p>1234 Broadway Blvd,</p>
          <p>Tucson, AZ 85711</p>
        </div>
        <div class="phone-num">
          <h3>Phone Us</h3>
          <p>Phone: (520) 514-9797</p>
        </div>
      </div>
        <p>Email: info@ironjohnsbrewing.com</p>
        <p>Online orders are for pickup only. We don't offer Door Dash or Grub Hub at this time.</p>
      `;
    }
  });
});

// Close the modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if user clicks outside modal content
modal.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
