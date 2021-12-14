const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/intro', (req, res) => {
    res.render('intro', {
        title: 'MiRotterdam',
        bodyClass: 'index'
    })
})

router.get('/ontwerpomgeving', (req, res) => {
    res.render('design-maker', {
        title: 'MiRotterdam Ontwerpomgeving',
        bodyClass: 'design-maker'
    })
})

router.get('/verzenden', (req, res) => {
    res.render('submit', {
        title: 'MiRotterdam Versturen',
        bodyClass: 'submit'
    })
})

router.get('/test', ((req, res) => {
    res.render('test')
}))

module.exports = router;
