
const map = L.map('mapid').setView([-19.7441773,-47.9384518], 15); 

// create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",

    iconSize: [43.5,51],
    iconAnchor: [21.75,51],
    popupAnchor: [170,12]
})


function addMarker({id, name, lat , lng}){

    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight:240

    }).setContent(`<div class="name-orphanage" ><p title="${name}">${name}</p> </div><a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)


    // create and add marker
    L.
    marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}


const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    console.log(orphanage)

    addMarker(orphanage)

})