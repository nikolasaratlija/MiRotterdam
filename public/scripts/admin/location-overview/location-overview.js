fetch('/api/locations')
    .then(res => res.json())
    .then(json => getLocation(json))

function getLocation(json){
console.log(typeof(json))
 json.forEach(element => {
    cardBuilder(`/api/locations/${element.id}/image`, element.location);
});

}

const cardGallery = document.getElementById('cardGallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const popupBox = document.getElementById('popup-box');


//card builder
function cardBuilder(imgSource, locationName){
    
//create column
const column = document.createElement('div');
column.classList.add('col');

//create card
const card = document.createElement('div');
card.classList.add('card');
card.classList.add('shadow-sm');

//create image properties
const image = document.createElement('img');
image.classList.add('card-img-top');
image.width = '50%';
image.height = '255';
image.src = `${imgSource}`;
image.style.cursor = 'pointer';

//create popup function
image.addEventListener('click', () => {
    popup.style.transform = `translateY(0)`
    selectedImage.src = image.src;
})

//create popup disappear function
popup.addEventListener('click', () =>{
    popup.style.transform = `translateY(-100%)`;
    selectedImage.src = ''
    selectedImage.alt = ''
})


//create card body
const cardBody = document.createElement('div');
cardBody.classList.add('card-body');

const locationText = document.createElement('p');
locationText.classList.add('fw-bold');
locationText.textContent = `Locatie: ${locationName}`;

//create buttons on card
const buttonBar = document.createElement('div');
buttonBar.classList.add('d-flex');
buttonBar.classList.add('justify-content-between');
buttonBar.classList.add('align-items-center');

//group the buttons
const buttonGroup = document.createElement('div');
buttonGroup.classList.add('btn-group');

//create the card divs with parent and child components
cardGallery.appendChild(column)
column.appendChild(card)
card.appendChild(image)
card.appendChild(cardBody)
cardBody.appendChild(locationText)
cardBody.appendChild(buttonBar)
buttonBar.appendChild(buttonGroup)
buttonGroup.appendChild(CreateButton('Download QR', 'btn-success'))
buttonGroup.appendChild(CreateButton('Verwijder', 'btn-danger'))


}

//create button
function CreateButton(text, className){
    const cardButton = document.createElement('button');
    cardButton.type = 'button';
    cardButton.classList.add('btn');
    cardButton.classList.add('btn-sm');
    cardButton.classList.add(className);
    cardButton.textContent = text;
    cardButton.style.margin = '5px'
    return cardButton;
}
