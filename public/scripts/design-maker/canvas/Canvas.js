import {toggleEnabled as toggleDeleteButton} from "../buttons/Delete.js";
import {hideElementEditor, showElementEditor} from "../attribute-editor/AttributeEditor.js";

export const canvas = document.getElementById('canvas')
export const imageWidth = 100

// add element to canvas
export function addElement(element) {
    const img = element.cloneNode(true)

    img.id = 'obj' + Math.floor(Math.random() * 99) // assign random id to object
    img.width = imageWidth
    // place image in the middle of the canvas
    img.style.transform =
        `translate3d(${canvas.offsetWidth / 2 - imageWidth / 2}px, ${canvas.offsetHeight / 2 - imageWidth / 2}px, 0px)`

    canvas.appendChild(img)

    const canvasElement = Draggable.create(`#canvas > img#${img.id}`, {
        type: 'x,y',
        bounds: '#canvas',
        onClick: selectElement
    })[0].target

    // force click event upon creation to select the element
    // canvasElement.dispatchEvent(new Event('click'))
}

// events
let selectedElement;

export const selectElement = e => { // event for selecting element
    if (selectedElement) return
    e.preventDefault()

    selectedElement = e.target

    selectedElement.classList.add('selected')
    toggleDeleteButton(selectedElement)
    showElementEditor(selectedElement)
}

export const deSelectElement = () => { // event for unselecting element
    if (!selectedElement) return

    selectedElement.classList.remove('selected')
    toggleDeleteButton()
    hideElementEditor()
    selectedElement = undefined
}

canvas.addEventListener('click', deSelectElement)