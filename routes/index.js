var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Default page
  res.redirect('/messages');
});

module.exports = router;
