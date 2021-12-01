import {canvas} from "./Canvas.js";

export function setImage() {
    const defaultLocationId = 5
    const locationId = getLocationId() || defaultLocationId // default location id of 5 for testing

    // set background of canvas
    canvas.style.backgroundImage
        = `url('${window.location.protocol}//${window.location.host}/api/locations/${locationId}/image')`
}

function getLocationId() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.location
}