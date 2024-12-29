/* JavaScript file to request the API key from the server dynamically: */
/* For a restaurant website like yours, client-side integration with restricted API keys is industry-standard and safe! */

/*Fetching the api key from the server. Lines 6-10*/
async function getApiKey() {
  try {
    const response = await fetch('/api/key');
    const data = await response.json();
    return data.apiKey; //Return the API key
  } catch (error) {
    console.error('Error fetching API key:', error);
  }
}

// Fetch Google Maps API key from the server
async function loadGoogleMaps() {
  try {
    const apiKey = await getApiKey(); // Get the API key using the utility function
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=5350 E Broadway #128, Tucson, AZ 85711:ChIJN1t_tDeuEmsRU9sPDbDGBsD8`;
    iframe.width = "875";
    iframe.height = "750";
    iframe.style.border = "0";
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.title = "Google Maps Embed - Broadway Location";

    document.querySelector(".map-container").appendChild(iframe);
  } catch (error) {
    console.error('Error loading Google Maps:', error);
  }
}

/* API Key Fetching (loadApi.js): The function getApiKey() is separated and exported so order.js can call it without repeating the logic. */
export { getApiKey, loadGoogleMaps };
