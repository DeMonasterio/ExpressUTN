require('dotenv').config();
const mysql = require("mysql2")

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});


db.on('acquire', connection => {
  console.log('Conectado a la BD.');
});



module.exports = db; 