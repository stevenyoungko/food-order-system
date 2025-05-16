const { Router } = require('express');
const {
  getOrders,
  addOrder,
  clearOrders,
} = require('../controllers/orderController');

const router = Router();

router.get('/', getOrders);

router.post('/', addOrder);

router.delete('/', clearOrders);

module.exports = router;
