const express = require('express');
const app = express();
const router = express.Router();
const config = require('./config');
const Twit = require('twit')

var T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

router.get('/search', function(req,res) {
  T.get('search/tweets', { q: req.query.q }, function(err, data, response) {
    res.send(data)
  })
})

app.use('/', router)
app.listen(3000)
