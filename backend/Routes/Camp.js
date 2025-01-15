const express = require('express');
const router = express.Router();
const Camp = require('../Models/RegisteredCamp');  // Import the Camp model

// POST route to register a new camp
router.post('/camps', async (req, res) => {
  const {
    organizationType,
    organizationName,
    mobileNo,
    emailId,
    coOrganizerName,
    coOrganizerMobile,
    campName,
    campAddress,
    state,
    district,
    cityName,
    bloodBank,
    campProposeDate,
    startTime,
    endTime,
    latitude,
    longitude,
    excitedParticipants,
    reference,
    remarks
  } = req.body;

  try {
    const newCamp = new Camp({
      organizationType,
      organizationName,
      mobileNo,
      emailId,
      coOrganizerName,
      coOrganizerMobile,
      campName,
      campAddress,
      state,
      district,
      cityName,
      bloodBank,
      campProposeDate,
      startTime,
      endTime,
      latitude,
      longitude,
      excitedParticipants,
      reference,
      remarks
    });

    // Save the new camp registration in the database
    await newCamp.save();

    // Send a success response
    res.status(201).json({ message: 'Camp registered successfully', data: newCamp });
  } catch (error) {
    res.status(500).json({ message: 'Error registering camp', error: error.message });
  }
});

module.exports = router;
