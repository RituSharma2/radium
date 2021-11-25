const express = require('express');
const router = express.Router();

const weatherController = require("../controllers/weatherController")


router.get("/allTemp", weatherController.checkTemp)


module.exports = router;