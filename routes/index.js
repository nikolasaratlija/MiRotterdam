const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Ontwerpomgeving',
        bodyClass: 'design-maker'
    })
});

module.exports = router;
