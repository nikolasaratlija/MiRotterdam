(() => {
    let animation = gsap.timeline()
    animation.to('.menu-container', {duration: 0.2, left: 0})
    animation.to('.menu-button', {duration: 0.1, rotation: 180})
    animation.pause()

    let isMenuShown = false
    document.getElementById('menu-button').addEventListener('click', e => {
        if (!isMenuShown)
            animation.play()
        else
            animation.reverse()
        isMenuShown = !isMenuShown
    })
})()