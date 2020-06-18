
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const ejs = require("ejs");
var cors = require('cors');
const phone_verification = require('./routes/verify-phone-number')
const example = require('./routes/example');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.set("view engine", "ejs");

app.use(phone_verification)
app.use(example)
require('dotenv').config()

app.listen(5000, () => {
    console.log(`app running on port: http://localhost:5000`);
});
