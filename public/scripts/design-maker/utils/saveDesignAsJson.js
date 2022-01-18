import {canvas} from "../canvas/Canvas.js";
import {getLocationId} from "./getLocationId.js";

// this function creates a JSON file that represents the canvas (elements, element positions and background)
export function saveDesignAsJson() {
    let elements = []
    canvas.childNodes.forEach(el => elements.push(el.src.split('/')[5]))
    return elements
}

