////////// TWAT CHALLENGE ///////////////
const express = require('express');
const router = express.Router();
const twitter = require('twitter');
var config = require('../config.json')

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

router.get('/search', function (res, req) {
  var search_query = req.query.q

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.send(tweets);
    }
  })

})


client.get('api/twitter/callback', function(error, tweets, response) {
    res.send(tweets);
})


module.exports = router;
////////////////////////////////////////////
