const router  = require("express").Router();
router.use(require("body-parser").urlencoded({extended: true}));

//This route receives the token and verifies it
router.post("/verify", (req, res) => {
    const id = req.body.id
    const token = req.body.token
    messagebird.verify.verify(id, token, (err, response) => {
        if (err) {
            res.status(err.statusCode).json({
                status: "Bad request",
                message: err.errors[0].description
            });
        } else {
            res.status(200).json({
                status: "sucess",
                message: "Phone number verification successful"
            })
        }
    })
})

module.exports = router;