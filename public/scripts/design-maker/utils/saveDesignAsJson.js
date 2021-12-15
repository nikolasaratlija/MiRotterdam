import {canvas} from "../canvas/Canvas.js";

// this function creates a JSON file that represents the canvas (elements, element positions and background)
export function saveDesignAsJson() {
    let designObject = {
        location_id: 5,
        elements: []
    }

    canvas.childNodes.forEach(el => {
        const cssTransform = el.style.transform
        const splitPosition = cssTransform.match(/\d+/g)

        const element = {
            element_name: el.src.split('/')[5],
            width: parseInt(el.style.width, 10),
            position_x: splitPosition[1],
            position_y: splitPosition[2]
        }

        designObject.elements.push(element)
    })

    return designObject
}

