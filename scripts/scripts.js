const slider = document.getElementById('scale-slider')

const canvasImageWidth = 100
const canvasImageWidthMargin = 50

slider.min = canvasImageWidth - canvasImageWidthMargin
slider.max = canvasImageWidth + canvasImageWidthMargin

files.forEach(file => {
    let image = document.createElement('img')
    image.src = file
    document.querySelector('.menu').appendChild(image)

    image.addEventListener('click', (e) => {
        const img = e.target.cloneNode(true)
        const randId = 'obj' + Math.floor(Math.random() * 99) // assign random id to object
        img.id = randId
        img.width = canvasImageWidth;
        document.getElementById('container').appendChild(img)

        Draggable.create(`#container img#${randId}`, {
            type: 'x,y', bounds: '#container', onClick: function () {
                const el = this.target

                // remove 'selected' class if another element has it already
                const selectedElement = document.querySelector('#container img.selected')
                if (selectedElement && el !== selectedElement)
                    selectedElement.classList.remove('selected')

                if (el.classList.contains('selected')) {
                    el.classList.remove('selected')
                    setSliderAttributes(false)
                } else {
                    el.classList.add('selected')
                    setSliderAttributes(true, el)
                }
            }
        });
    })
})

function setSliderAttributes(show = true, el = null) {
    if (!show) {
        slider.style.display = 'none'
        return
    }

    slider.style.display = 'block'
    slider.value = el.width;

    const sliderEvent = (e) =>
        document.querySelector('#container img.selected').width = parseInt(e.target.value)

    slider.removeEventListener('click', sliderEvent)
    slider.addEventListener('input', sliderEvent)
}

// screenshot
document.addEventListener('keypress', (e) => {
    if (e.key === 'x')
        html2canvas(document.querySelector('#container'), {logging: false})
            .then(canvas => Canvas2imageMin.saveAsPNG(canvas, undefined, undefined, 'canvas'))
})