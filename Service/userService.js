/**
 * Created by jabue on 16-06-15.
 */
var mongoManager = require('../Manager/DBManager');
var User = require('../Model/UserModel');

var exports = module.exports = {};

exports.addUser = function () {
    var user = new User({
        name: 'jabue',
        password: 'jabue',
        admin: true
    });

    user.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully');
    });
}

exports.test = function () {
    mongoDb.collection('restaurants').insertOne({
        "address": {
            "street": "2 Avenue",
            "zipcode": "10075",
            "building": "1480",
            "coord": [-73.9557413, 40.7720266]
        },
        "borough": "Manhattan",
        "cuisine": "Italian",
        "grades": [
            {
                "date": new Date("2014-10-01T00:00:00Z"),
                "grade": "A",
                "score": 11
            },
            {
                "date": new Date("2014-01-16T00:00:00Z"),
                "grade": "B",
                "score": 17
            }
        ],
        "name": "Vella",
        "restaurant_id": "41704620"
    }, function (err, result) {
        if (err) {
            console.log("Insert collection failed!");
        } else {
            console.log("Inserted a document into the restaurants collection.");
        }
    });
}
