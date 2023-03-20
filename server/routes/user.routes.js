const express = require('express');
const loginController = require('../modules/Login.controller')
const RegisterController = require('../modules/Register.controller')
const HomepageController = require('../modules/Home.controller')
const CabdetailsController = require('../modules/Cabdetails.controller')

const router = express.Router();

router.post('/login', loginController.login );
router.post('/register', RegisterController.Registration);
router.get('/homepage', HomepageController.getAll);
router.get('/cabdetails/:id', CabdetailsController.getOne);

module.exports = router;