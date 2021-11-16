const editorChoices = document.querySelectorAll('.editor-attribute-choices')

const colorEditorContainer = document.getElementById('color-choices-container')
const scaleSliderContainer = document.getElementById('scale-slider-container')

export function AttributeEditor() {
    editorChoices.forEach(el => el.addEventListener('click', e => {
        const choiceElement = e.target

        document.querySelector('.editor-attribute-choices .highlighted').classList.remove('highlighted')
        choiceElement.classList.add('highlighted')

        switch (choiceElement.id) {
            case 'choice-size':
                showContainer(scaleSliderContainer)
                break;
            case 'choice-color':
                showContainer(colorEditorContainer)
                break;
            case 'choice-mirror':
                mirrorElement()
                break;
        }
    }))
}

function showContainer(container) {
    const currentlyShownContainer = document.querySelector('.attribute-editor > div.shown')

    if (currentlyShownContainer !== container)
        document.querySelector('.attribute-editor > div.shown').classList.remove('shown')

    container.classList.add('shown')
}

function mirrorElement(element) {
    console.log('mirror')
}