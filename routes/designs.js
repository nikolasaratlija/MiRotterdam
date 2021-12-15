const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../database/connection')


router.get('/', (req, res) => {
    conn.query(
        `SELECT l.id AS location_id, e.image AS element_name, width, position_x, position_y
         FROM elements e
                  JOIN locations l ON l.id = e.design_id`,
        (err, rows) => {
            if (err) res.send(err)
            else res.send(reduceData(rows))
        })
})

function reduceData(designs) {
    let groupedDesigns = {}

    // i have no clue how this works
    designs.forEach(({location_id, element_name, width, position_x, position_y}) => {
        groupedDesigns[location_id] = groupedDesigns[location_id] || {location_id, elements: []}

        const element = {
            'element_name': element_name,
            'width': width,
            'position_x': position_x,
            'position_y': position_y
        }

        groupedDesigns[location_id].elements.push(element)
    })

    return Object.values(groupedDesigns)
}

module.exports = router