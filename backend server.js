// Import required packages
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample dataset (dummy data for now)
const topProducts = ["Classic T-Shirt", "Denim Jeans", "Leather Jacket", "Sneakers", "Hoodie"];

// Default route
app.get('/', (req, res) => {
    res.send('Backend is running for E-commerce Chatbot');
});

// API to get top 5 most sold products
app.get('/top-products', (req, res) => {
    res.json({ products: topProducts });
});

// API to get order status by ID
app.get('/order-status/:id', (req, res) => {
    const orderId = req.params.id;
    res.json({ orderId, status: "Shipped" });
});

// API to check stock for a specific product
app.get('/stock/:product', (req, res) => {
    const product = req.params.product;
    res.json({ product, stock: 25 });
});

// Start the server
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});
