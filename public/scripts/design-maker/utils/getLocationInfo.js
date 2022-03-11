export function getLocationId() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.locatie
}

export async function getLocationName() {
    const locationId = getLocationId()
    const data = await fetch(`/api/locations/${locationId}`)
    const json = await data.json()
    return json[0]['location']
}