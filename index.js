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
});
