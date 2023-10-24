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
    })
    .catch((error) => {
      console.error(error);
    });
}
