const app = require("./src/app");
const mongoose = require("mongoose");
const dotenv=require('dotenv');

dotenv.config();

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