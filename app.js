var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Loading postgresSql module
var pgp = require('pg-promise')();

//Create connection object 
var connectionObj = {
    host: 'elmer-01.db.elephantsql.com',
    port: 5432,
    database: 'nbexdqxv',
    user: 'nbexdqxv',
    password: 'eUMJBUyhIQSF5LTdduN8oZalgInf0tov'
};
//Getting postgres database instance
var dbMT = pgp(connectionObj);



dbMT.any("CREATE TABLE customer(ID INT PRIMARY KEY NOT NULL,FirstName TEXT NOT NULL,LastName TEXT NOT NULL,DOB DATE,Age INT,Address CHAR(50));")
    .then(function (data) {
    console.log("DATA:", data); // print data;
})
    .catch(function (error) {
    console.log("ERROR:", error); // print the error;
}); 





var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
