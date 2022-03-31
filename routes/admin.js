const express = require('express')
const router = express.Router()
const conn = require('../database/connection')

//Route to get to login page.
router.get('/', (req, res) => {
    res.render('admin/login', {
        title: 'Admin Login',
        bodyClass: 'login'
    })
})

//Route for loggin out
router.get('/logout', (req, res) => {
    req.session.destroy() //Destroy session of user logged in.
    res.redirect('/admin') //Redirect user to login page.
})

//Route to get to home page of the admin page.
router.get('/dashboard', (req, res) => {
        res.render('admin/dashboard', {
            title: 'Dashboard',
            bodyClass: 'admin',
            name: req.session.username
        })
})

//Route to get to users page.
router.get('/gebruikers', (req, res) => {
        res.render('admin/users-dashboard', {
            title: 'Gebruikers',
            bodyClass: 'admin'
        })
})

//Route to get to analytics page.
router.get('/analytics', (req, res) => {
        res.render('admin/analytics', {
            title: 'Statistieken',
            bodyClass: 'admin'
        })
})

//Route to post data given in the login form.
router.post('/', (req, res) => {
    //Variabels that are given in the form.
    const userEmail = req.body.email
    const userPass = req.body.wachtwoord

    //SQL query to look for the given data in database.
    const sql = "SELECT email, Wachtwoord, Gebruikersnaam FROM login WHERE email = ? AND Wachtwoord = ?"
    conn.query(sql, [userEmail, userPass], function (err, result) {
        if (err) {
            console.log(err) //Error occured with connection.
        }

        //No result is found in database, give back JSON data false.
        if (result.length === 0) {
            res.send(JSON.stringify({'data': false}))
            req.session.loggedIn = false
        }
        else {
            //User is found in database, assign session variabel with name.
            req.session.username = result[0].Gebruikersnaam
            req.session.loggedIn = true
            req.session.save()
            //JSON data becomes true and is send back.
            res.send(JSON.stringify({'data': true}))
        }
    });
})

//Route to get to locations page.
router.get('/locaties-dashboard', (req, res) => {
        res.render('admin/locations-dashboard', {
            title: 'Locaties Dashboard',
            bodyClass: 'admin'
        })
})

//Route to get to elements page.
router.get('/elementen-dashboard', (req, res) => {
        res.render('admin/elements-dashboard', {
            title: 'Elementen Dashboard',
            bodyClass: 'admin'
        })
})

//Route to get to created designs page.
router.get('/ontwerpen-overzicht', ((req, res) => {
        res.render('admin/designs-dashboard', {
            title: 'Ontwerpen Dashboard',
            bodyClass: 'admin'
        })
}))

module.exports = router