const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Aspyrer',
    password:'90959842t',
})

module.exports = pool.promise();