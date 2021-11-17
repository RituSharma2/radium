const express = require('express');
const router = express.Router();
////const UserModel= require("../models/userModel")

//const UserController= require("../controllers/userController")

const newBookController= require("../controllers/newbookController")

const authorController= require("../controllers/authorController")



router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//router.post('/createUser',  UserController.createUser  );
//router.get('/getAllUsers',  UserController.getUsersData  );
////=------------------------------------------------------------------
router.post('/createnewBooks',  newBookController.createnewBooks  );
router.get('/booksByChetan',  newBookController.booksByChetan  );
router.get('/twostates',  newBookController.twostates  );
router.get('/books',  newBookController.books  );
//Api's for Author
router.post('/createauthor',  authorController.createauthor );
module.exports = router;