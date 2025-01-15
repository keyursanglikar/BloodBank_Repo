const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  stateCode: { type: String, required: true },
});

module.exports = mongoose.model('District', districtSchema);
