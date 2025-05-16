const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  quantity: Number,
});

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
  total: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
