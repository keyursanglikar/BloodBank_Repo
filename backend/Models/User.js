const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: function() { return !this.googleId; } }, // Required only if googleId is not set
  googleId: { type: String }, // Optional, only if using Google signup
});

// Creating an index for faster search and unique constraint
userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);
