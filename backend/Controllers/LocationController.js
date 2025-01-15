const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.LOCATION_API_KEY;
const BASE_URL = 'https://api.countrystatecity.in/v1';

// Create an axios instance with base URL and headers
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'X-CSCAPI-KEY': API_KEY }
});

// Fetch all countries
exports.getCountries = async (req, res) => {
  try {
    const response = await apiClient.get('/countries');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Error fetching countries' });
  }
};

// Fetch states for a specific country
exports.getStates = async (req, res) => {
  const { country } = req.query;
  if (!country) {
    return res.status(400).json({ error: 'Country code is required' });
  }

  try {
    const response = await apiClient.get(`/countries/${country}/states`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching states:', error);
    res.status(500).json({ error: 'Error fetching states' });
  }
};


// exports.getDistricts = async (req, res) => {
//     const { country, state } = req.query;
//     if (!country || !state) {
//       return res.status(400).json({ error: 'Country and state codes are required' });
//     }
  
//     try {
//       const response = await apiClient.get(`/countries/${country}/states/${state}/districts`);
//       res.json(response.data);
//     } catch (error) {
//       console.error('Error fetching districts:', error);
//       res.status(500).json({ error: 'Error fetching districts' });
//     }
//   };

// Fetch cities for a specific state within a country
exports.getCities = async (req, res) => {
  const { country, state } = req.query;
  if (!country || !state) {
    return res.status(400).json({ error: 'Country and state codes are required' });
  }

  try {
    const response = await apiClient.get(`/countries/${country}/states/${state}/cities`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ error: 'Error fetching cities' });
  }
};
