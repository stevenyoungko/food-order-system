const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/orders', orderRoutes);

app.listen(PORT);

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

async function connectMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB...');

    // Start server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

connectMongoDB();
