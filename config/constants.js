const PROD = {
    // live DB credentials
    DB_HOST: "localhost",
    DB_USER : "root",
    DB_PASSWORD: "root",
    DB_DATABASE: "virtusa",
    DB : require('./dbTable'),
    JWT_SECRETE: "c6d725b9d52a10af2f0972a96b24f319"
};
const DEV = {
    // Local DB credentials
    DB_HOST: "localhost",
    DB_USER : "root",
    DB_PASSWORD: "root",
    DB_DATABASE: "virtusa",
    DB : require('./dbTable'),
    JWT_SECRETE: "cfb6a9c725f57dd893aa6368e1ae8903"
};

module.exports = process.env.ENVIRONMENT == "production" ? PROD : DEV;
