const app = require("./src/app");
const mongoose = require("mongoose");
const dotenv=require('dotenv');
const bodyParser = require('body-parser');
const call = require('./API/call');

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Twilio Call api route
app.use('/api', call);

const port = process.env.PORT || 3000;
const db_uri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/customers';

mongoose.connect(db_uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log("Connected to MongoDB successfully");
})
.catch(err=>{
  console.log(err);
  console.log("Unable to connect to MongoDB");
});


app.listen(port, () => {
  console.log(`Running on port ${port}`);
  console.log(`-----------------------`);
});