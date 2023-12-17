const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./models/order');
const {
    registerOrder,
    displayOrders,
    searchOrder,
    customerOrders,
    modifyOrder
} = require('./controllers/orderController');

mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    res.render('register'); // Render the Register view
});

app.post('/registerOrder', registerOrder);
app.get('/', displayOrders);
app.post('/search', searchOrder);
app.post('/customerOrders', customerOrders);
//app.get('/ordersByDate/:date', orderController.ordersByDate);


// Route to render the modify form
// Assuming you have the Order model and other required modules imported

app.get('/modify/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findById(orderId);

        if (order) {
            // Render the modify.ejs template with the 'order' variable
            res.render('modify', { order, message: 'Modify your order' });
        } else {
            // Handle the case where the order is not found
            res.render('modify', { message: 'Order not found' });
        }
    } catch (error) {
        // Handle any errors that may occur during the process
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Route to handle the modification logic
app.post('/modify/:orderId', modifyOrder);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
