import {getLocationId} from "../utils/getLocationId.js";

const submitButton = document.getElementById('submit-design-button')

const confirmationModal = new bootstrap.Modal(
    document.getElementById('confirmationModal'),
    {
        backdrop: 'static',
        keyboard: false
    })

submitButton.addEventListener('click', () => {
    const locationId = parseInt(sessionStorage.getItem('locationId'))
    const elements = JSON.parse(sessionStorage.getItem('canvasElements'))

    const body = {
        location_id: locationId,
        elements: elements,
    }

    fetch('/api/designs',
        {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }
    )
        // .then(res => {
        //     confirmationModal.show()
        //
        //     setTimeout(() => {
        //         window.location.replace('/')
        //     }, 5000)
        // })
})