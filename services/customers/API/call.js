require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();


const accountSid = process.env.TWILIO_SID;
const auth = process.env.TWILIO_AUTH;
const twilioClient  = require('twilio')(accountSid,auth);


    //Twilio call service
router.post(/api/call, (req,res) => {
    twilioClient.calls.create({
        url : 'https://handler.twilio.com/twiml/EHa97c46232b3eddd7a779694fbc60a69d',
        to : '+2348034051060',
        from : process.env.TWILIO_NUMBER
    })
    .then(calls => console.log(calls.sid + ' Calling now!'))
    .catch(err => console.log(err));
})
   

module.exports = router;