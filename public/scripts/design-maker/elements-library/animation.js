const menu = document.getElementById('elements-menu-container')
const closeMenuButton = document.getElementById('close-elements-menu')

export function toggleShow() {
    menu.classList.toggle('hidden')
}

closeMenuButton.addEventListener('click', () => {
    toggleShow()
})

