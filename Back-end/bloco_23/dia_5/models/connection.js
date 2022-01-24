const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Filipe2002!',
  database: 'model_example'
});

module.exports = connection;