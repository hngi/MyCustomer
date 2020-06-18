const express = require('express')
const app = express()
const http = require('http').createServer(app)
const bodyParser = require('body-parser')
const subscribe = require('./routers/subscribe')
const webPush = require('web-push')
const connection = require('./database/connect')

const publicValidKey = 'BPhABURrW0v2XD0ICIS8Y8Sp8PUZbRtcX0sirE0Z2Ok5GAmOm-MY-K1GXdhZ2tyxiYrY2ijo7fGFyUnFT5gf-6o'
const privateVapidKey = 'Vu8aWw5IhzRWjf851-2bKHT5J3uy7MbRwQGbM-vtPiU'

// set vapid credentials
webPush.setVapidDetails('mailto:unix1gl@gmail.com', publicValidKey, privateVapidKey)

// connect to database
connection.connect((err) => {
  if (err) console.log(err);
  
  console.log('DB connected');  
})

// set listening port for the server
const PORT = process.env.PORT || 3000

// allow express to serve static files this is to mimic the frontend.
// Typically, the files in the public directory should be on the frontend
app.use(express.static('public'));

app.use(bodyParser.json())

app.use('/subscribe', subscribe)

// get the server to listen on port PORT
http.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})