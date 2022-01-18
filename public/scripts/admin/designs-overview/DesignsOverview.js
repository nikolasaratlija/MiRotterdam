fetch('/api/designs')
    .then(res => res.json())
    .then(json => createCanvasOverview(json))

function createCanvasOverview(designsData) {
    setCountLabel(designsData) // sets the label displaying the amount of designs

    designsData.forEach(designData => {
        // fetches the canvas_image
        fetch(`/api/designs/${designData.design_id}/canvas_image`)
            .then(data => data.text())
            .then(base64 => {
                const imgBase64String = 'data:image/jpg;base64, ' + base64 // prepends base64 prefix for html img src
                const design = DesignCard(designData, imgBase64String) // creates a card containing the canvas and additional information
                document.getElementById('design-container').appendChild(design)
            })
    })
}

function DesignCard(designData, imgBase64) {
    const template = document.createElement('template') // HTML template feature
    // template html for card
    let html = `
        <div class="card">
            <div class="card-img-top" id="card-img">
                 <img id="img" src="" alt="Afbeelding van het ontwerp">
            </div>

            <div class="card-body">
                <h5 class="card-title">Locatie: ${designData.location_name}</h5>
                <small id="date" class="card-text">Datum: </small>
                <a href="#" class="btn btn-primary">Meer Informatie</a>
            </div>
        </div>`

    template.innerHTML = html.trim() // trim whitespace
    const element = template.content // .content is an object that acts like a DOM object, which allows for dom operations

    element.getElementById('img').src = imgBase64
    element.getElementById('date').innerText += designData.date

    return element.firstChild // returns an html dom element
}

function setCountLabel(designsData) {
    document.getElementById('design-count').innerText = designsData.length
}