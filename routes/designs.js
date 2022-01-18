const express = require('express')
const router = express.Router()
const conn = require('../database/connection')
const fs = require('fs')

const utils = require("../scripts/queryUtils.js");

// get all designs, includes the location id and elements
router.get('/', (req, res) => {
    conn.query(`
                SELECT e.image AS element_name,
                       e.design_id,
                       d.location_id,
                       DATE_FORMAT(d.date, '%Y-%m-%d') AS date,
                       l.location AS location_name
                FROM elements e
                         INNER JOIN designs d ON d.id = e.design_id
                         INNER JOIN locations l ON l.id = d.location_id
                ORDER BY e.design_id`,
        (err, rows) => {
            if (err) res.send(err)
            else res.send(utils.groupByDesignId(rows))
        })
})

router.get('/:id/canvas_image', ((req, res) => {
    conn.query(`
                SELECT image
                from designs
                WHERE id = ?`
        , [parseInt(req.params.id)],
        (err, imageBufferInfo) => {
            if (err) res.send(err)
            else if (imageBufferInfo.length === 0)
                res.status(404).send('Error 404, not found')
            else {
                const buffer = new Buffer(imageBufferInfo[0].image) // creates a buffer object
                const bufferBase64 = buffer.toString('base64') // converts buffer into base64 object
                res.send(bufferBase64)
            }
        })
}))

router.get('/:id', ((req, res) => {
    conn.query(`
                SELECT e.image    AS element_name,
                       e.design_id,
                       d.location_id,
                       l.location AS location_name
                FROM elements e
                         INNER JOIN designs d ON d.id = e.design_id
                         INNER JOIN locations l ON l.id = d.location_id
                WHERE e.design_id = ?`,
        [parseInt(req.params.id)],
        (err, rows) => {
            if (err) res.send(err)
            else if (rows.length === 0)
                res.status(404).send('Error 404, not found')
            else res.send(rows)
        })
}))

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

module.exports = router