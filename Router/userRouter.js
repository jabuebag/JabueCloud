/**
 * Created by jabue on 16-06-15.
 */
var express = require('express');
var userService = require('../Service/userService');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('here is page of users.');
});

router.get('/new/', function(req, res, next) {
    userService.addUser();
    res.send('here is new page of users.');
});

module.exports = router;