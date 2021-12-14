const express = require('express')
const router = express.Router();
const fs = require('fs')
const path = require('path')
const conn = require('../database/connection')


router.get('/', (req, res) => {
    conn.query(
        `SELECT l.id                                   AS location_id,
                JSON_ARRAYAGG(JSON_OBJECT("name", name, "width", width, "position_x", position_x, "position_y",
                                          position_y)) AS elements
         FROM elements e
                  JOIN locations l ON l.id = e.design_id
         GROUP BY location_id;`,
        (err, rows) => {
            if (err)
                res.send(err)
            else
                res.send(rows)
        })
})

module.exports = router