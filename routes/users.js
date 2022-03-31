const express = require('express')
const router = express.Router();
const conn = require('../database/connection')

// GET all users
router.get('/', (req, res) => {
    //SQL query to retrieve all data in login table.
    conn.query('SELECT * FROM login', (err, rows) => {
        if (err)
            res.send(err) //Error occured.
        else
            res.send(rows) //Data is found send it back.
    })
})

// POST new user
router.post('/', (req, res) => {
    //Variabels from the add user form.
    const naam = req.body.naam
    const email = req.body.email
    const wachtwoord = req.body.wachtwoord1

    //SQL query to add user to database.
    conn.query(`INSERT INTO login (Gebruikersnaam, email, Wachtwoord) VALUE (?,?,?)`, [naam, email, wachtwoord], (err, data) => {
        if (err)
            //Error occured when writing to database.
            res.send(JSON.stringify({'data': false})) //Send JSON data is false back.
        else {
            //User is added to database.
            res.send(JSON.stringify({'data': true})) //Send JSON data is true back.
        }
    })
})

// DELETE user
router.delete('/:id', (req, res) => {
    //Log to see what the id is, and in wich function we are.
    console.log(req.params.id)
    console.log('Inside the delete function with query')

    //SQL query to delete a user given by id.
    conn.query('DELETE FROM login WHERE id=?', [parseInt(req.params.id)], (err, result) => {
        if (err)
            res.send(err) //Error occured while deleting user.
        if (result.length === 0)
            //User is not deleted.
            res.send(JSON.stringify({'data': false})) //Send JSON data false back.
        else {
            //User is deleted.
            res.send(JSON.stringify({'data': true})) //Send JSON data true back.
        }
    })
})

module.exports = router