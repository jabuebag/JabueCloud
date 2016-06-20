/**
 * Created by jabue on 16-06-15.
 */
var express = require('express');
var User = require('../Model/UserModel');
var userService = require('../Service/UserService');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({success: 'true', message: 'here is page of user!'});
});

router.get('/new', function (req, res, next) {
    User.find({
        email: "ybagyang@gmail.com"
    }, function (err, user) {
        if (err) throw err;
        if (user.length > 0 ) {
            res.json({success: 'false', message: 'user already exist!'});
        } else {
            userService.addUser();
            res.json({success: 'true', message: 'add user successfully!'});
        }
    });
});

router.get('/users', function (req, res, next) {
    User.find({}, function (err, users) {
        res.json(users);
    });
});

router.get('/test', function (req, res, next) {
    res.json({success: 'true', message: 'here is test auth page!'});
});

module.exports = router;