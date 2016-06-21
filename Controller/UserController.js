/**
 * Created by jabue on 16-06-15.
 */
var express = require('express');
var User = require('../Model/UserModel');
var userService = require('../Service/UserService');

var router = express.Router();

router.post('/new', function (req, res, next) {
    User.find({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;
        if (user.length > 0 ) {
            res.json({success: 'false', message: 'user already exist!'});
        } else {
            userService.addUser(req.body);
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

router.get('/', function (req, res, next) {
    res.json({
        title: 'User API Instructions',
        APIS: [
            {
                api: '/user/new',
                describe: 'Create new users.',
                method: 'post',
                parameters: 'email:requird, username:required, password:required',
                token: 'not required'
            },
            {
                api: '/user/users',
                describe: 'get all the users',
                method: 'get',
                parameters: 'null',
                token: 'required'
            }
        ]
    });
});

module.exports = router;