import {setCanvasImage} from "./setCanvasImage.js";
import {loadElements} from "./loadElements.js";
import {CanvasElement} from "./CanvasElement.js";
import {Slider} from "./ElementSizeSlider.js";

(() => {
    const canvas = document.getElementById('canvas')
    const canvasImageWidth = 100

    setCanvasImage(canvas)

    loadElements((element) => CanvasElement(canvas, element, canvasImageWidth))

    Slider(canvasImageWidth, 50)
})()