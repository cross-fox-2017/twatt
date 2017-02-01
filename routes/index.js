var express = require('express');
var router = express.Router();
var twitterAPI = require('node-twitter-api');
var Twitter = require('twitter');
var Twitternode = require('node-twitter');
var configAuth = require('../config/auth');


var client = new Twitter({
  consumer_key: 'ZMtrhlJYaaJCIPx7cMO6YH1Oj',
  consumer_secret: 'Mv9YB8fYUJYUdlWVn8VVjSpAfpwmD0XewVvAusbChMPYOewhi8',
  access_token_key: '169525544-HryYnTh4S0zVCbjLXqsv4zYIlD6exvUdfvyzuL2f',
  access_token_secret: 'FMRQiyFSJSwmfdOINbnaXkEgNROebwdNwe1epLGYw7Rud'
});

var twitterSearchClient = new Twitternode.SearchClient(
  'ZMtrhlJYaaJCIPx7cMO6YH1Oj', 'Mv9YB8fYUJYUdlWVn8VVjSpAfpwmD0XewVvAusbChMPYOewhi8',
  '169525544-HryYnTh4S0zVCbjLXqsv4zYIlD6exvUdfvyzuL2f', 'FMRQiyFSJSwmfdOINbnaXkEgNROebwdNwe1epLGYw7Rud'
)
/* GET home page. */

router.get('/', function(req, res, next) {
  let search = {screen_name: req.params.search}
  client.get('statuses/user_timeline', search , function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
    else {
      res.json({ error: error });
    }
  });
});

// twitterSearchClient.search({'q': 'node.js'}, function(error, result) {
//     if (error)
//     {
//         console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
//     }
//
//     if (result)
//     {
//         console.log(result);
//     }
// });

module.exports = router;
