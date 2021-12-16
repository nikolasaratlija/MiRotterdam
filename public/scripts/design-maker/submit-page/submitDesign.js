const submitButton = document.getElementById('submit-design-button')

submitButton.addEventListener('click', () => {
    fetch('/api/designs',
        {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: sessionStorage.getItem('designObject')
        }
    )
        .then(res => {
            console.log(res)
        })
})