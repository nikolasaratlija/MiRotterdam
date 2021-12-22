import {updateSlider} from "./ElementSizeSlider.js";
import {setChosenElement} from "./ColorChooser.js";
import {mirrorElement} from "./mirrorElement.js";

const elementEditorAnimation = gsap.timeline() // animation
elementEditorAnimation.to('.element-editor', {duration: 0.2, top: 0})
elementEditorAnimation.pause()

export function showElementEditor(element) {
    // TODO: refactor the way elements are selected, because it's currently inconsistent
    // set element in element editor
    updateSlider(element)
    setChosenElement(element)

    elementEditorAnimation.play() // play animation
}

export function hideElementEditor() {
    elementEditorAnimation.reverse()
}

const choiceMirror = document.getElementById('choice-mirror')

const buttonMenuPairs = [
    {
        'button': document.getElementById('choice-size'),
        'menu': document.getElementById('scale-slider-container')
    },
    {
        'button': document.getElementById('choice-color'),
        'menu': document.getElementById('color-choices-container')
    }
]

export function AttributeEditor() {
    buttonMenuPairs.forEach(pair => {
        pair.button.addEventListener('click', () => {
            removeButtonHighlight(pair.button)
            showAttrContainer(pair.menu)
            pair.button.classList.add('highlighted')
        })
    })

    choiceMirror.addEventListener('click', button => {
        mirrorElement()
    })
}

function removeButtonHighlight(button) {
    const highlightedButton = document.querySelector('.editor-attribute-choices .highlighted')

    if (highlightedButton !== button)
        highlightedButton.classList.remove('highlighted')
}

function showAttrContainer(container) {
    const currentlyShownContainer = document.querySelector('.attribute-editor > div.shown')

    if (currentlyShownContainer !== container)
        document.querySelector('.attribute-editor > div.shown').classList.remove('shown')

    container.classList.add('shown')
}
