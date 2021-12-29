import {getSelectedElement} from "../utils/getSelectedElement.js";

export function mirrorElement() {
    const element = getSelectedElement()

    if (element.classList.contains('mirrored')) {
        gsap.set(element, {scaleX: 1}) // unmirrors image
        element.classList.remove('mirrored') // remove mirrored tag
    } else {
        gsap.set(element, {scaleX: -1})
        element.classList.add('mirrored') // tag element as mirrored
    }
}