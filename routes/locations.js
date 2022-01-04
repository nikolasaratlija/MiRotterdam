const express = require('express')
const router = express.Router();
const conn = require('../database/connection')
const path = require('path')

const utils = require('./queryUtils.js')

// GET all locations
router.get('/', (req, res) => {
    conn.query('SELECT * FROM locations', (err, rows) => {
        if (err)
            res.send(err)
        else
            res.send(rows)
    })
})

// GET all designs grouped by each location
router.get('/designs', (req, res) => {
    conn.query(`
                SELECT e.image    AS element_name,
                       e.width,
                       e.position_x,
                       e.position_y,
                       e.design_id,
                       d.location_id,
                       l.location as location_name
                FROM elements e
                         INNER JOIN designs d ON d.id = e.design_id
                         INNER JOIN locations l ON l.id = d.location_id
                ORDER BY d.location_id`,
        (err, rows) => {
            if (err) res.send(err)
            else res.send(utils.groupByLocationId(rows))
        })
})

// GET location by id
router.get('/:id', (req, res) => {
    conn.query('SELECT * FROM locations WHERE id=?', [parseInt(req.params.id)], (err, row) => {
        if (err)
            res.send(err)
        else if (row.length === 0)
            res.status(404).send('Error 404, not found')
        else {
            row[0].image = req.originalUrl + '/image'
            res.send(row)
        }
    })
})

// GET image of specified location
router.get('/:id/image', (req, res) => {
    res.sendFile(path.join(__dirname, `../data/location_images/L-${req.params.id}.webp`))
})

// GET all designs of specified location
router.get('/:id/designs', (req, res) => {
    conn.query(
        `SELECT e.image AS element_name, e.width, e.position_x, e.position_y, e.design_id
         FROM elements e
                  INNER JOIN designs d ON d.id = e.design_id
                  INNER JOIN locations l ON l.id = d.location_id
         WHERE d.location_id = ?`, [parseInt(req.params.id)],
        (err, rows) => {
            if (err) res.send(err)
            else if (rows.length === 0)
                res.status(404).send('Error 404, not found')
            else res.send(utils.groupByDesignId(rows))
        })
})

// POST location
router.post('/', (req, res) => {
    //Het werkt nu wel via de form hierin komen dus dan de SQL uitvoeren en afbeelding naar folder.

    const naamInput = req.body.naam
    // const imageInput = req.body.fileToUpload
    const imageInput = req.files.fileToUpload

    console.log(imageInput)

    // conn.query(`INSERT INTO locations VALUE (?, ?, ?)`, [null, naamInput, null], (err, data) => {
    //     if (err)
    //         res.send(err)
    //     else {
    //         res.render('admin/locations-dashboard', {
    //             title: 'Locaties Dashboard',
    //             bodyClass: 'admin'
    //         })
    //     }
    // })
// Navigeren naar de pagina

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