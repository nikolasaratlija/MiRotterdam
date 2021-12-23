import {toggleEnabled as toggleDeleteButton} from "../buttons/DeleteElementButton.js";
import {hideElementEditor, setElement} from "../attribute-editor/AttributeEditor.js";

export const canvas = document.getElementById('canvas')
export const backgroundImage = document.getElementById('canvas-background-image')
export const imageWidth = 100 // default canvas image width

// add element to canvas
export function addElement(imageSource) {
    const img = document.createElement('img')

    img.src = imageSource
    img.id = 'obj' + Math.floor(Math.random() * 99) // assign random id to object
    img.classList.add('element') // add proper styling
    img.style.width = imageWidth + 'px'
    img.style.transform = // place image in the middle of the canvas
        `translate3d(${canvas.offsetWidth / 2 - imageWidth / 2}px, ${canvas.offsetHeight / 2 - imageWidth / 2}px, 0px)`

    canvas.appendChild(img)

    // uses GSAP library to make the image draggable
    Draggable.create(`#canvas > img#${img.id}`, {
        type: 'x,y',
        bounds: '#canvas',
        onClick: selectElement
    })
}

// events
let selectedElement;

export const selectElement = e => { // event for selecting element
    if (selectedElement) return
    e.preventDefault()

    selectedElement = e.target

    selectedElement.classList.add('selected')
    toggleDeleteButton(selectedElement)
    setElement(selectedElement)
}

export const deSelectElement = () => { // event for unselecting element
    if (!selectedElement) return

    selectedElement.classList.remove('selected')
    toggleDeleteButton()
    hideElementEditor()
    selectedElement = undefined
}

canvas.addEventListener('click', deSelectElement)