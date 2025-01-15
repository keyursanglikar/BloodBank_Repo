const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
  organizationType: String,
  organizationName: String,
  mobileNo: String,
  emailId: String,
  coOrganizerName: String,
  coOrganizerMobile: String,
  campName: String,
  campAddress: String,
  state: String,
  district: String,
  cityName: String,
  bloodBank: String,
  campProposeDate: Date,
  startTime: String,
  endTime: String,
  latitude: String,
  longitude: String,
  excitedParticipants: Number,
  reference: String,
  remarks: String,
});

const Camp = mongoose.model('BloodDonationCamps', campSchema);

module.exports = Camp;
