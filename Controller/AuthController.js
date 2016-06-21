/**
 * Created by jabue on 16-06-16.
 */
var express = require('express');
var jwt = require('jsonwebtoken');
var passwordHash = require('password-hash');
var systemConfig = require('../Config/SystemConfig');
var User = require('../Model/UserModel');

var router = express.Router();

router.post('/auth', function(req, res) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            if (!passwordHash.verify(req.body.password, user.password)) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                var token = jwt.sign(user, systemConfig.tokenSecret);

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    });
});

router.get('/', function (req, res, next) {
    res.json({
        title: 'Authentication API Instructions',
        APIS: [
            {
                api: '/auth/auth',
                describe: 'Authenticate users. Generate token for user.',
                method: 'post',
                parameters: 'email:requird, password:required',
                token: 'not required'
            }
        ]
    });
});

module.exports = router;