const express = require("express");
const authController = require('../controllers/auth')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', authController.register)

router.post('/login', authController.login );

router.post('/seller', authController.seller)

router.get('/logout', authController.logout );


module.exports = router;