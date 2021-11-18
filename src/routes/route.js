const express = require('express');
const router = express.Router();


const myAuthorController = require("../controllers/myAuthorController")
const myBookController = require("../controllers/myBookController")
const publisherController = require("../controllers/publisherController")



router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


//------------------------------------------------------------------

router.post('/createauthor', myAuthorController.createauthor);
router.post('/createBooks', myBookController.createBooks);
router.get('/allBooks', myBookController.getallBooks);
router.post('/publisher', publisherController.createPublisher);
router.get('/particularData',myBookController.getauthor)
module.exports = router;