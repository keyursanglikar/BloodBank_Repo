const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  districtCode: { type: String, required: true },
});

module.exports = mongoose.model('City', citySchema);
