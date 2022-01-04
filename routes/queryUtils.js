const _ = require('lodash')

module.exports = {
    // returns an array of all designs containing all its elements
    groupByDesignId: elements => _
        .chain(elements)
        .groupBy('design_id')
        .map((elementData, key) => ({
                design_id: parseInt(key),
                location_id: elementData[0].location_id,
                location_name: elementData[0].location_name,
                elements: elementData.map(element => Element(element))
            })
        ),

    // returns an array of each location containing every design that has been made in that location
    // each design also contains every element
    groupByLocationId: elements => _
        .chain(elements)
        .groupBy('location_id')
        .map((values, key) => ({
                location_id: parseInt(key),
                location_name: values[0].location_name,
                designs: _
                    .chain(values)
                    .groupBy('design_id')
                    .map((elementData, key) => ({
                            design_id: parseInt(key),
                            elements: elementData.map(element => Element(element))
                        })
                    )
            })
        ),

    // temp
    selectAllElements: (conn, callback) =>
        conn.query(
            `SELECT e.image AS element_name, e.width, e.position_x, e.position_y, e.design_id, d.location_id
             FROM elements e
                      INNER JOIN designs d ON d.id = e.design_id
                      INNER JOIN locations l ON l.id = d.location_id`,
            (err, rows) => callback(err, rows))
}

// represents a type for an element
const Element = element => ({
    element_name: element.element_name,
    position_x: element.position_x,
    position_y: element.position_y,
    width: element.width
})