const db = require('../config');
const mysql = require('mysql2/promise')
const User = require('../Model/User')

async function getAll() {
    let connection = await db.getConnection();
    return await connection.execute(`SELECT * FROM User;`).then((rows) => {
        return rows[0];
    })
}


async function create(user) {
    let connection = await db.getConnection();
    await connection.execute(`INSERT INTO userTest (id, userName, password) VALUES (null, '${user.userName}', '${user.password}');`)
    return "user successfully created !";
}

module.exports = {create, getAll};


