files.forEach(file => {
    let image = document.createElement('img')
    image.src = file
    image.width = 100

    image.addEventListener('click', (e) => {
        const img = e.target.cloneNode(true)
        const randId = 'obj' + Math.floor(Math.random() * 99) // assign random id to object
        img.id = randId
        document.getElementById('container').appendChild(img)

        Draggable.create(`#container img#${randId}`, {
            type: 'x,y', bounds: '#container', onClick: function () {
                const el = this.target
                if (el.classList.contains('highlighted'))
                    el.classList.remove('highlighted')
                else
                    el.classList.add('highlighted')
            }
        });
    })
    document.querySelector('.menu').appendChild(image)
})

document.getElementById('scale-slider').addEventListener('input', e => {
    document.querySelector('#container .highlighted').width += parseInt(e.target.value)
})

// screenshot
document.addEventListener('keypress', (e) => {
    if (e.key === 'x')
        html2canvas(document.querySelector('#container'), {logging: false})
            .then(canvas => Canvas2imageMin.saveAsPNG(canvas, undefined, undefined, 'canvas'))
})