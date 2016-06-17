/**
 * Created by jabue on 16-06-15.
 */
var express = require('express');
var User = require('../Model/UserModel');
var userService = require('../Service/UserService');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({info: 'here is page of user!'});
});

router.get('/new', function (req, res, next) {
    userService.addUser();
    res.json({info: 'add user successfully!'});
});

router.get('/users', function (req, res, next) {
    User.find({}, function (err, users) {
        res.json(users);
    });
});

module.exports = router;