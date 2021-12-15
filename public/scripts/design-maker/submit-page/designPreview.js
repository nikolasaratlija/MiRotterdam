import {makeDesignFromJson} from "../utils/makeDesignFromJson.js";

const designContainer = document.getElementById('design-preview-container')

const canvas = makeDesignFromJson(
    JSON.parse(sessionStorage.getItem('designObject')))

designContainer.appendChild(canvas)
