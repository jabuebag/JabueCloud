/**
 * Created by jabue on 16-06-15.
 */
var passwordHash = require('password-hash');
var User = require('../Model/UserModel');

var exports = module.exports = {};

exports.addUser = function (body) {
    var user = new User({
        username: body.username,
        password: passwordHash.generate(body.password),
        email: body.email?body.email:'',
        admin: true
    });

    user.save(function (err) {
        if (err) throw err;
        console.log('User saved successfully');
    });
}
