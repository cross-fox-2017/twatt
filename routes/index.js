var express = require('express');
var router = express.Router();
const tweet = require('../controller/controller.twatt');

/* GET home page. */
router.get('/:search', tweet.search);

module.exports = router;
