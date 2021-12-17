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
            body: sessionStorage.getItem('designObject')
        }
    )
        .then(res => {
            confirmationModal.show()

            setTimeout(() => {
                window.location.replace('/')
            }, 5000)
        })
})