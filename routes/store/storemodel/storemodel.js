const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  medicines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' }],
});

module.exports = mongoose.model('Store', storeSchema);
