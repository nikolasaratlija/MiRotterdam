import {canvas} from "./Canvas.js";

export const setImage = () => canvas.style.backgroundImage = `url('/api/locations/${sessionStorage.locationId}/image')`
