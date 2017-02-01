var express = require('express');
var router = express.Router();

var searchTweet = require('../helpers/twitter_util')
/* GET home page. */
router.get('/search', function(req, res, next) {
  searchTweet.getTweet(req.query.keyword,function(data){
    res.json(JSON.parse(data))
  })
});

module.exports = router;
