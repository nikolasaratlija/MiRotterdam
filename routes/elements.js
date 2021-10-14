const express = require('express')
const router = express.Router()

const fs = require('fs')
const path = require("path");

router.get('/', (req, res) => {
    let filesArr = []

    fs.readdir(path.join(__dirname, '../public/assets/elements'), (err, files) => {
        filesArr = files
        res.send(filesArr)
    })
})

module.exports = router