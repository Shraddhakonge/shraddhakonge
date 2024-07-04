const router = require('express').Router();
const Order = require('../models/Order');
const sendEmail = require('../mailer');

// Place an order
router.post('/place', async (req, res) => {
  try {
    const { userId, medicines, deliveryAddress, totalAmount } = req.body;
    const newOrder = new Order({
      user: userId,
      medicines,
      deliveryAddress,
      totalAmount,
    });
    const savedOrder = await newOrder.save();

    // Send notification email
    sendEmail(
      'user-email@example.com',  // Replace with user's email
      'Order Confirmation',
      `Your order ${savedOrder._id} has been placed successfully.`
    );

    res.json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
