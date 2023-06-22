const mysql = require('mysql2/promise')

async function getConnection() {
    return mysql.createConnection({
        host: '127.0.0.1',
        port: "3306",
        user: 'dbAdmin',
        password: 'Clermont23?',
        database: 'user-system'
    });
}

module.exports = { getConnection };
