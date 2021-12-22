import {backgroundImage} from "./Canvas.js";

export const setImage = () => backgroundImage.src = `/api/locations/${sessionStorage.locationId}/image`
