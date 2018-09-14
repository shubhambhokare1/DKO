var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'DKO',
    message: process.env.MESSAGE || 'Development'
  };

  res.render('index', model);
});

module.exports = router;
