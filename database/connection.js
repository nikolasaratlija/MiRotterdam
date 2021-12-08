const mysql = require('mysql')
require('dotenv').config()

// Database connection
module.exports = mysql.createPool({
    connectionLimit: 2,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})
