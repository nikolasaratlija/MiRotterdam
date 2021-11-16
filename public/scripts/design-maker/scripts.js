import {setCanvasImage} from "./setCanvasImage.js";
import {loadElements} from "./loadElements.js";
import {CanvasElement} from "./canvasElement.js";
import {Slider} from "./ElementSizeSlider.js";
import {AttributeEditor} from "./AttributeEditor.js";

(() => {
    const canvas = document.getElementById('canvas')
    const canvasImageWidth = 100

    setCanvasImage(canvas)

    loadElements(
        (element) => CanvasElement(canvas, element, canvasImageWidth))

    AttributeEditor()

    Slider(canvasImageWidth, 50)
})();