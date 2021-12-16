import {toggleShow} from "./animation.js";

export const ElementsMenu = {
    loadElements: loadElements,
    toggleShow: toggleShow,
}

function loadElements(elementOnClick) {
    fetch('/api/elements')
        .then(res => res.json())
        .then(files => files.forEach(file => {
            // creates HTML imag element
            let image = document.createElement('img')
            image.src = '/assets/elements/' + file

            const filePrefix = file.split('-')[0]

            let menu;
            // Switch case for each theme. Looks at prefix of file and appends image element to correct menu
            switch (filePrefix) {
                case 'g':   // Thema Groen
                    menu = document.getElementById('menu-groen')
                    break
                case 'ss':  // Thema Spel & Sport
                    menu = document.getElementById('menu-spelsport')
                    break
                case 'v':   // Thema Veilig
                    menu = document.getElementById('menu-veilig')
                    break
                case 'o':   // Thema Ontspanning
                    menu = document.getElementById('menu-ontspanning')
                    break
                default:    // No/Unrecognized prefix
                    console.error(`Prefix of '${filePrefix}' in file-name '${file}' not recognized.`)
                    break
            }

            menu.appendChild(image) // Append image to correct menu

            // onclick, adds this image to the canvas
            image.addEventListener('click', (e) => elementOnClick(e.target))
        }))
}

document.querySelectorAll('.theme-container button').forEach(button => {
    button.addEventListener('click', e => {
        const el = e.target

        el.classList.toggle('btn-light')
        el.classList.toggle('btn-primary')
    })
})