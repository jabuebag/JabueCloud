var express = require('express');
var assert = require('assert');

var systemConfig = require('./Config/system');
var mongoManager = require('./Manager/dbManager');
var userService = require('./Service/userService');

// path router
var indexRouter = require('./Router/index');
var users = require('./Router/user');

// App
var app = express();

// route to different routers due to path
app.use('/', indexRouter);
app.use('/user', users);

app.get('/test', function (req, res) {
    userService.addUser(mongoManager.getDBConnection());
    res.send("Insert successfully!");
});

app.listen(systemConfig.port);
console.log('Server is on.');