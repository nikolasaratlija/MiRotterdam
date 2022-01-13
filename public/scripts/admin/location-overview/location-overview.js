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

// image wrapper
const imageWrapper = document.createElement('div');
imageWrapper.classList.add('card-img-top');
imageWrapper.classList.add('card-img-wrapper');

//create image properties
const image = document.createElement('img');
// image.classList.add('card-img-top');
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
card.appendChild(imageWrapper)
imageWrapper.appendChild(image)
card.appendChild(cardBody)
cardBody.appendChild(locationText)
cardBody.appendChild(buttonBar)
buttonBar.appendChild(buttonGroup)
buttonGroup.appendChild(CreateDeleteButton('Verwijder', 'btn-danger'))


}

//create button
function CreateDeleteButton(text, className){
    const cardButton = document.createElement('button');
    cardButton.addEventListener("click", DeleteObject)
    cardButton.type = 'button';
    cardButton.classList.add('btn');
    cardButton.classList.add('btn-sm');
    cardButton.classList.add(className);
    cardButton.textContent = text;
    cardButton.style.margin = '5px'
    return cardButton;
}

function DeleteObject(){
    console.log("I am clicked!")

    fetch(`/api/locations/22`, {
        method: "delete"
    })


    /*

    verwijder uit database
    stap 1 id krijgen van de gekozen element/locatie
    stap 2 fetch(`/api/locations/${userID}`, {
    method: "delete"
})
    
    */
}
