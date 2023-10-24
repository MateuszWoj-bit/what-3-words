let map;
let marker;

function convertToCoordinates() {
  const apiKey = "YOUR_API_KEY"; 
  const w3wAddress = document.getElementById("w3wInput").value;
 
  fetch(
    `https://api.what3words.com/v3/convert-to-coordinates?words=${w3wAddress}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const coordinates = data.coordinates;
      document.getElementById("coordinates").innerText =
        coordinates.lat + ", " + coordinates.lng;

     
      if (!map) {
        map = L.map("map").setView([coordinates.lat, coordinates.lng], 15);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          map
        );
      }

  
      if (marker) {
        marker.setLatLng([coordinates.lat, coordinates.lng]);
      } else {
        marker = L.marker([coordinates.lat, coordinates.lng]).addTo(map);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
