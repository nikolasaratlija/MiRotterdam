(async () => {

    const canvas = document.getElementById('canvas')
    const slider = document.getElementById('scale-slider')
    const attributeMenuButton = document.getElementById('attribute-menu-button')

    // get query string parameter
    const defaultLocationId = 5
    const locationId = getLocationId() || defaultLocationId // default location id of 5 for testing

    // set background of canvas
    canvas.style.backgroundImage
        = `url('${window.location.protocol}//${window.location.host}/api/locations/${locationId}/image')`

    const canvasImageWidth = 100
    const canvasImageWidthMargin = 50

    slider.min = canvasImageWidth - canvasImageWidthMargin
    slider.max = canvasImageWidth + canvasImageWidthMargin

    const response = await fetch('api/elements')
    const files = await response.json()

    files.forEach(file => {
        // adds images to menu
        let image = document.createElement('img')
        image.src = 'assets/elements/' + file
        document.getElementById('elements-menu').appendChild(image)

        // add image to canvas onclick
        image.addEventListener('click', (e) => createCanvasElement(e.target))
    })

    let selectedElement

    const selectElement = e => {
        if (selectedElement) return // if an element has already been selected, do nothing
        e.preventDefault()

        selectedElement = e.target
        selectedElement.classList.add('selected')
        attributeMenuButton.disabled = false
    }

    const unselectElement = e => {
        if (!selectedElement) return // if an element has not been selected, do nothing

        selectedElement.classList.remove('selected')
        selectedElement = undefined
        attributeMenuButton.disabled = true
    }

    function createCanvasElement(el) {
        const img = el.cloneNode(true)
        img.id = 'obj' + Math.floor(Math.random() * 99) // assign random id to object
        img.width = canvasImageWidth;
        document.getElementById('canvas').appendChild(img)

        Draggable.create(`#canvas > img#${img.id}`, {
            type: 'x,y',
            bounds: '#canvas',
            onClick: selectElement
        });
    }

    // unselect object when pressing anywhere on canvas
    canvas.addEventListener('click', unselectElement)

    function getLocationId() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        return params.location
    }
})()