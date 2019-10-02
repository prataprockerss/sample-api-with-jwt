const PROD = {
    // live DB credentials
    DB_HOST: "localhost",
    DB_USER : "root",
    DB_PASSWORD: "root",
    DB_DATABASE: "virtusa",
    DB : require('./dbTable')
};
const DEV = {
    // Local DB credentials
    DB_HOST: "localhost",
    DB_USER : "root",
    DB_PASSWORD: "root",
    DB_DATABASE: "virtusa",
    DB : require('./dbTable')
};

module.exports = process.env.ENVIRONMENT == "production" ? PROD : DEV;
