/*
  map.js — Google Maps initialization for the locations section.

  Uses the Maps JavaScript API so the custom Map ID (dark style) is applied.
  The API script in index.html calls window.initMap as its callback once loaded.
*/

(function () {

  async function initMap() {
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

    const map = new Map(document.getElementById('map'), {
      center: { lat: 32.211, lng: -110.922 },
      zoom: 12,
      mapId: '93043b17077af5492fec767e',
      colorScheme: 'DARK',
    });

    const locations = [
      { lat: 32.22119379419205, lng: -110.87806633213874, title: "Iron John's — Broadway" },
      { lat: 32.212490932166105, lng: -110.96145777631875, title: "Iron John's — 18th Street" },
    ];

    locations.forEach(({ lat, lng, title }) => {
      new AdvancedMarkerElement({ map, position: { lat, lng }, title });
    });
  }

  window.initMap = initMap;

})();
