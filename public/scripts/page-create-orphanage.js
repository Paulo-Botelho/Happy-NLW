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

})
let marker;

// create and add marker 
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 

    marker && map.removeLayer(marker)

    // add icon layer

    marker = L.marker([lat,lng], {icon}).addTo(map);
})

// adicionar o campo de fotos
var maxPhotos = 1 ; //contador de fotos que vão ser colocadas
function addPhotoField(){
   // pegar o container de fotos #images

   const container = document.querySelector('#images');

   // pegar o container para duplicar .new-image

    const fieldsContainer = document.querySelectorAll('.new-upload');

   // realizar o clone da ultima imagem adicionada.

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificar se o campo estão vazio, se sim não adicionar ao campo de imagens

    const input = newFieldContainer.children[0]

    if(input.value == "")
        return
    // limpar o campo antes de adicionar ao container de imagens

   newFieldContainer.children[0].value="";

   // adicionar o clone ao container de #images
   if (maxPhotos < 12){//numero máximo de fotos
    container.appendChild(newFieldContainer);
    maxPhotos++;
   }else
    return alert("Só 12 imagens podem ser adicionadas :( , Por favor selecione as mais bonitas das que você tem para colocar :)")


}


function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1){

        // limpar o valor do campo
        span.parentNode.children[0].value ="";
        return;
    }

    // deletar o campo

    span.parentNode.remove();
    maxPhotos--;

}


// selecionar sim ou não

function toggleSelect(event){

    // retirar a class .active (dos botões)

    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active');
    })

    // colcoar a class .active nesse botão clicado

    const button = event.currentTarget;
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}


function validate(event) {

    const lat = document.querySelector('input[name="lat"]');
    const lng = document.querySelector('input[name="lng"]');
    if(lat.value == '' || lng.value == '') {
        event.preventDefault();
        alert('Selecione o local do orfanato no mapa');
    }

}