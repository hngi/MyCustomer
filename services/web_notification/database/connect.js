const mysql = require('mysql')

// create a mysql connection to the backend
// this will be replaced with the actual database credentials
// upon integration with the production database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'codelikecrazy',
  database: 'cdcol'
})

module.exports = connection