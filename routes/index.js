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

router.get('/ontwerpen', (req, res) => {
    res.render('design-maker', {
        title: 'MiRotterdam Ontwerpomgeving',
        bodyClass: 'design-maker'
    })
})

router.get('/ontwerpen/verzenden', (req, res) => {
    res.render('submit', {
        title: 'MiRotterdam Versturen'
    })
})

router.get('/test', ((req, res) => {
    res.render('test')
}))

module.exports = router;
