const Order = require('../models/order');

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ timestamp: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

exports.addOrder = async (req, res) => {
  try {
    const { id, items, total, timestamp } = req.body;

    if (!id || !items || !total || !timestamp) {
      return res.status(400).json({ message: 'Missing required order fields' });
    }

    const newOrder = new Order({
      id,
      items,
      total,
      timestamp,
    });

    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error('Error adding order:', error);
    res.status(500).json({ message: 'Failed to add order' });
  }
};

exports.clearOrders = async (req, res) => {
  try {
    await Order.deleteMany({});
    res.status(200).json({ message: 'All orders cleared' });
  } catch (error) {
    console.error('Error clearing orders:', error);
    res.status(500).json({ message: 'Failed to clear orders' });
  }
};
