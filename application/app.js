var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');

var indexRouter     = require('./routes/index.js');
var loginRouter     = require('./routes/login.js');
var postimageRouter = require('./routes/postimage.js');
var registerRouter  = require('./routes/register.js');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/postimage', postimageRouter);
app.use('/register', registerRouter);

module.exports = app;
