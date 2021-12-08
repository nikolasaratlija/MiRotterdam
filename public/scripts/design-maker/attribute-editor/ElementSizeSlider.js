const slider = document.getElementById('scale-slider')
let selectedElement;

export function SizeSlider(imageWidth) {
    slider.min = imageWidth - 25 // set slider min value
    slider.max = imageWidth + 75 // set slider max value

    slider.addEventListener('input', e => {
        selectedElement.style.width = slider.value + 'px'
    })
}

export function updateSlider(element) {
    slider.value = parseInt(element.style.width,10)
    selectedElement = element
}