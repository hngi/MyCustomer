const mongoose = require("mongoose");

const debtSchema = new mongoose.Schema({
    owing: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        },
        data_due: {
            type: Date,
            required: true
        },
        isCleared: Boolean
})

module.exports = mongoose.model("debt", debtSchema);