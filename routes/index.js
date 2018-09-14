import * as INDEX from './constants/index'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // var model = {
  //   title: 'Azure testing',
  //   message: process.env.MESSAGE || "Development",
  // };
  // res.render(index.INDEX_ROUTE, model);

  res.render(INDEX.INDEX_ROUTE, {title: INDEX.PAGE_TITLE_LABEL});
});

module.exports = router;
l