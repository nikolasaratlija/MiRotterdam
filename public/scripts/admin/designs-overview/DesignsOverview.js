import {makeDesignFromJson} from "../../design-maker/utils/makeDesignFromJson.js";

fetch('/api/designs')
    .then(res => res.json())
    .then(json => createCanvasOverview(json))

function createCanvasOverview(designsData) {
    designsData.forEach(designData => {
        const canvas = makeDesignFromJson(designData)
        document.getElementById('design-container').appendChild(canvas)
    })
}