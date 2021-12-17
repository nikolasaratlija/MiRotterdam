import {canvas} from "./Canvas.js";
import {getLocationId} from "../utils/getLocationId.js";

export function setImage() {
    const defaultLocationId = 5
    const locationId = getLocationId() || defaultLocationId // default location id of 5 for testing
    // set canvas background
    canvas.style.backgroundImage = `url('/api/locations/${locationId}/image')`
}