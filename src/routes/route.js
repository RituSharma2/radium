const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel")

const BookController= require("../controllers/bookController")
const NewbookController=require("../controllers/newBookController")
const AuthorController=require("../controllers/authorController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook',  BookController.createBook  );
router.get('/getListofBooks',  BookController.getListofBooks  );
router.post('/getBooksinYear', BookController.getBooksinYear  );
router.post('/getParticularBooks',  BookController.getParticularBooks  );
router.get('/getXINRBooks',  BookController.getXINRBooks  );
router.get('/getRandomBooks',  BookController.getRandomBooks  );
//-----------------------------------


module.exports = router;