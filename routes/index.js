var express = require('express');
var router = express.Router();
var cons = require('consolidate');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to Hiren Picture !' });
});

module.exports = router;
