// creates an html object that contains a design based the parameters
export function makeDesignFromJson(design) {
    const canvas = document.createElement('div')
    canvas.classList.add('canvas')

    canvas.style.backgroundImage = `url('/api/locations/${design['location_id']}/image')`

    design['elements'].forEach(el => {
        const img = document.createElement('img')
        img.src = `/assets/elements/${el['element_name']}`
        img.style.width = el['width'] + 'px'
        img.style.transform = `translate3d(${el['position_x']}px, ${el['position_y']}px, 0)`
        img.classList.add('element')
        canvas.appendChild(img)
    })

    return canvas
}