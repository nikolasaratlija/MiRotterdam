const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../database/connection')


router.get('/', (req, res) => {
    conn.query(
        `SELECT l.id AS location_id, e.image AS element_name, width, position_x, position_y
         FROM elements e
                  JOIN locations l ON l.id = e.location_id`,
        (err, rows) => {
            if (err) res.send(err)
            else res.send(reduceData(rows))
        })
})

router.post('/', ((req, res) => {
    const elementsObj = req.body.elements
    const locationId = req.body.location_id

    // inserts design into database
    conn.query('INSERT INTO designs (location_id) VALUE (?)', [locationId], (err, data) => {
        if (err) res.send(err)
        else insertElements(data['insertId']) // response returns the id of new design
    })

    // insert design elements into database
    const insertElements = (design_id) => {
        const elementsArr = elementsObj.map(
            elements => Object.values(elements).concat(design_id)) // turn object into a 2d array

        const insertQuery = `INSERT INTO elements (image, width, position_x, position_y, design_id)
                             VALUES ?`

        conn.query(insertQuery, [elementsArr], (err, data) => {
            if (err) res.send(err)
            else res.send(data)
        })
    }
}))

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