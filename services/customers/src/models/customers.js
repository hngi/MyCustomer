const mongoose=require('mongoose');

customerSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String || undefined,
    phone: String || undefined
});

module.exports=mongoose.model('customers',customerSchema);