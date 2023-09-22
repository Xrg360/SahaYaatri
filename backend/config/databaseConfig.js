const mysql = require('mysql2');

const dbConfig = {
  host: 'YOUR_DB_HOST',
  user: 'YOUR_DB_USER',
  password: 'YOUR_DB_PASSWORD',
  database: 'YOUR_DB_NAME',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
