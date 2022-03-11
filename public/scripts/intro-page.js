import {setSessionVars} from "./design-maker/session.js";

document.getElementById('playbtn').addEventListener('click', () => {
    document.getElementById('herobox').classList.add('d-none') // hides hero box
    document.getElementById('about').classList.remove('d-none') // shows slider
})

setSessionVars() // sets variables in session.storage, particularly the location id and name

document.getElementById('location-name').innerText = sessionStorage.locationName

// set link of button which will send the user to the design maker
document.getElementById('design-maker-button').addEventListener('click', () =>
    window.location.href = `/ontwerpen?locatie=${sessionStorage.locationId}`)