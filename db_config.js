/*require('dotenv').config();
const mysql = require("mysql2")

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
    err ? console.log(err) : console.log('Conectado a la BD.');;
})

module.exports = db;  */
//modificaciones
require('dotenv').config();
const mysql = require("mysql2")

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

//nuevo
db.on('acquire', connection => {
  console.log('Conectado a la BD.');
});



module.exports = db; 