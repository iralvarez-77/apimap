
  const url = "http://localhost:3030/api/v1/points";
  
  const api = async (url) => {
    const response = await fetch(url)
    const { data } = await response.json()
    return data[0]
  }
  
  const { lat, long : lng } = await api(url)

let mapa;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  console.log("🚀 ~ initMap ~ Map:", Map)

  mapa = new Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 8,
  });

  new google.maps.Marker({
    position: { lat, lng },
    map: mapa,
  })
} 

initMap();