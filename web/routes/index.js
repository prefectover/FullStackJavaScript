var express = require('express');
var userlist = require('./userlist');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/userlist', userlist);
module.exports = router;
