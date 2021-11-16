const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'MiRotterdam',
        bodyClass: 'index'
    })
})

router.get('/ontwerpomgeving', (req, res) => {
    res.render('design-maker', {
        title: 'Ontwerpomgeving',
        bodyClass: 'design-maker'
    })
})

module.exports = router;
