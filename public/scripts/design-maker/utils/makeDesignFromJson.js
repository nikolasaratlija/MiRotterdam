export function makeDesignFromJson(targetDiv, design) {
    console.log(design)
    targetDiv.style.backgroundImage = `url('api/locations/${design['location_id']}/image')`
    // const elements = JSON.parse(design['elements'])

    design['elements'].forEach(el => {
        const img = document.createElement('img')
        img.src = `assets/elements/${el['image']}`
        img.style.width = el['width']
        // img.style.width = el['width'] + 'px'
        img.style.transform = el['position']
        // img.style.transform = `translate3d(${el['position_x']}px, ${el['position_y']}px, 0)`
        targetDiv.appendChild(img)
    })

    return targetDiv
}