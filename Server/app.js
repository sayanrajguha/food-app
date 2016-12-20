var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var passport = require('passport');
var config = require('./config/config');
var app = express();
//setting port
var port = 3000,
publicDir = '../Client/public',
fs = require('fs');
console.log('Port '+port+' enabled...');

// view engine setup
app.set('views', publicDir);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// // uncomment after placing your favicon in /public
// app.use(favicon(publicDir + '/images/favicon.ico'));

//logger
console.log('Connecting logger...');
app.use(logger('dev'));
console.log('Logger connected...');

//bodyparser
console.log('Enabling body parser...');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log('Body Parser enabled...');

//cookie parser
console.log('Enabling Cookie Parser...');
app.use(cookieParser());
console.log('Cookie Parser enabled...');
//static
app.use(express.static(publicDir));
//passport initialize
// app.use(passport.initialize());

//mongoose connect
console.log('Connecting mongoose...');
mongoose.connect(config.mongoDbUrl);
console.log('Mongoose connected...');

//including passport code 
// require('./config/passport')(passport);



//controller routes
app.use('/index', function(req,res,next) {
    console.log('inside index route');
    res.send('OK');
});
app.use('/other', function(req,res,next) {
    console.log('inside other route');
    res.send('Other also OK');
});




//starting server
console.log("Starting server...");
var server = app.listen(port, function() {
  console.log('Server started on port : ' + server.address().port);
});

module.exports = app;