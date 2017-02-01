var express = require('express');
var router = express.Router();
var Twit = require('twit')
/* GET home page. */

const config = require('../config/auth');


var T = new Twit({
  consumer_key:         config.twitter.consumer_key,
  consumer_secret:      config.twitter.consumer_secret,
  access_token:         config.twitter.access_token,
  access_token_secret:  config.twitter.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


router.get('/search', function(req, res, next) {
  T.get('search/tweets', { q: req.query.kata, count: 4 }, function(err, data, response) {
    // console.log(data.statuses)
    res.send(data)
  })
});



module.exports = router;
