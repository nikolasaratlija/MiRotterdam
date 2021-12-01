import {deSelectElement} from "../canvas/Canvas.js";

import {elementsMenuButton} from "./ElementsMenu.js";
import {showElementsMenu} from "../elements-library/animation.js";

import {deleteButton, deleteElement} from "./Delete.js";
import {submitButton, submitImage} from "./Submit.js";

export function BottomMenu() {
    elementsMenuButton.addEventListener('click', () => {
        showElementsMenu()
    })

    deleteButton.addEventListener('click', () => {
        deSelectElement()
        deleteElement()
    })

    submitButton.addEventListener('click', () => {
        submitImage()
    })
}