const express = require('express');
const productController = require('../Controllers/productController');
const userController = require('../Controllers/userController');
const md = require('../middlewares/globalMiddleware');
const orderController = require('../Controllers/orderController')

const router = express.Router();

router.post('/test-me', function (req, res, next) {    
    console.log('Inside the route handler checking the header batch: '+req.headers['batch'])
    let host = req.headers['host']
    let hostWithName = host + " " + "Sabiha Khan"
    console.log('My response headers: '+res.getHeaderNames())
    res.setHeader('hostWithName', hostWithName)
    //res.send({data: 'I was in the handler'})
    //res.finalData = {data: 'I was in the handler'}
    //next()
});




router.post('/product' ,productController.createproduct)
router.post('/user' , md.checkHeader ,userController.createuser)
router.post('/order',md.checkHeader , orderController.createOrder)

module.exports = router;
