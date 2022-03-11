import {getLocationId} from "./utils/getLocationId.js";

// this function is used to store the id and name of the location in cookies,
// so that the data can be carried over to other pages
export function setSessionVars() {
    const locationId = getLocationId() // get query string from url

    fetch(`/api/locations/${locationId}`)
        .then(data => data.json())
        .then(json => {
            sessionStorage.setItem('locationId', locationId)
            sessionStorage.setItem('locationName', json[0]['location'])
        })
}
