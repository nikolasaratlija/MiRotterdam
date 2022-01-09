const express = require('express')
const router = express.Router()
const conn = require('../database/connection')

router.get('/', (req, res) => {
    res.render('admin/login', {
        title: 'Admin Login',
        bodyClass: 'login'
    })
})

router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/admin')
})

router.get('/dashboard', (req, res) => {
    if (req.session.username === undefined){
        res.redirect('/admin')
    }
    else{
        res.render('admin/dashboard', {
            title: 'Dashboard',
            bodyClass: 'admin',
            name : req.session.username
        })
    }
})

router.get('/gebruikers', (req, res) => {
    if (req.session.username === undefined){
        res.redirect('/admin')
    }
    else{
        res.render('admin/users-dashboard', {
            title: 'Gebruikers',
            bodyClass: 'admin'
        })
    }
})

router.get('/analytics', (req, res) => {
    if (req.session.username === undefined){
        res.redirect('/admin')
    }
    else {
        res.render('admin/analytics', {
            title: 'Statistieken',
            bodyClass: 'admin'
        })
    }
})

router.post('/', (req, res) => {
    //Variabelen die uit de input meegegeven worden.
    const userEmail = req.body.email
    const userPass = req.body.wachtwoord

    //SQL query voor het opvragen van de data, gezocht op ingevulde email en wachtwoord.
    const sql = "SELECT email, Wachtwoord, Gebruikersnaam FROM login WHERE email = ? AND Wachtwoord = ?"
    conn.query(sql, [userEmail, userPass], function (err, result) {
        if (err) {
            console.log(err)
        }

        //Bij geen resultaat dan komt data op false dit linkt terug naar login.twig
        if (result.length === 0)
            res.send(JSON.stringify({'data': false}))
        else {
            //Session variabel waar de gebruikersnaam in bijgehouden wordt.
            req.session.username = result[0].Gebruikersnaam
            //JSON data op true (gebruiker is ingelogd).
            res.send(JSON.stringify({'data': true}))
        }
    });
})

router.get('/locaties-dashboard', (req, res) => {
    if (req.session.username === undefined){
        res.redirect('/admin')
    }
    else{
        res.render('admin/locations-dashboard', {
            title: 'Locaties Dashboard',
            bodyClass: 'admin'
        })
    }
})

router.get('/elementen-dashboard', (req, res) => {
    if (req.session.username === undefined){
        res.redirect('/admin')
    }
    else{
        res.render('admin/elements-dashboard', {
            title: 'Elementen Dashboard',
            bodyClass: 'admin'
        })
    }
})

router.get('/ontwerpen-overzicht', ((req, res) => {
    if (req.session.username === undefined){
        res.redirect('/admin')
    }
    else{
        res.render('admin/designs-dashboard', {
            title: 'Ontwerpen Dashboard',
            bodyClass: 'admin'
        })
    }
}))

module.exports = router