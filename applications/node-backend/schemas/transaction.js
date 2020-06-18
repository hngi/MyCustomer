const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    date: {
            type: Date,
            default: Date.now()
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        payment_method: {
            type: String,
            default: "Cash"
        },
        isCleared: Boolean
})

module.exports = mongoose.model("transaction", transactionSchema);