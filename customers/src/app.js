const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Customers=require("./models/customers");
const bodyParser=require('body-parser');
const cors=require('cors');

//Enable cors
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post("/customer",(req,res)=>{

    console.log(req.body);

    const costumer = new Customers({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        phone: req.body.phone
    });

    costumer.save()
    .then(result=>{ 
        res.status(200).json(costumer);
    })
    .catch(err=>{
        console.log(err);
        res.status(405).json({
            error:err
        });
    });
});

app.get("/customer/:customerId",(req,res)=>{
    console.log(req.params.customerId);
});

app.use(function(req, res, next) {
    res.status(404).send({
        error: true, 
        code: 404, 
        message: 'Not found'
    });
});

module.exports = app;