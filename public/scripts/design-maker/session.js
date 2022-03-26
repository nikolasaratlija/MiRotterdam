// this function is used to store and name of the location in cookies,
export function saveLocationNameInSession(locationName) {
    sessionStorage.setItem('locationName', locationName)
}
