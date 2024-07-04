const router = require('express').Router();
const Medicine = require('../models/Medicine');

// Get all medicines
router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new medicine
router.post('/add', async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const newMedicine = new Medicine({ name, description, price, stock });
    const savedMedicine = await newMedicine.save();
    res.json(savedMedicine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific medicine and its alternatives
router.get('/:id', async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id).populate('alternatives');
    res.json(medicine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add an alternative medicine
router.post('/:id/alternatives', async (req, res) => {
  try {
    const medicineId = req.params.id;
    const alternativeId = req.body.alternativeId;
    const medicine = await Medicine.findById(medicineId);
    medicine.alternatives.push(alternativeId);
    await medicine.save();
    res.json(medicine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const Order = require('../models/Order');

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
    res.json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Get all orders for an admin
router.get('/', async (req, res) => {
    try {
      const orders = await Order.find().populate('user').populate('medicines');
      res.json(orders);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Get orders for a specific user
  router.get('/user/:userId', async (req, res) => {
    try {
      const orders = await Order.find({ user: req.params.userId }).populate('medicines');
      res.json(orders);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;
  



module.exports = router;
// Get availability of a medicine in local stores
router.get('/:id/availability', async (req, res) => {
    try {
      const stores = await Store.find({ medicines: req.params.id }).populate('medicines');
      res.json(stores);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  