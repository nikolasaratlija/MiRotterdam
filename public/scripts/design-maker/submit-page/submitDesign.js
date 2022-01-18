const submitButton = document.getElementById('submit-design-button')

const confirmationModal = new bootstrap.Modal(
    document.getElementById('confirmationModal'),
    {
        backdrop: 'static',
        keyboard: false
    })

submitButton.addEventListener('click', () => {
    fetch('/api/designs',
        {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: sessionStorage.designObject // design data object
        }
    )
        .then(res => {
            confirmationModal.show() // show popup

            // redirect to homepage in 5 seconds
            setTimeout(() => {
                window.location.replace('/')
            }, 5000)
        })
})
