const mysql = require("mysql");

// Database for developing, uncomment this, and comment the other connection for development
module.exports = mysql.createPool({
    connectionLimit: 2,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mirotterdam'
})

// Database used for when deployed on Heroku
// Heroku ClearDB Plugin DATABASE_URL
// module.exports = mysql.createPool({
//     connectionLimit: 2,
//     host: 'us-cdbr-east-04.cleardb.com',
//     user: 'bc6afcdde0bff7',
//     password: '2fad44a7',
//     database: 'heroku_3da252567c7c64c'
// })