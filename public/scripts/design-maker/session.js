import {getLocationId} from "./utils/getLocationId.js";

export async function setSessionVars() {
    const locationId = getLocationId()

    const data = await fetch(`/api/locations/${locationId}`)
    const json = await data.json()
    sessionStorage.setItem('locationId', locationId)
    sessionStorage.setItem('locationName', json[0]['location'])
}
