const express = require('express');
const userController = require('../Controllers/userController')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
 




// API TO CREATE USER
router.post('/users', userController.createuser);

//API TO LOGIN AND TOKEN
router.post('/login', userController.loginUser)

//API TO GET USER AND DECODE TOKEN
router.get('/users/:userId', userController.getUser)

// APT FOR UPDATION
router.put('/user/:userId', userController.updateEmail)

module.exports = router;