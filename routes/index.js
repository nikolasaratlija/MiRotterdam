const express = require('express')
const router = express.Router()

//Route to get to home page.
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Welkom bij MiRotterdam'
    })
})

//Route to get to the intro page.
router.get('/intro', (req, res) => {
    res.render('intro', {
        title: 'MiRotterdam Intro'
    })
})

//Route to get to the design page.
router.get('/ontwerpen', (req, res) => {
    res.render('design-maker', {
        title: 'MiRotterdam Ontwerpomgeving',
        bodyClass: 'design-maker'
    })
})

//Route to get to send design page.
router.get('/ontwerpen/verzenden', (req, res) => {
    res.render('submit', {
        title: 'MiRotterdam Versturen'
    })
})

//Route to get to test page.
router.get('/test', ((req, res) => {
    res.render('test')
}))

module.exports = router;
