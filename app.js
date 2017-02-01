const express = require('express')
const router = express.Router()

const twitter = require('twitter')

const app = express()

router.get('/',function(req, res){

      res.send("hello world !")
})

app.use('/', router)
app.listen(3000)
