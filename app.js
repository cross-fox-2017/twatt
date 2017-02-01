const express = require('express')
const router = express.Router()

const Twitter = require('twitter')

const config = require('./config');

const app = express()

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

router.get('/search',function(req, res) {

  console.log({debug: req.query});
  console.log({client})

  const searchQuery = req.query.q;

  client.get('search/tweets', {q: searchQuery}, function(error, tweets, response) {
    const result = JSON.parse(response.body)
    console.log({result})
    res.send(tweets)
  })

})

app.use('/', router)
app.listen(3000)
