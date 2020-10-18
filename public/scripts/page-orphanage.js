const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//get values from HTML
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// create map


const map = L.map('mapid', options).setView([lat,lng], 15); 

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


// create and add marker



L.marker([lat,lng], {icon}).addTo(map)




/* image galary */


function selectImage(event){
    const button = event.currentTarget;

  
    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active");

    }

    // selecionar a image clicada

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");



    // atualizar o container de image

    imageContainer.src = image.src;

    //adicionar a classe .active para o botão clicado
    button.classList.add('active');

}