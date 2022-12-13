var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt  = require('jsonwebtoken')

var cors = require('cors');

var mongoose = require('mongoose');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/student');
var labRouter =  require('./routes/labs');
var userRouter = require('./routes/usermodel');
var withdrawalRouter = require('./routes/students_routes');
var makeupRouter=require('./routes/makeuproute');
var app = express();
app.use(cors());

let mongo=mongoose.connect('mongodb+srv://jithendra:jhonny%40589@dugc.gd7mtam.mongodb.net/test');


if(mongo)
{
  console.log('connected to mongo');
}else
{
  console.log('unable to connect');
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


function verifyToken(req,res,next){
  if(!req.headers.authorization)
  {
    return res.status(401).send('unauthorized request')
  }
  let token =req.headers.authorization.split(' ')[1]
  if(token=== 'null')
  {
    return res.status(401).send('unauthorized request')
  }
  let payload1=jwt.verify(token,'secretKey');
if (!payload1) 
{
  return res.status(401).send('unauthorized request')
}
req.userId =payload1.subject;
next()
}

app.use('/',indexRouter);
app.use('/lab', labRouter);
app.use('/users', usersRouter);
app.use('/student',studentRouter);
app.use('/login',userRouter);
app.use('/withdrawal',withdrawalRouter);
app.use('/makeup',makeupRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
