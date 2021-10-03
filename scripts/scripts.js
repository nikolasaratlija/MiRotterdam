const canvas = document.getElementById('canvas')
const slider = document.getElementById('scale-slider')

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

function createCanvasElement(el) {
    const img = el.cloneNode(true)
    img.id = 'obj' + Math.floor(Math.random() * 99) // assign random id to object
    img.width = canvasImageWidth;
    document.getElementById('canvas').appendChild(img)

    Draggable.create(`#canvas > img#${img.id}`, {
        type: 'x,y', bounds: '#canvas', onClick: selectElementEvent
    });
}

let elementIsSelected = false

const selectElementEvent = (e) => {
    if (elementIsSelected) return
    e.preventDefault()

    const element = e.target
    element.classList.add('selected')
    elementIsSelected = true
    setSliderAttributes(true, element)
}

const unselectElementEvent = () => {
    if (!elementIsSelected) return

    document.querySelector('#canvas img.selected').classList.remove('selected')
    elementIsSelected = false
    setSliderAttributes(false)
}

canvas.addEventListener('click', unselectElementEvent)

function setSliderAttributes(show = true, el = null) {
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