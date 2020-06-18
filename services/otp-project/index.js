const express = require("express"),
            // messagebird = require('messagebird')('REyBw3zfVbzp1nKy581Svpmsd'),
            messagebird = require('messagebird')('PRpFg1JwvolNubJ3XRnSRGtP0'),
            bodyParser = require("body-parser"),
            ejs = require("ejs"),
            verifyController = require("./controllers/verify-controller"),
            verifyPhoneController = require("./controllers/verify-phone-controller");

const app = express();

app.get("/", (req, res) => {
    res.sendFile("README.md",{root: __dirname})
})

app.use("/", verifyController)
app.use("/", verifyPhoneController)

app.listen(3000, ()=>{
    console.log("Server listening on :3000")
});