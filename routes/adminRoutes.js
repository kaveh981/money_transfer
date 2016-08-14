var express = require('express');
var router = express.Router();
var AdminIndexPage = require('../controllers/AdminControllers/AdminIndex.js');


/* In this middleware we will write all routes related to administrators */
router.get('/', AdminIndexPage);
module.exports = router;
