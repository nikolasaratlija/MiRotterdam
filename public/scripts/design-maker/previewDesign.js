import {makeDesignFromJson} from "./utils/makeDesignFromJson.js";

const canvas = makeDesignFromJson(JSON.parse(sessionStorage.getItem('designObject')))

document.getElementById('design-preview-container').appendChild(canvas)
