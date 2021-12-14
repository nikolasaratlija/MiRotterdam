import {makeDesignFromJson} from "./utils/makeDesignFromJson.js";

makeDesignFromJson(
    document.getElementById('design-preview-container'),
    JSON.parse(sessionStorage.getItem('designObject'))
)