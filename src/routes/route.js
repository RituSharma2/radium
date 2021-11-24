const express = require('express');
const userController = require('../Controllers/userController')
const jwt = require('jsonwebtoken')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


// USE OF MIDDLEWARE TO DECODE THE TOKEN AND VALIDATION
let tokenCheck = function (req, res, next) {
    let token = req.headers['x-auth-token']
    if (!token) {
        return res.send({ status: false, msg: "no authentication token" })
    } else {
        let decodeToken = jwt.verify(token, 'radium')
        if (decodeToken) {
            req.decodeToken = decodeToken
            next()

        } else {
            res.send({ status: false, msg: "invalid token" })
        }
    }
}




// API TO CREATE USER
router.post('/users', userController.createuser);

//API TO LOGIN AND TOKEN
router.post('/login', userController.loginUser)

//API TO GET USER AND DECODE TOKEN
router.get('/users/:userId', tokenCheck, userController.getUser)

// APT FOR UPDATION
router.put('/user/:userId', tokenCheck, userController.updateEmail)

module.exports = router;