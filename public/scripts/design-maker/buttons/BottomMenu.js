import {deSelectElement} from "../canvas/Canvas.js";

import {ElementsMenu} from "../elements-library/ElementsMenu.js";
import {elementsMenuButton} from "./ElementsMenuButton.js";

import {deleteButton, deleteElement} from "./DeleteElementButton.js";
import {submitButton, submitImage} from "./SubmitButton.js";

export function BottomMenu() {
    elementsMenuButton.addEventListener('click', () => {
        ElementsMenu.toggleShow()
    })

    deleteButton.addEventListener('click', () => {
        deSelectElement()
        deleteElement()
    })

    submitButton.addEventListener('click', () => {
        submitImage()
    })
}