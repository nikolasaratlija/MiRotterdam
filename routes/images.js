const express = require('express')
const router = express.Router()

const fs = require('fs')
const conn = require('../scripts/connection')

router.get('/', (req, res) => {
    res.send('images')
})

module.exports = router