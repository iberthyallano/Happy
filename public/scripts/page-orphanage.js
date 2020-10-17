const options = { 
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

const spanLat = document.querySelector('span[data-latitude]').dataset.latitude;
const spanLong = document.querySelector('span[data-longitude]').dataset.longitude;
                                  

const mymap = L.map('mapid', options).setView([spanLat, spanLong], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaWJlcnRoeSIsImEiOiJja2c3ZTUwZDIwNmh2MnprYzZ6cDF5ZG5nIn0.aJw9z5ZjcwK-dVCzOsqrtw'
}).addTo(mymap);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68]
});


L.marker([spanLat, spanLong], {icon}).addTo(mymap).bindPopup(popup);

function selectImage(event){
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".images button");
   
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    imageContainer.src = image.src

    button.classList.add("active");
}
                        