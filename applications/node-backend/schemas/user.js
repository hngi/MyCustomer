const mongoose = require("mongoose"),
            customerSchema = require("./customer"),
            transactionSchema = require("./transaction"),
            debtSchema = require("./debt")

const userSchema = new mongoose.Schema({
    profile:{
        firstname: {
                type: String,
                required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        bussiness_name: {
            type: String,
            required: true
        },
        business_address: {
            type: String,
            required: true
        },
        home_address: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: true
        },
        reg_date: {
            type: Date,
            default: Date.now()
        },
        password: { 
            type: String, 
            required: true 
        }
    },
    customers: [
        customerSchema
    ],
    transactions: [
        transactionSchema
    ]
})

module.exports = mongoose.model("user", userSchema);