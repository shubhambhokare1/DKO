import * as index from './constants/index'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'Azure testing',
    message: process.env.PROD_MESSAGE || "Development",
  };
  res.render(index.INDEX_ROUTE, model);
});

module.exports = router;
l