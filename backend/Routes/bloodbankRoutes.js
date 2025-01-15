// routes/bloodBankRoutes.js
const express = require('express');
const router = express.Router();
const bloodBankController = require('../Controllers/bloodbankController');

// Route to add a new blood bank
router.post('/add', bloodBankController.addBloodBank);

module.exports = router;
