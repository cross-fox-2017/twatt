const express = require('express')
const app = express()
const router = express.Router()
const Twit = require('twit')
const T = new Twit({
  consumer_key:         'AxfRTwgEoMXhDrt5jAocx33wJ',
  consumer_secret:      'mkf2zKVK4SOFaf4boBNDLGFwwvloYjjRAlyjo1Yiu5gm5Vjv2N',
  access_token:         '147970158-35cyWiv0ub2jvpMUZdee1rOszdW8qggWQCBwmvlC',
  access_token_secret:  'hNIuhxyfE0vebVAqUnNnQSxhoOVhweaqaogoiHS4howrt',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

router.get('/search',function(req,res){
  var tweeter = req.query.q

  T.get('search/tweets',{q: tweeter}, function(err, data, response) {
    res.send(data)
  })
})

app.use('/',router)
app.listen(3000)
