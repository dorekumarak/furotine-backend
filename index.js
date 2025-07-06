<<<<<<< HEAD
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();

// ✅ Fix CORS for frontend
app.use(cors({
  origin: 'http://localhost:3000', // allow frontend dev server
  credentials: true
}));

// ✅ Body parser
app.use(express.json());

// ✅ API Routes
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

// ✅ Default Route
app.get('/', (req, res) => {
  res.send('Furotine API is running...');
});

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
  // ✅ Start server after DB is ready
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
=======
// index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();

// ✅ Middleware
app.use(cors()); // Fully enables CORS for all origins
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
app.use('/api/products', productRoutes);

// ✅ Server Start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
>>>>>>> 9c894fe759973b7c960545124345526e90c8310b
});
