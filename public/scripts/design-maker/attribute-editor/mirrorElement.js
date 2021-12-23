import {getSelectedElement} from "../utils/getSelectedElement.js";

export function mirrorElement() {
    gsap.set(getSelectedElement(), {scaleX: -1})
}