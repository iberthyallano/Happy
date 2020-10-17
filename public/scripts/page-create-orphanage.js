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
    iconAnchor: [29, 68]
});

let marker;

mymap.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && mymap.removeLayer(marker);

    marker = L.marker([lat,lng], {icon}).addTo(mymap);
});

function addPhotoField(){
   const container =  document.querySelector('#images');
   const fildsContainer = document.querySelectorAll('.new-upload');

   const newfildContainer = fildsContainer[fildsContainer.length-1].cloneNode(true);

   if(newfildContainer.children[0].value == ""){
       return
   }

   newfildContainer.children[0].value = ""

   container.appendChild(newfildContainer);
}

function deleteField(event){
    const span = event.currentTarget;

    const fildsContainer = document.querySelectorAll('.new-upload');

    if(fildsContainer.length <=  1){
        span.parentNode.children[0].value = "";
        return
    }

    span.parentNode.remove();
}

function toggleSelect(event){
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name=open_on_weekends]')

    input.value = button.dataset.value;
}

// function validate(event){
//     event.preventDefult()
//     alert("selecione um ponto no mapa")
// }