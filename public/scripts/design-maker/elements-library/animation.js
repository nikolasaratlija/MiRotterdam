import {canvas} from "../canvas/Canvas.js";

const animation = gsap.timeline() // animation
animation.to('.elements-menu-container', {duration: 0.2, left: 0})
animation.pause()

let menuIsShown = false

export function showElementsMenu() {
    animation.play()
    menuIsShown = !menuIsShown
}

export function hideElementsMenu() {
    animation.reverse()
    menuIsShown = !menuIsShown
}

canvas.addEventListener('click', () => {
    if (!menuIsShown) return // disable event listener if menu is not shown

    hideElementsMenu()
})

