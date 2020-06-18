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

app.post("/customer",(req,res)=> {
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

app.put("/customer", (req,res)=>{
    Customers.findById(req.body._id, (err, customer) => {
        if(err) {
            res.status(404).send({
                error: true, 
                code: 404, 
                message: 'Not found'
            });
        } else {
            customer.name = req.body.name
            customer.phone = req.body.phone
            customer.save()
            res.send(customer)
        }
    });
});

app.get("/customer/:customerId",(req,res)=>{
    Customers.findById(req.params.customerId, (err, customer) => {
        if(err) {
            res.status(404).send({
                error: true, 
                code: 404, 
                message: 'Not found'
            });
        } else {
            res.send(customer)
        }
    });
});

app.delete("/customer/:customerId",(req,res)=>{
    Customers.findByIdAndDelete(req.params.customerId, (err, customer) => {
        if(err || !customer) {
            res.status(404).send({
                error: true, 
                code: 404, 
                message: 'Not found'
            });
        } else {
            res.send(customer)
        }
    });
});

app.get("/customers",(req,res)=>{
    Customers.find({}, (err, customers) => {
        if(err) {
            res.status(404).send({
                error: true, 
                code: 404, 
                message: 'Not found'
            });
        } else {
            res.send(customers)
        }
    });
});

app.use(function(req, res, next) {
    res.status(404).send({
        error: true, 
        code: 404, 
        message: 'Not found'
    });
});

module.exports = app;