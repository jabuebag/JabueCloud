/**
 * Created by jabue on 16-06-15.
 */
var express = require('express');
var User = require('../Model/UserModel');
var userService = require('../Service/UserService');

var router = express.Router();

router.post('/register', function (req, res, next) {
    userService.isExist(req.body.email, function (exist) {
        if (exist) {
            res.json({
                success: 'false',
                message: 'user already exist!'
            });
        } else {
            userService.addUser(req.body, function (user) {
                res.json({
                    success: 'true',
                    message: 'add user successfully!',
                    uid: user._id
                });
            });
        }
    })
});

router.get('/users', function (req, res, next) {
    User.find({}, function (err, users) {
        res.json(users);
    });
});

router.get('/info', function (req, res, next) {
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
                api: '/user/register',
                describe: 'Create new users.',
                method: 'post',
                parameters: 'email:requird, username:required, password:required',
                token: 'not required'
            },
            {
                api: '/user/users',
                describe: 'Get all the users',
                method: 'get',
                parameters: 'null',
                token: 'Required, get token from /auth.'
            }
        ]
    });
});

module.exports = router;