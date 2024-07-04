const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medicine', required: true }],
  deliveryAddress: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
