const options = { 
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

const mymap = L.map('mapid', options).setView([-7.8,-34.9], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaWJlcnRoeSIsImEiOiJja2c3ZTUwZDIwNmh2MnprYzZ6cDF5ZG5nIn0.aJw9z5ZjcwK-dVCzOsqrtw'
}).addTo(mymap);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

L.marker([-7.8, -34.9], {icon}).addTo(mymap).bindPopup(popup);

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
                        