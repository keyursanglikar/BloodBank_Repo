const BloodBank = require('../Models/BloodBank');

// POST method to add a new Blood Bank
const addBloodBank = async (req, res) => {
  try {
    const bloodBank = new BloodBank(req.body); // Assuming body contains form data

    // Save the BloodBank to the database
    await bloodBank.save();

    res.status(201).json({ message: 'Blood Bank added successfully' });
  } catch (error) {
    console.error('Error saving blood bank:', error);
    res.status(500).json({ error: 'Server error, could not save data' });
  }
};

module.exports = { addBloodBank };
