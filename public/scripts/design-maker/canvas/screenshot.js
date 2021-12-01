import {canvas, deSelectElement} from "./Canvas.js";

export default function screenshot() {
    deSelectElement() // makes sure to hide all menus and deselect element before screenshotting

    html2canvas(canvas, {logging: false})
        .then(canvas => Canvas2imageMin.saveAsPNG(canvas, undefined, undefined, 'canvas'))
}