import {makeDesignFromJson} from "../../design-maker/utils/makeDesignFromJson.js";

fetch('/api/designs')
    .then(res => res.json())
    .then(json => createCanvasOverview(json))

function createCanvasOverview(designsData) {
    setCountLabel(designsData) // sets the label displaying the amount of designs

    designsData.forEach(designData => {
        const canvas = makeDesignFromJson(designData) // creates a canvas element using the data object
        const design = DesignCard(canvas, designData) // creates a card containing the canvas and additional information

        document.getElementById('design-container').appendChild(design)
    })
}

function DesignCard(canvas, designData) {
    const template = document.createElement('template') // HTML template feature
    // template for card
    let html = `
        <div class="card">
            <div class="card-img-top" id="card-img"></div>

            <div class="card-body">
                <h5 class="card-title">Locatie: ${designData.location_name}</h5>
<!--                <p class="card-text">Datum</p>-->
<!--                <a href="#" class="btn btn-primary">Meer Informatie</a>-->
            </div>
        </div>`

    template.innerHTML = html.trim() // trim whitespace
    const element = template.content // .content is an object that acts like a DOM object

    element.getElementById('card-img').appendChild(canvas) // append canvas element in template

    return element.firstChild // .firstchild is the actual element
}

function setCountLabel(designsData) {
    document.getElementById('design-count').innerText = designsData.length
}