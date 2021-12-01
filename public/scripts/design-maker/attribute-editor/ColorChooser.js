import {getSelectedElement} from "../utils/getSelectedElement.js";

const choicesContainer = document.getElementById('color-choices-container')
const colorButtons = document.querySelectorAll('.color-choices-container > button')

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedElement = getSelectedElement()
        selectedElement.style.filter = button.style.filter
    })
})

export function setChosenElement(element) {
    colorButtons.forEach(button => {
        button.style.backgroundImage = `url('${element.src}')`
    })
}

