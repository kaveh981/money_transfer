var express = require('express');
var router = express.Router();
var indexPage = require('../controllers/UserControllers/index.js');

/* In this middleware we will write all routes related to regular user */
router.get('/', indexPage);
module.exports = router;
