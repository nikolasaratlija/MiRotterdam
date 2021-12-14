import {makeDesignFromJson} from "../../design-maker/utils/makeDesignFromJson.js";

fetch('api/designs')
    .then(res => res.json())
    .then(json => createCanvasOverview(json))

function createCanvasOverview(designs) {
    designs.forEach(design => {
        const canvas = makeDesignFromJson(design)
        document.getElementById('container').appendChild(canvas)
    })
}