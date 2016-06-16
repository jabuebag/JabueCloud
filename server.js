var express = require('express');

var systemConfig = require('./Config/system');

// path router
var indexRouter = require('./Router/index');
var users = require('./Router/user');

// App
var app = express();

// route to different routers due to path
app.use('/', indexRouter);
app.use('/user', users);

app.listen(systemConfig.port);
console.log('Server is on.');