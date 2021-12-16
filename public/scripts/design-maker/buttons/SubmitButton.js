import {saveDesignAsJson} from "../utils/saveDesignAsJson.js";

export const submitButton = document.getElementById('ok-button')

export function submitImage() {
    const designObject = saveDesignAsJson() // creates a JSON object from the canvas
    const designObjectJson = JSON.stringify(designObject)
    sessionStorage.setItem('designObject', designObjectJson) // sets a cookie where the JSON is kept
    window.location.href = '/ontwerpomgeving/verzenden' // redirect
}