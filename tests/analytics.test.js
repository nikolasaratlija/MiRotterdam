const {designOccurrencesPerLocation, elementOccurrencesPerLocation} = require("../public/scripts/admin/charts/utils");
const mockupLocationsData = [
    {
        "location_id": 5,
        "location_name": "Beijerlandselaan",
        "designs": [
            {
                "design_id": 4,
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
            }
        ]
    },
    {
        "location_id": 7,
        "location_name": "Retiefstraat",
        "designs": [
            {
                "design_id": 8,
                "elements": [
                    {
                        "element_name": "ss-Basketbal.png",
                        "position_x": 34,
                        "position_y": 340,
                        "width": 122
                    },
                    {
                        "element_name": "o-Schommel.png",
                        "position_x": 215,
                        "position_y": 401,
                        "width": 135
                    }
                ]
            },
            {
                "design_id": 9,
                "elements": [
                    {
                        "element_name": "ss-Speeltoestel.png",
                        "position_x": 41,
                        "position_y": 432,
                        "width": 124
                    },
                    {
                        "element_name": "ss-Speelkasteel.png",
                        "position_x": 197,
                        "position_y": 586,
                        "width": 146
                    }
                ]
            }
        ]
    },
    {
        "location_id": 16,
        "location_name": "Coolsingel",
        "designs": [
            {
                "design_id": 19,
                "elements": [
                    {
                        "element_name": "o-Picknick.png",
                        "position_x": 47,
                        "position_y": 478,
                        "width": 154
                    }
                ]
            },
            {
                "design_id": 22,
                "elements": [
                    {
                        "element_name": "o-Picknick.png",
                        "position_x": 47,
                        "position_y": 478,
                        "width": 154
                    }
                ]
            },
            {
                "design_id": 23,
                "elements": [
                    {
                        "element_name": "o-Picknick.png",
                        "position_x": 47,
                        "position_y": 478,
                        "width": 154
                    }
                ]
            },
        ]
    },
    {
        "location_id": 17,
        "location_name": "Hofplein",
        "designs": [
            {
                "design_id": 10,
                "elements": [
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
                    },
                    {
                        "element_name": "g-Boom4.png",
                        "position_x": 200,
                        "position_y": 200,
                        "width": 100
                    }
                ]
            },
            {
                "design_id": 11,
                "elements": [
                    {
                        "element_name": "o-Picknick.png",
                        "position_x": 200,
                        "position_y": 200,
                        "width": 100
                    },
                    {
                        "element_name": "o-Schommel.png",
                        "position_x": 400,
                        "position_y": 400,
                        "width": 100
                    }
                ]
            },
            {
                "design_id": 20,
                "elements": [
                    {
                        "element_name": "o-Picknick.png",
                        "position_x": 47,
                        "position_y": 478,
                        "width": 154
                    }
                ]
            },
            {
                "design_id": 21,
                "elements": [
                    {
                        "element_name": "o-Picknick.png",
                        "position_x": 47,
                        "position_y": 478,
                        "width": 154
                    }
                ]
            }
        ]
    },
    {
        "location_id": 18,
        "location_name": "Wilhelminaplein",
        "designs": [
            {
                "design_id": 15,
                "elements": [
                    {
                        "element_name": "g-Bloem1.png",
                        "position_x": 215,
                        "position_y": 400,
                        "width": 100
                    },
                    {
                        "element_name": "g-Bloem1.png",
                        "position_x": 215,
                        "position_y": 255,
                        "width": 100
                    }
                ]
            }
        ]
    }
]

test('Count design occurrences per location', () => {
    const designCountPerLocationExpectedResult = {
        "Beijerlandselaan": 1,
        "Retiefstraat": 2,
        "Coolsingel": 3,
        "Hofplein": 4,
        "Wilhelminaplein": 1
    }

    expect(designOccurrencesPerLocation(mockupLocationsData))
        .toMatchObject(designCountPerLocationExpectedResult)
})

test('Element occurrences per location', () => {
    const elementOccurrencesPerLocationExpectedResult = {
        "Beijerlandselaan": {
            "g-Bloem1.png": 1,
            "g-Bloem3.png": 1
        },
        "Retiefstraat": {
            "ss-Basketbal.png": 1,
            "o-Schommel.png": 1,
            "ss-Speeltoestel.png": 1,
            "ss-Speelkasteel.png": 1
        },
        "Coolsingel": {
            "o-Picknick.png": 3,
        },
        "Hofplein": {
            "ss-Klimrek1.png": 1,
            "g-Boom4.png": 2,
            "o-Picknick.png": 3,
            "o-Schommel.png": 1
        },
        "Wilhelminaplein": {
            "g-Bloem1.png": 2
        }
    }

    expect(elementOccurrencesPerLocation(mockupLocationsData))
        .toMatchObject(elementOccurrencesPerLocationExpectedResult)
})