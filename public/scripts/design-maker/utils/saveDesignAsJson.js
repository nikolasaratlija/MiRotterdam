import {canvas} from "../canvas/Canvas.js";

// this function creates a JSON file that represents the canvas (elements, element positions and background)
export function saveDesignAsJson() {
    let designObject = {
        location_id: 5,
        // image: canvas.style.backgroundImage,
        elements: []
    }

    canvas.childNodes.forEach(el => {
        const element = {
            image: el.src.split('/')[5],
            width: el.style.width,
            position: el.style.transform
        }

        designObject.elements.push(element)
    })

    console.log(designObject)
    sessionStorage.setItem('designObject', JSON.stringify(designObject))
}

