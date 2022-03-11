import {canvas} from "./Canvas.js";
import {getLocationId} from "../utils/getLocationInfo.js";

export const setImage = () => canvas.style.backgroundImage = `url('/api/locations/${getLocationId()}/image')`
