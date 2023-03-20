const { DataTypes } = require("sequelize")
const sequilize = require('../config/db.config').sequelize;

const Details = sequilize.define('details', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    images: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Details;