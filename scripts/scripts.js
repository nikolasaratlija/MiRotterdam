const slider = document.getElementById('scale-slider')

files.forEach(file => {
    let image = document.createElement('img')
    image.src = file
    image.width = 100
    document.querySelector('.menu').appendChild(image)

    image.addEventListener('click', (e) => {
        const img = e.target.cloneNode(true)
        const randId = 'obj' + Math.floor(Math.random() * 99) // assign random id to object
        img.id = randId
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
                    slider.style.display = 'none'
                } else {
                    el.classList.add('selected')
                    slider.style.display = 'block'
                }
            }
        });
    })
})

slider.addEventListener('input', e => {
    document.querySelector('#container img.selected').width += parseInt(e.target.value)
})

// screenshot
document.addEventListener('keypress', (e) => {
    if (e.key === 'x')
        html2canvas(document.querySelector('#container'), {logging: false})
            .then(canvas => Canvas2imageMin.saveAsPNG(canvas, undefined, undefined, 'canvas'))
})