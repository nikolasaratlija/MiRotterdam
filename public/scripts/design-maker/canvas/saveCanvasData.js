import {canvas, deSelectElement} from "./Canvas.js";
import {saveDesignAsJson} from "../utils/saveDesignAsJson.js";

export default async function saveCanvasData() {
    deSelectElement() // makes sure to hide all menus and deselect element before screenshotting

    sessionStorage.clear() // makes sure to clear session before setting items

    // saves canvas as a data object
    const designObject = saveDesignAsJson() // creates a JSON object from the canvas
    const designObjectJson = JSON.stringify(designObject)
    sessionStorage.setItem('designObject', designObjectJson) // sets a cookie where the JSON is kept

    // show loader, because html2canvas can take a few seconds
    document.getElementById('loading-circle').classList.add('show')

    // converts HTML to a canvas element, then converts the canvas element to base64 and stores it in sessionStorage
    return html2canvas(canvas, {logging: false})
        .then(canvas => sessionStorage.setItem('canvasBase64', canvas.toDataURL('image/jpeg')))
    // .then(canvas => Canvas2imageMin.saveAsJPEG(canvas, undefined, undefined, 'canvas'))
}