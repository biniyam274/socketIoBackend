var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users:[{name:"Benjamin",age:24},{name:"Loza",age:21}]});
});

module.exports = router;
