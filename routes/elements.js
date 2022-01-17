const express = require('express')
const router = express.Router()

const fs = require('fs')
const path = require('path');
const conn = require("../database/connection");

// retrieves an array of all elements in specified folder
router.get('/', (req, res) => {
    fs.readdir(path.join(__dirname, '../public/assets/elements'), (err, files) => {
        res.send(files)
    })
})

module.exports = router