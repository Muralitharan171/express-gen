var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('welcome to dashboard nooooooob');
});

module.exports = router;
