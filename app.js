const express = require('express');
const app = express();
require('dotenv').config();
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payments');
const transactionRoutes = require('./routes/transactions');
const cors = require('cors'); // Import corsconst transactionRoutes = require('./routes/transactions');


app.use(express.json()); 
app.use(cors()); // Tambahkan middleware CORS

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/transactions', transactionRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
