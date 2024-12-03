
/* JavaScript file to request the API key from the server dynamically: */
/* For a restaurant website like yours, client-side integration with restricted API keys is industry-standard and safe! */

/*Fetching the api key from the server. Lines 6-10*/
async function loadGoogleMaps() {
  try {
    const response = await fetch('/api/key');
    const data = await response.json();
    const apiKey = data.apiKey; // Get the key from the server response

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=5350 E Broadway #128, Tucson, AZ 85711:ChIJN1t_tDeuEmsRU9sPDbDGBsD8`;

    iframe.width = "800";
    iframe.height = "650";
    iframe.style.border = "0";
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.title = "Google Maps Embed - Broadway Location";

    document.querySelector(".map-container").appendChild(iframe);
  } catch (error) {
    console.error('Error loading Google Maps:', error);
  }
}


loadGoogleMaps();
