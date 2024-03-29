const database = require('mysql2/promise');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const db = database.createPool({
    host : DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

db.getConnection().catch(() =>{
    console.warn(
        "warning : DB connection failed"
    );
});

module.exports = db;