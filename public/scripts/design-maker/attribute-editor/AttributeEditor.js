import {updateSlider} from "./ElementSizeSlider.js";
import {setChosenElement} from "./ColorChooser.js";
import {mirrorElement} from "./mirrorElement.js";

const menuHintText = document.getElementById('menu-hint')

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

const choiceMirror = document.getElementById('choice-mirror')

export function setElement(element) {
    // TODO: refactor the way elements are selected, because it's currently inconsistent
    updateSlider(element)
    setChosenElement(element)

    menuHintText.classList.add('d-none') // hide menu tip

    buttonMenuPairs[0].button.classList.add('highlighted')
    buttonMenuPairs[0].menu.classList.add('shown')

    buttonMenuPairs.forEach(pair => { // remove highlight and make disable buttons
        pair.button.disabled = false
    })
}

export function hideElementEditor() {
    menuHintText.classList.remove('d-none') // show menu tip when no element is selected

    buttonMenuPairs.forEach(pair => {
        pair.button.disabled = true
        pair.button.classList.remove('highlighted')
        pair.menu.classList.remove('shown')
    })
}

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
