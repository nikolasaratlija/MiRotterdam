(() => {
    let animation = gsap.timeline()
    animation.to('.elements-menu-container', {duration: 0.2, left: 0})
    animation.pause()

    let isMenuShown = false

    document.getElementById('elements-menu-button').addEventListener('click', e => {
        if (!isMenuShown)
        {
            animation.play()
            isMenuShown = !isMenuShown
        }
    })

    document.getElementById('canvas').addEventListener('click', e => {
        if (isMenuShown)
        {
            animation.reverse()
            isMenuShown = !isMenuShown
        }
    })
})()