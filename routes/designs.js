const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../database/connection')

// get all designs, includes the location id and elements
router.get('/', (req, res) => {
    conn.query(
        `SELECT e.image AS element_name, e.width, e.position_x, e.position_y, e.design_id, d.location_id
         FROM elements e
                  INNER JOIN designs d ON d.id = e.design_id
                  INNER JOIN locations l ON l.id = d.location_id
        ORDER BY d.location_id`,
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

    // I have no clue why this works
    designs.forEach(({location_id, element_name, width, position_x, position_y, design_id}) => {
        console.log(element_name)
        groupedDesigns[design_id] = groupedDesigns[design_id] || {design_id, location_id, elements: []}

        const element = {
            'element_name': element_name,
            'width': width,
            'position_x': position_x,
            'position_y': position_y,
        }

        groupedDesigns[design_id].elements.push(element)
    })

    return Object.values(groupedDesigns)
}

module.exports = router