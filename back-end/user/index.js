const express = require('express');
const userController = require('./userController');

const router = express.Router();

router.post('/register',userController.registerUser);
router.post('/login',userController.searchUser);

module.exports = router;