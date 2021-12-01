const files = ['Bloem1.png', 'Bloem2.png', 'Bloem3.png', 'Picknick.png', 'Basketbal.png']

export const ElementsMenu = {
    loadElements: loadElements
}

function loadElements(elementOnClick) {
    files.forEach(file => {
        // adds images to menu
        let image = document.createElement('img')
        image.src = 'assets/elements/' + file
        document.getElementById('elements-menu').appendChild(image)

        // add image to canvas onclick
        image.addEventListener('click', (e) => elementOnClick(e.target))
    })
}