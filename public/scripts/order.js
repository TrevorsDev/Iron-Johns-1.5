const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

async function initOrderMap() {
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  const position = { lat: 32.22112118174564, lng: -110.87806633213874 };

  const map = new Map(document.getElementById('orderMap'), {
    center: position,
    zoom: 15,
    mapId: '93043b17077af5492fec767e',
    colorScheme: 'DARK',
  });

  new AdvancedMarkerElement({ map, position, title: "Iron John's — Broadway" });
}

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', event => {

    modal.style.display = 'flex';

    if (button.textContent === 'Map Location') {
      modalBody.innerHTML = `
      <div class="rest-details-header">
        <h2>Map Location</h2>
      </div>
      <p>We are located at the Williams Centre Shopping Mall.</p>
      <div id="orderMap" style="width:100%;height:300px;"></div>
      `;

      initOrderMap();

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
          <a href="tel:15205149797" class="button phone-button">(520) 514-9797</a>
        </div>
      </div>
      <div class="email">
        <p>Email: info@ironjohnsbrewing.com</p>
        <p>Phone in or order right from this page! :)</p>
        <p>Online orders are for pickup only. We don't offer Door Dash or Grub Hub at this time.</p>
        <p>There are no gluten free options at this time</p>
      </div>
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
