require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const accountSid = process.env.TWILIO_SID;
const auth = process.env.TWILIO_AUTH;
const twilioClient  = require('twilio')(accountSid,auth);


    //Twilio call service
router.post('/v1/call', (req,res) => {

    /*seen the number format required is (+234),  so the incoming number has to be
        filtered down to the required format
        e.g from 080000000 to +23480000000
        */
    //filtering
        const incomingNum = req.body.number;
        const toString = String(incomingNum);
        const slicedNum = toString.slice(1);
        const fullNumber = `+234${slicedNum}`;

    twilioClient.calls.create({
        url : 'https://handler.twilio.com/twiml/EHa97c46232b3eddd7a779694fbc60a69d',
        to : fullNumber,
        from : process.env.TWILIO_NUMBER
    })
    .then(calls => res.json(calls))
    .catch(err => res.json(err))
})
   

module.exports = router;