const express = require('express')
const router = express.Router();
const conn = require('../scripts/connection')

// GET all locations
router.get('/', (req, res) => {
    conn.query('SELECT * FROM locations', (err, rows) => res.send(rows))
})

// GET location
router.get('/:id', (req, res) => {
    conn.query('SELECT * FROM locations WHERE id=?', [parseInt(req.params.id)], (err, row) => {
        if (row.length === 0)
            res.status(404).send('Error 404, not found')
        else
            res.send(row)
    })
})

// POST location
router.post('/', (req, res) => {
    conn.query(`INSERT INTO locations VALUE (?, ?, ?)`, [null, req.body.street, req.body.image || null], (err, data) => {
        res.send(data)
    })
})

// DELETE location
router.delete('/:id', (req, res) => {
    conn.query('DELETE FROM locations WHERE id=?', [parseInt(req.params.id)], (err, data) => {
        res.send(data)
    })
})

// PUT location
router.put('/:id', (req, res) => {
    let setClause = ''

    if (req.body.street)
        setClause += 'street=? '

    if (req.body.image)
        setClause += 'image=? '

    // creates an array containing the values of the req.body, ignoring empty values, and appends param.id
    const values = Object.values(req.body).filter(el => el !== '').concat(req.params.id)

    conn.query(`UPDATE locations SET ${setClause} WHERE id=?`, values, (err, data) => {
        res.send(data)
    })
})

module.exports = router