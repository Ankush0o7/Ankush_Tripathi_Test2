# Order Management System

This repository contains code for an Order Management System built with Node.js and MongoDB using Mongoose.

## Purpose

The purpose of this system is to manage orders, including creation, modification, and retrieval of order details. It utilizes a MongoDB database to store order information and provides functionalities to interact with this data.

## Model - Order

The `Order` model represents the structure of an order within the system. It includes fields such as `_id`, `customerFirstName`, `customerLastName`, `quantity`, `price`, `foodOrdered`, `orderDateTime`, and `totalAmount`.

### Attributes

- `_id`: Unique identifier for the order (orderId).
- `customerFirstName`: First name of the customer placing the order.
- `customerLastName`: Last name of the customer placing the order.
- `quantity`: Quantity of the ordered item.
- `price`: Price of the ordered item.
- `foodOrdered`: Description/name of the food item ordered.
- `orderDateTime`: Date and time when the order was placed.
- `totalAmount`: Total amount calculated from quantity * price.

## Controllers

### `registerOrder`

Creates a new order based on provided details, calculates the total amount, and saves it to the database.

### `displayOrders`

Retrieves all orders from the database and renders a view to display them.

### `searchOrder`

Finds an order by its `_id` and renders a view displaying the order details.

### `customerOrders`

Retrieves all orders for a specific customer and calculates the total payment for their orders. Renders a view displaying the customer's orders and total payment.

### `modifyOrder`

Updates an existing order's details based on provided information, calculates the total amount, and redirects to a specified route after successful modification.

### `ordersByDate`

Fetches orders placed on a specific date and renders a view displaying these orders.

## Usage

- Ensure MongoDB is set up and running.
- Install dependencies using `npm install`.
- Use these controllers/routes within your Node.js application to manage orders.
- Customize views/templates according to your application's UI requirements.

This system provides a foundation for managing orders efficiently within a Node.js environment. Customize and extend it based on your specific use case.
