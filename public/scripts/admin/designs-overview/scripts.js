fetch('api/designs')
    .then(res => res.json())
    .then(json => createCanvasOverview(json))

function createCanvasOverview(designs) {
    designs.forEach(design => {
        const canvas = document.createElement('div')
        canvas.classList.add('canvas')
        canvas.id = 'canvas'

        canvas.style.backgroundImage = `url('api/locations/${design['location_id']}/image')`
        const elements = JSON.parse(design['elements'])

        elements.forEach(el => {
            const img = document.createElement('img')
            img.src = `assets/elements/${el['name']}`
            img.style.width = el['width'] + 'px'
            img.style.transform = `translate3d(${el['position_x']}px, ${el['position_y']}px, 0)`
            canvas.appendChild(img)
        })

        document.getElementById('container').appendChild(canvas)
    })
}