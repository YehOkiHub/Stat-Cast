const mongoose = require("mongoose");
const User = require('./user');

const orderSchema = new mongoose.Schema({
    total: {
        type: Number,
        required: true
    },
    customer_id: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true, 
        index: true
    }
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order