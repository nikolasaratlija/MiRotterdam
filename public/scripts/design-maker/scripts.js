import {ElementsMenu} from "./elements-library/ElementsMenu.js";
import {toggleShow as toggleShowElementsMenu} from "./elements-library/animation.js";

import * as canvas from "./canvas/Canvas.js"
import {setImage as setCanvasImage} from "./canvas/setImage.js";

import {AttributeEditor} from "./attribute-editor/AttributeEditor.js"
import {SizeSlider} from "./attribute-editor/ElementSizeSlider.js"

import {BottomMenu} from "./buttons/BottomMenu.js";
import {getLocationId} from "./utils/getLocationId.js";

import {setSessionVars} from "./session.js";

// UNCOMMENT WHEN TESTING/DEVELOPING: sets new session variables if the location id in the query string is different from what is stored in cookies
// if (!(sessionStorage.locationId === getLocationId()))
//    setSessionVars()

// Loads element-library with elements, and sets click events on each element to show them on canvas
ElementsMenu.loadElements(element => {
    // callback function for clicking on an element in the library
    canvas.addElement(element.src) // takes the src of the clicked image and creates a new element on the canvas
    toggleShowElementsMenu()  // hide menu when an user adds element
})

setCanvasImage() // Sets the canvas image

AttributeEditor() // Initializes the attribute-editor menu
SizeSlider(canvas.imageWidth) // Initializes size-slider

BottomMenu() // Initializes buttons of bottom menu
