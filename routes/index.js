const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Welkom bij MiRotterdam'
    })
})

router.get('/intro', (req, res) => {
    res.render('intro', {
        title: 'MiRotterdam Intro'
    })
})

router.get('/ontwerpomgeving', (req, res) => {
    res.render('design-maker', {
        title: 'MiRotterdam Ontwerpomgeving',
        bodyClass: 'design-maker'
    })
})

router.get('/ontwerpomgeving/verzenden', (req, res) => {
    res.render('submit', {
        title: 'MiRotterdam Versturen'
    })
})

router.get('/test', ((req, res) => {
    res.render('test')
}))

module.exports = router;
