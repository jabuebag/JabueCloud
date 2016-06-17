/**
 * Created by jabue on 16-06-16.
 */
var express = require('express');
var jwt = require('jsonwebtoken');
var systemConfig = require('../Config/SystemConfig');
var User = require('../Model/UserModel');

var router = express.Router();

router.post('/', function(req, res) {
    User.findOne({
        name: req.body.name
    }, function(err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            if (user.password != req.body.password) {
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

module.exports = router;