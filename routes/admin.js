const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('admin/login', {
        title: 'Admin Login',
        bodyClass: 'login'
    })
})

router.get('/locaties-dashboard', (req, res) => {
    res.render('admin/locations-dashboard', {
        title: 'Locaties Dashboard',
        bodyClass: 'admin'
    })
})

router.get('/elementen-dashboard', (req, res) => {
    res.render('admin/elements-dashboard', {
        title: 'Elementen Dashboard',
        bodyClass: 'admin'
    })
})

router.get('/ontwerpen-overzicht', ((req, res) => {
    res.render('admin/designs-dashboard', {
        title: 'Ontwerpen Dashboard',
        bodyClass: 'admin'
    })
}))

module.exports = router