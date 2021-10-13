const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require("fs");

// res.sendFile(path.join(__dirname, '../private/location_images/bg-1.png'))

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Ontwerpomgeving'})
});

router.get('/elements', (req, res) => {
    let filesArr = []

    fs.readdir(path.join(__dirname, '../public/assets/elements'), (err, files) => {
        filesArr = files
        res.send(filesArr)
    })
})

module.exports = router;
