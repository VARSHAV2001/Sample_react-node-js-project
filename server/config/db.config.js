const Sequelize = require('sequelize');

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports.sequelize = sequelize;