import {updateSlider} from "./ElementSizeSlider.js";
import {setChosenElement} from "./ColorChooser.js";

const elementEditorAnimation = gsap.timeline() // animation
elementEditorAnimation.to('.element-editor', {duration: 0.2, top: 0})
elementEditorAnimation.pause()

export function showElementEditor(element) {
    // set element in element editor
    updateSlider(element)
    setChosenElement(element)

    elementEditorAnimation.play() // play animation
}

export function hideElementEditor() {
    elementEditorAnimation.reverse()
}

const editorChoices = document.querySelectorAll('.editor-attribute-choices') // attributes
const colorEditorContainer = document.getElementById('color-choices-container') // color choice container
const scaleSliderContainer = document.getElementById('scale-slider-container') // scale slider

export function AttributeEditor() {
    editorChoices.forEach(el => el.addEventListener('click', e => {
        const chosenAttribute = e.target

        const highlightedAttrButton = document.querySelector('.editor-attribute-choices .highlighted')
        if (highlightedAttrButton !== chosenAttribute) {
            chosenAttribute.classList.add('highlighted')
            highlightedAttrButton.classList.remove('highlighted')
        }

        switch (chosenAttribute.id) {
            case 'choice-size':
                showAttrContainer(scaleSliderContainer)
                break;
            case 'choice-color':
                showAttrContainer(colorEditorContainer)
                break;
            case 'choice-mirror':
                mirrorElement()
                break;
        }
    }))
}

function showAttrContainer(container) {
    const currentlyShownContainer = document.querySelector('.attribute-editor > div.shown')

    if (currentlyShownContainer !== container)
        document.querySelector('.attribute-editor > div.shown').classList.remove('shown')

    container.classList.add('shown')
}

function mirrorElement(element) {
    console.log('mirror')
}