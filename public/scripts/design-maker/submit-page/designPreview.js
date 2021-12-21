import {makeDesignFromJson} from "../utils/makeDesignFromJson.js";

// creates a canvas from the design object created from the canvas
const canvas = makeDesignFromJson(
    JSON.parse(sessionStorage.designObject))

const designContainer = document.getElementById('design-preview-container')
designContainer.appendChild(canvas)
