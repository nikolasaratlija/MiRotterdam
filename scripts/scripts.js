files.forEach(file => {
    let image = document.createElement('img')
    image.src = file
    image.width = 100

    image.addEventListener('click', (e) => {
        const img = e.target.cloneNode(true)
        document.getElementById('container').appendChild(img)

        Draggable.create('#container img', {
            type: 'x,y', bounds: '#container', onClick: function () {
                this.target.classList.add('highlighted')
            }
        });
    })

    document.querySelector('.menu').appendChild(image)
})


// screenshot
document.addEventListener('keypress', (e) => {
    if (e.key === 'x')
        html2canvas(document.querySelector('#container'), {logging: false})
            .then(canvas => Canvas2imageMin.saveAsPNG(canvas, undefined, undefined, "canvas"))
})