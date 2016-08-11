//In this module we define all base routs such as Admin,Regular User ,CMS or  etc

var express = require('express');
var router = express.Router();
var userRoutes = require('./userRoutes.js');
var adminRoutes = require('./adminRoutes.js');

var baseRouterApp = express();

/* In this middleware we will write all base routes related to website */
baseRouterApp.use('/', userRoutes);
baseRouterApp.use('/admin', adminRoutes);

module.exports = baseRouterApp;
 