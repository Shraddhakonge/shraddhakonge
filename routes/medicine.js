const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  alternatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' }],
});

module.exports = mongoose.model('Medicine', medicineSchema);
