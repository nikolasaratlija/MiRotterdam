const canvas = document.getElementById('canvas')
const slider = document.getElementById('scale-slider')
const scaleButton = document.getElementById('scale-slider-button')

const canvasImageWidth = 100
const canvasImageWidthMargin = 50

slider.min = canvasImageWidth - canvasImageWidthMargin
slider.max = canvasImageWidth + canvasImageWidthMargin

files.forEach(file => {
    // adds images to menu
    let image = document.createElement('img')
    image.src = file
    document.querySelector('.menu').appendChild(image)

    // add image to canvas onclick
    image.addEventListener('click', (e) => createCanvasElement(e.target))
})

let selectedElement

function createCanvasElement(el) {
    const img = el.cloneNode(true)
    img.id = 'obj' + Math.floor(Math.random() * 99) // assign random id to object
    img.width = canvasImageWidth;
    document.getElementById('canvas').appendChild(img)

    Draggable.create(`#canvas > img#${img.id}`, {
        type: 'x,y', bounds: '#canvas', onClick: (e) => {
            if (selectedElement) return // if an element has already been selected, do nothing
            e.preventDefault()

            selectedElement = e.target
            selectedElement.classList.add('selected')
        }
    });
}

// unselect object when pressing anywhere on canvas
canvas.addEventListener('click', () => {
    if (!selectedElement) return // if an element has not been selected, do nothing

    selectedElement.classList.remove('selected')
    selectedElement = undefined
    setSlider(false)
})

scaleButton.addEventListener('click', () => {
    if (!selectedElement) return

    if (slider.style.display === 'none')
        setSlider(true, selectedElement)
    else
        setSlider(false)
})

function setSlider(show = true, el = null) {
    if (!show) {
        slider.style.display = 'none'
        return
    }

    slider.style.display = 'block'
    slider.value = el.width;

    const sliderEvent = (e) =>
        document.querySelector('#canvas img.selected').width = parseInt(e.target.value)

    slider.removeEventListener('click', sliderEvent)
    slider.addEventListener('input', sliderEvent)
}