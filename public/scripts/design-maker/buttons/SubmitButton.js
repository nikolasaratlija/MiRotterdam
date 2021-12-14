import {saveDesignAsJson} from "../utils/saveDesignAsJson.js";

export const submitButton = document.getElementById('ok-button')

export function submitImage() {
    saveDesignAsJson()
    window.location.href = '/verzenden'
}