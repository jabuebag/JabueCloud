var express = require('express');
var mongoose = require('mongoose');
var systemConfig = require('./Config/system');
var mongoConfig = require('./Config/mongoConfig');

// path router
var indexRouter = require('./Router/indexRouter');
var userRouter = require('./Router/userRouter');

// App
var app = express();

// connect mongo db
mongoose.connect(mongoConfig.mongoUrl);

// route to different routers due to path
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(systemConfig.port);
console.log('Server is on.');