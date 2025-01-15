// backend/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/auth');
// const locationRoutes = require('./Routes/location'); // Add location routes
const bloodBanksRoutes = require('./Routes/bloodbankRoutes'); // Add location routes
const locationRoutes = require('./Routes/LocationRoutes');
const camprouter= require('./Routes/Camp');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const app = express();



app.use(cors()); 

// Load environment variables
dotenv.config();



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));



  app.use(express.json()); // Middleware to parse JSON
app.use('/auth', authRoutes);
app.use('/Banks', bloodBanksRoutes);
app.use('/api/location', locationRoutes);
app.use('/camp',camprouter)
// app.use('/api/location', locationRoutes); // Location routes
// // app.use('/api/bloodbank', bloodBanksRoute);
// app.use('/api/bloodbank', bloodBanksRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
