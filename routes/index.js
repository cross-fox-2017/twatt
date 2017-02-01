var express = require('express');
var router = express.Router();
const tweet = require('../controllers/controller.twatt');

/* GET home page. */
router.get('/:search', tweet.search);

module.exports = router;
