const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('admin/login')
})

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard')
})

module.exports = router