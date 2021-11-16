const express = require('express')
const router = express.Router();
const conn = require('../database/connection')
const path = require('path')

// GET all locations
router.get('/', (req, res) => {
    conn.query('SELECT * FROM locations', (err, rows) => {
        if (err)
            res.send(err)
        else
            res.send(rows)
    })
})

// GET location
router.get('/:id', (req, res) => {
    conn.query('SELECT * FROM locations WHERE id=?', [parseInt(req.params.id)], (err, row) => {
        if (err)
            res.send(err)
        else if (row.length === 0)
            res.status(404).send('Error 404, not found')
        else {
            row[0].image = req.protocol + '://' + req.get('host') + req.originalUrl + '/image'
            res.send(row)
        }
    })
})

// GET image of location
router.get('/:id/image', (req, res) => {
    res.sendFile(path.join(__dirname, `../private/location_images/L-${req.params.id}.png`))
})

// POST location
router.post('/', (req, res) => {
    conn.query(`INSERT INTO locations VALUE (?, ?, ?)`, [null, req.body.location, req.body.image || null], (err, data) => {
        if (err)
            res.send(err)
        else
            res.send(data)
    })
})

// DELETE location
router.delete('/:id', (req, res) => {
    conn.query('DELETE FROM locations WHERE id=?', [parseInt(req.params.id)], (err, data) => {
        if (err)
            res.send(err)
        else
            res.send(data)
    })
})

// PUT location
router.put('/:id', (req, res) => {
    let setClause = ''

    if (req.body.location)
        setClause += 'location=? '

    if (req.body.image)
        setClause += 'image=? '

    // creates an array containing the values of the req.body, ignoring empty values, and appends param.id
    const values = Object.values(req.body).filter(el => el !== '').concat(req.params.id)

    conn.query(`UPDATE locations
                SET ${setClause}
                WHERE id = ?`, values, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send(data)
    })
})

module.exports = router