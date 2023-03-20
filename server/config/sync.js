require ('dotenv').config();
const sequelize = require('../config/db.config').sequelize;

const User = require('../models/user');
const Details = require('../models/details');

sequelize.sync({alert: true});
