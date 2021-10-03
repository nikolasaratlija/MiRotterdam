(() => {
    let tween = gsap.to('.menu-container', {duration: 0.2, left: 0}) // GSAP animation
    tween.pause()

    let isMenuShown = false
    document.getElementById('menu-button').addEventListener('click', e => {
        if (!isMenuShown)
            tween.play()
        else
            tween.reverse()
        isMenuShown = !isMenuShown
    })
})()