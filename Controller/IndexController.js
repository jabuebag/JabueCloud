/**
 * Created by jabue on 16-06-15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ info: 'here is page of index!' });
});

module.exports = router;