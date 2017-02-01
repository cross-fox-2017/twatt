const tweet = require('../helper/twitterHelper');

var controllerTweet = {
  search: function(req, res, next) {
    console.log(req.params.search);
    tweet.getTweet(req.params.search, function(data){
      res.json(data)
    })
  }
}

module.exports = controllerTweet
