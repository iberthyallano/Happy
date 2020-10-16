const mymap = L.map('mapid').setView([-7.8,-34.9], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaWJlcnRoeSIsImEiOiJja2c3ZTUwZDIwNmh2MnprYzZ6cDF5ZG5nIn0.aJw9z5ZjcwK-dVCzOsqrtw'
}).addTo(mymap);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function addMarker({id, name, latitude, longitude}){
    
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name}<a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"/> </a>`)
    
    L.marker([latitude, longitude], {icon})
                    .addTo(mymap)
                        .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        latitude: span.dataset.latitude,
        longitude: span.dataset.longitude
    }

    addMarker(orphanage);
})