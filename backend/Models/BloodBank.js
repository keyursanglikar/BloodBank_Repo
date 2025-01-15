// models/BloodBank.js
const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
  bloodBankName: { type: String, required: true },
  parentHospitalName: { type: String },
  shortName: { type: String },
  category: { type: String, required: true },
  contactPerson: { type: String, required: true },
  contactNo: { type: String, required: true },
  registrationDate: { type: Date, required: true },
  licenceNo: { type: String },
  fromDate: { type: Date },
  toDate: { type: Date },
  apheresisFacility: { type: String },
  helplineNo: { type: String },
  address1: { type: String, required: true },
  address2: { type: String },
  pincode: { type: String, required: true },
  latitude: { type: String },
  longitude: { type: String },
  website: { type: String },
  numberOfBeds: { type: Number },
  donorType: { type: String, required: true },
  donationType: { type: String, required: true },
  componentType: { type: String, required: true },
  bagType: { type: String },
  ttiType: { type: String },
  remarks: { type: String },
});

const BloodBank = mongoose.model('BloodBankDetails', bloodBankSchema);

module.exports = BloodBank;
