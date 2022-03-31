import {saveLocationNameInSession} from "./design-maker/session.js";
import {getLocationId, getLocationName} from "./design-maker/utils/getLocationInfo.js";

document.getElementById('playbtn').addEventListener('click', () => {
    document.getElementById('herobox').classList.add('d-none') // hides hero box
    document.getElementById('about').classList.remove('d-none') // shows slider
});

(async () => {
    const locationName = await getLocationName()

    saveLocationNameInSession(locationName) // saves name of current location in session variables

    document.getElementById('location-name').innerText = locationName // set locationname field on the first screen

    // set link of button which will send the user to the design maker
    document.getElementById('design-maker-button').addEventListener('click', () =>
        window.location.href = `/ontwerpen?locatie=${getLocationId()}`)
})()
