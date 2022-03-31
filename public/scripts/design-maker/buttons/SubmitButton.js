import saveCanvasData from "../canvas/saveCanvasData.js";

export const submitButton = document.getElementById('ok-button')

export function submitImage() {
    saveCanvasData()
        .then(() => window.location.href = '/ontwerpen/verzenden') // redirect
}