export const deleteButton = document.getElementById('delete-button')

let selectedElement;

export function deleteElement() {
    selectedElement.remove()
}

export function toggleEnabled(element) {
    if (element) selectedElement = element

    deleteButton.disabled = !deleteButton.disabled
}