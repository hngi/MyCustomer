const router = require("express").Router();

router.use(require("body-parser").urlencoded({extended: true}))

router.post("/verify-phone", (req, res) => {
    var params = {
        originator: "MyCustomer"
    };

    messagebird.verify.create(req.body.phone, params, function (err, response) {
        if (err) {
            res.status(401).json({
                status: "Fail",
                message: err.errors[0].description
            })
        }
        res.render("verify-phone.ejs", {
            response
        });
    });

})
