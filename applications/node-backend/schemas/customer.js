const mongoose = require("mongoose"),
            debtSchema = require("./debt"),
            transactionSchema = require("./transaction")

const customerSchema = new mongoose.Schema({
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
        home_address: {
            type: String,
            required: true
        },
        reg_date: {
            type: Date,
            default: Date.now()
        },
        transactions: [
            transactionSchema
        ],
        debts: [
            debtSchema
        ]
})

module.exports = mongoose.model("customer", customerSchema);