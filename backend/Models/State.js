const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  countryCode: { type: String, required: true },
});

module.exports = mongoose.model('State', stateSchema);
