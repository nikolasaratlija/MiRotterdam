const express = require('express')
const router = express.Router()
const conn = require('../database/connection')


router.get('/', (req, res) => {
    res.render('admin/login', {
        title: 'Admin Login',
        bodyClass: 'login'
    })
})

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard', {
        title: 'Dashboard',
        bodyClass: 'admin'
    })
})
router.get('/gebruikers', (req, res) => {
    res.render('admin/users-dashboard', {
        title: 'Dashboard',
        bodyClass: 'admin'
    })
})

router.post('/', (req, res) => {
    const username = req.body.username
    const wachtwoord = req.body.wachtwoord
    //
    // conn.query("SELECT")

    // inloggevevens kloppen ?
    // stuur naar dashboard:
    res.render('admin/dashboard')
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