const express = require('express')
const router = express.Router();
const conn = require('../database/connection')

// GET all users
router.get('/', (req, res) => {
    //Query om alle gegevens op te halen uit de database table login.
    conn.query('SELECT * FROM login', (err, rows) => {
        if (err)
            res.send(err)
        else
            res.send(rows)
    })
})

// POST new user
router.post('/', (req, res) => {
    //Variabelen defineren uit de form.
    const naam = req.body.naam
    const email = req.body.email
    const wachtwoord = req.body.wachtwoord1

    //Query schrijven om de informatie naar de database te schrijven.
    conn.query(`INSERT INTO login (Gebruikersnaam, email, Wachtwoord) VALUE (?,?,?)`, [naam, email, wachtwoord], (err, data) => {
        if (err)
            //Error als het niet gelukt is om naar de database te schrijven.
            res.send(JSON.stringify({'data': false}))
        else {
            //Schrijven naar database is gelukt, terug naar gebruikerspagina navigeren.
            // res.render('admin/users-dashboard', {
            //     title: 'Dashboard',
            //     bodyClass: 'admin'
            // })
            res.send(JSON.stringify({'data': true}))
        }
    })
})

// DELETE user
router.delete('/:id', (req, res) => {
    //Query schrijven voor het verwijderen van een user.
    console.log(req.params.id)
    console.log('Inside the delete function with query')

    conn.query('DELETE FROM login WHERE id=?', [parseInt(req.params.id)], (err, result) => {
        if (err)
            res.send(err)
        //Mislukt om gebruiker te verwijderen
        if (result.length === 0)
            res.send(JSON.stringify({'data': false}))
        else {
            //JSON data op true (gebruiker is verwijderd).
            res.send(JSON.stringify({'data': true}))
        }
    })
})

module.exports = router