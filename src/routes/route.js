const express = require('express');
const userController = require('../Controllers/userController')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/users', userController.createuser);
router.post('/login', userController.loginUser)
router.get('/users/:userId', userController.getUser)
router.put('/user/:userId', userController.updateEmail)

module.exports = router;