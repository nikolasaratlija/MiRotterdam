const utils = require("../scripts/queryUtils.js");

// Mock-up data object. Represents data fetched from the 'elements' table in the database. Contains 7 elements
const testObject = [
    {
        "element_name": "g-Bloem1.png",
        "width": 100,
        "position_x": 215,
        "position_y": 255,
        "design_id": 4,
        "location_id": 5,
        "location_name": "Beijerlandselaan"
    },
    {
        "element_name": "g-Bloem3.png",
        "width": 100,
        "position_x": 81,
        "position_y": 460,
        "design_id": 4,
        "location_id": 5,
        "location_name": "Beijerlandselaan"
    },
    {
        "element_name": "o-Schommel.png",
        "width": 135,
        "position_x": 215,
        "position_y": 401,
        "design_id": 8,
        "location_id": 7,
        "location_name": "Retiefstraat"
    },
    {
        "element_name": "ss-Basketbal.png",
        "width": 122,
        "position_x": 34,
        "position_y": 340,
        "design_id": 8,
        "location_id": 7,
        "location_name": "Retiefstraat"
    },
    {
        "element_name": "g-Boom4.png",
        "width": 100,
        "position_x": 200,
        "position_y": 200,
        "design_id": 10,
        "location_id": 17,
        "location_name": "Hofplein"
    },
    {
        "element_name": "ss-Klimrek1.png",
        "width": 100,
        "position_x": 400,
        "position_y": 400,
        "design_id": 10,
        "location_id": 17,
        "location_name": "Hofplein"
    },
    {
        "element_name": "g-Boom4.png",
        "width": 100,
        "position_x": 200,
        "position_y": 200,
        "design_id": 10,
        "location_id": 17,
        "location_name": "Hofplein"
    },
]

test('Group all elements by design', () => {
    // this should be the result of putting 'testObject' through 'groupByDesign()'
    // it contains an array with 3 designs
    const expectedResult = [
        {
            "design_id": 4,
            "location_id": 5,
            "location_name": "Beijerlandselaan",
            "elements": [
                {
                    "element_name": "g-Bloem1.png",
                    "position_x": 215,
                    "position_y": 255,
                    "width": 100
                },
                {
                    "element_name": "g-Bloem3.png",
                    "position_x": 81,
                    "position_y": 460,
                    "width": 100
                }
            ]
        },
        {
            "design_id": 8,
            "location_id": 7,
            "location_name": "Retiefstraat",
            "elements": [
                {
                    "element_name": "o-Schommel.png",
                    "position_x": 215,
                    "position_y": 401,
                    "width": 135
                },
                {
                    "element_name": "ss-Basketbal.png",
                    "position_x": 34,
                    "position_y": 340,
                    "width": 122
                }
            ]
        },
        {
            "design_id": 10,
            "location_id": 17,
            "location_name": "Hofplein",
            "elements": [
                {
                    "element_name": "g-Boom4.png",
                    "position_x": 200,
                    "position_y": 200,
                    "width": 100
                },
                {
                    "element_name": "ss-Klimrek1.png",
                    "position_x": 400,
                    "position_y": 400,
                    "width": 100
                },
                {
                    "element_name": "g-Boom4.png",
                    "position_x": 200,
                    "position_y": 200,
                    "width": 100
                }
            ]
        },
    ]

    expect(utils.groupByDesignId(testObject).value()).toStrictEqual(expectedResult)
})