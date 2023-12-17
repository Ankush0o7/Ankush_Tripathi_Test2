const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // Use _id for orderId
    customerFirstName: String,
    customerLastName: String,
    quantity: Number,
    price: Number,
    foodOrdered: String,
    orderDateTime: { type: Date, default: Date.now },
    totalAmount: Number // Define totalAmount as a Number field
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
