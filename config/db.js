const mysql = require("mysql");
const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } = require("./constants");
const util = require("util");


let connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});


connection.query = util.promisify(connection.query)

module.exports = connection;