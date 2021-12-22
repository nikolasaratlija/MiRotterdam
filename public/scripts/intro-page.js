import {setSessionVars} from "./design-maker/session.js";

// sets variables in session.storage, particularly the location id and name
await setSessionVars()

document.getElementById('location-name').innerText = sessionStorage.locationName

// set link of button which will send the user to the design maker
document.getElementById('design-maker-button').addEventListener('click', () =>
    window.location.href = `/ontwerpen?locatie=${sessionStorage.locationId}`)