// this file contains tests for the functions which group element data
const {groupByDesignId, groupByLocationId} = require("../scripts/queryUtils");

const {designOccurrencesPerLocation} = require("../public/scripts/admin/charts/utils")

test('Group all elements by design', () => {
    // Mock-up data object. Represents data fetched from the 'elements' table in the database. Contains 7 elements
    const elementsMockupData = [
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

    // this should be the result of putting 'testObject' through 'groupByDesign()'
    // it is intentionally hardcoded
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

    // the function groups the 'raw' data
    const designsGroupedByDesignId = groupByDesignId(elementsMockupData)

    // checks whether the function output matches the hardcoded object, if so, test passes
    expect(designsGroupedByDesignId).toMatchObject(expectedResult)
})

test('Group all elements by design', () => {
    // Mock-up data object. Represents data fetched from the 'elements' table in the database.
    const elementsMockupData = [
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
            "element_name": "g-Bloem1.png",
            "width": 100,
            "position_x": 215,
            "position_y": 255,
            "design_id": 11,
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
            "element_name": "g-Bloem3.png",
            "width": 100,
            "position_x": 81,
            "position_y": 460,
            "design_id": 11,
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

    // this should be the result of putting 'testObject' through 'groupByLocationId()'
    // it is intentionally hardcoded
    const expectedResult = [
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
                ,
                {
                    "design_id": 11,
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
                            "element_name": "o-Schommel.png",
                            "width": 135,
                            "position_x": 215,
                            "position_y": 401,
                        },
                        {
                            "element_name": "ss-Basketbal.png",
                            "width": 122,
                            "position_x": 34,
                            "position_y": 340,
                        }
                    ]
                }
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
                            "element_name": "g-Boom4.png",
                            "width": 100,
                            "position_x": 200,
                            "position_y": 200,
                        },
                        {
                            "element_name": "ss-Klimrek1.png",
                            "width": 100,
                            "position_x": 400,
                            "position_y": 400,
                        },
                        {
                            "element_name": "g-Boom4.png",
                            "width": 100,
                            "position_x": 200,
                            "position_y": 200,
                        }
                    ]
                }
            ]
        }
    ]

    // the function groups the 'raw' data
    const designsGroupedByLocationId = groupByLocationId(elementsMockupData)

    // checks whether the function output matches the hardcoded object, if so, test passes
    expect(designsGroupedByLocationId).toMatchObject(expectedResult)
})

test('Count design occurrences per location', () => {
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
                {
                    "design_id": 24,
                    "elements": [
                        {
                            "element_name": "",
                            "position_x": 0,
                            "position_y": 0,
                            "width": 0
                        }
                    ]
                },
                {
                    "design_id": 25,
                    "elements": [
                        {
                            "element_name": "",
                            "position_x": 0,
                            "position_y": 0,
                            "width": 0
                        }
                    ]
                }
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

    const designCountPerLocation = {
        "Beijerlandselaan": 1,
        "Retiefstraat": 2,
        "Coolsingel": 5,
        "Hofplein": 4,
        "Wilhelminaplein": 1
    }

    expect(designOccurrencesPerLocation(mockupLocationsData)).toMatchObject(designCountPerLocation)
})