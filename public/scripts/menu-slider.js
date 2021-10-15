(() => {
    const canvas = document.getElementById('canvas')

    // element menu
    let isElementMenuShown = false
    const elementMenuAnimation = gsap.timeline()
    elementMenuAnimation.to('.elements-menu-container', {duration: 0.2, left: 0})
    elementMenuAnimation.pause()

    document.getElementById('elements-menu-button').addEventListener('click', e => {
        if (!isElementMenuShown) {
            elementMenuAnimation.play()
            isElementMenuShown = !isElementMenuShown
        }
    })

    canvas.addEventListener('click', e => {
        if (isElementMenuShown) {
            elementMenuAnimation.reverse()
            isElementMenuShown = !isElementMenuShown
        }
    })

    // attribute editor
    const elementEditorButton = document.getElementById('menu-button')
    let isElementEditorShown = false
    const elementEditorAnimation = gsap.timeline()
    elementEditorAnimation.to('.element-editor', {duration: 0.2, top: 0})
    elementEditorAnimation.pause()

    elementEditorButton.addEventListener('click', e => {
        if (!isElementEditorShown) {
            elementEditorAnimation.play()
            isElementEditorShown = !isElementEditorShown
        } else {
            elementEditorAnimation.reverse()
            isElementEditorShown = !isElementEditorShown
        }
    })

    canvas.addEventListener('click', e => {
        if (isElementEditorShown) {
            elementEditorAnimation.reverse()
            isElementEditorShown = !isElementEditorShown
        }
    })
})()