var express = require('express');
var router = express.Router();
const tweet = require('../helper/twitterHelper');

/* GET home page. */
router.get('/', function(req, res, next) {
  tweet.getTweet(req.params.search, function(data){
    res.json(data)
  })
});

module.exports = router;
