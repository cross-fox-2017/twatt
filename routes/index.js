var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var configAuth = require('../auth');


var client = new Twitter({
  consumer_key: configAuth.twitterAuth.consumer_key,
  consumer_secret: configAuth.twitterAuth.consumer_secret,
  access_token_key: configAuth.twitterAuth.access_token_key,
  access_token_secret: configAuth.twitterAuth.access_token_secret
});

/* GET home page. */

router.get('/search', function(req, res, next) {
  let search = {q: req.query.q}
  client.get('search/tweets', search , function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
    else {
      res.json({ error: error });
    }
  });
});

module.exports = router;
