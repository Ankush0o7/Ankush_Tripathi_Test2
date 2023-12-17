const Order = require('../models/order');
const mongoose = require('mongoose'); 
exports.registerOrder = async (req, res) => {
    try {
        const { orderId, customerFirstName, customerLastName, quantity, price, foodOrdered, orderDate } = req.body;

        const totalAmount = quantity * price; // Calculate total amount

        const newOrder = new Order({
            _id: orderId,
            customerFirstName,
            customerLastName,
            quantity,
            price,
            foodOrdered,
            totalAmount,
            orderDate // Include order date in the order creation
        });

        await newOrder.save();
        console.log('Order registered successfully');
        res.status(200).send('Order registered successfully');
    } catch (error) {
        console.error('Error registering order:', error);
        res.status(500).send('Error registering order');
    }
};

exports.displayOrders = async (req, res) => {
    try {
        const orders = await Order.find().select('orderID customerFirstName customerLastName totalAmount');
        res.render('displayOrders', { orders }); // Render the DisplayOrders view with fetched orders
    } catch (error) {
        res.status(500).send('Error fetching orders');
    }
};

exports.searchOrder = async (req, res) => {
    try {
        const { orderId } = req.body;
        const order = await Order.findOne({ _id: orderId }); // Find order by ID

        if (!order) {
            return res.render('search', { message: 'Order ID not found', order: null }); // Pass null when order not found
        }

        res.render('search', { order }); // Render the Search view with order details
    } catch (error) {
        res.status(500).send('Error searching for order');
    }
};


exports.customerOrders = async (req, res) => {
    try {
        const { customerFirstName, customerLastName } = req.body;
        const customerOrders = await Order.find({
            customerFirstName,
            customerLastName
        }); // Find all orders for a specific customer

        let totalPayment = 0;
        customerOrders.forEach(order => {
            totalPayment += order.totalAmount; // Calculate sum of payments
        });

        res.render('customerOrders', { customerOrders, totalPayment }); // Render the CustomerOrders view with customer's orders and total payment
    } catch (error) {
        res.status(500).send('Error fetching customer orders');
    }
};
exports.modifyOrder = async (req, res) => {
    try {
        const { orderId, customerFirstName, customerLastName, quantity, price, foodOrdered } = req.body;

        const totalAmount = quantity * price; // Calculate total amount

        // Find the order by ID and update its details
        const updatedOrder = await Order.findByIdAndUpdate(orderId, {
            customerFirstName,
            customerLastName,
            quantity,
            price,
            foodOrdered,
            totalAmount
        }, { new: true }); // Set new: true to return the updated order

        if (!updatedOrder) {
            return res.status(404).send('Order not found');
        }

        // Redirect to a different route or page after successful modification
        res.redirect(`/`); // Redirect to the modify page with the updated order details

    } catch (error) {
        console.error(error);
        res.status(500).send('Error modifying order');
    }
};
// orderController.js

exports.ordersByDate = async (req, res) => {
    try {
        const { date } = req.params;
        
        // Assuming 'orderDate' is the field where the order date is stored in the Order schema
        const orders = await Order.find({ orderDate: date });
        
        res.render('ordersByDate', { orders }); // Render a view displaying orders placed on the specific date
    } catch (error) {
        res.status(500).send('Error fetching orders by date');
    }
};


