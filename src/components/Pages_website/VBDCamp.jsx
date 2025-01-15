import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './VBDCamp.css';

const RegisterCamp = () => {
  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    mobileNo: '',
    emailId: '',
    coOrganizerName: '',
    coOrganizerMobile: '',
    campName: '',
    campAddress: '',
    country: 'IN', // Default country set to India
    state: '',
    cityName: '',
    district: '', // District is manually entered
    bloodBank: '',
    campProposeDate: '',
    startTime: '',
    endTime: '',
    latitude: '',
    longitude: '',
    excitedParticipants: '',
    reference: '',
    remarks: '',
  });


    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
  
    // Fetch countries on mount
    useEffect(() => {
      fetchCountries();
    }, []);
  
    // Fetch countries from the API
    const fetchCountries = async () => {
      try {
        const response = await axios.get('/api/location/countries');
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
  
    // Fetch states based on the selected country
    const fetchStates = async (countryCode) => {
      try {
        const response = await axios.get(`/api/location/states?country=${countryCode}`);
        setStates(response.data);
        setCities([]); // Reset cities when country is changed
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
  
    // Fetch cities based on the selected state and country
    const fetchCities = async (stateCode) => {
      try {
        const response = await axios.get(`/api/location/cities?country=${selectedCountry}&state=${stateCode}`);
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
  
    // Handle country selection
    const handleCountryChange = (e) => {
      const countryCode = e.target.value;
      setSelectedCountry(countryCode);
      setSelectedState(''); // Reset state
      setSelectedCity(''); // Reset city
      fetchStates(countryCode);
    };
  
    // Handle state selection
    const handleStateChange = (e) => {
      const stateCode = e.target.value;
      setSelectedState(stateCode);
      setSelectedCity(''); // Reset city
      fetchCities(stateCode);
    };
  
    // Handle city selection
    const handleCityChange = (e) => {
      const cityCode = e.target.value;
      setSelectedCity(cityCode);
    };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/camp/camps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to register camp');
      }

      const data = await response.json();
      console.log('Camp registered:', data);
      setFormData({
        organizationType: '',
        organizationName: '',
        mobileNo: '',
        emailId: '',
        coOrganizerName: '',
        coOrganizerMobile: '',
        campName: '',
        campAddress: '',
        country: 'IN', // Reset to India
        state: '',
        cityName: '',
        district: '', // Reset district input
        bloodBank: '',
        campProposeDate: '',
        startTime: '',
        endTime: '',
        latitude: '',
        longitude: '',
        excitedParticipants: '',
        reference: '',
        remarks: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  return (
    <div className="vBD-container">
      <h2 className="form-title">Register Blood Donation Camp</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => {
          const isRequired = !(key === 'coOrganizerName' || key === 'coOrganizerMobile' || key === 'latitude' || key === 'longitude' || key === 'reference' || key === 'remarks');

          if (key === 'remarks') {
            return (
              <div className="form-group" key={key}>
                <label>
                  {formatLabel(key)}:
                  <textarea
                    className="form-textarea"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    required={isRequired}
                  />
                </label>
              </div>
            );
          }

          if (key === 'country') {
            return (
              <div className="form-group" key={key}>
                <label>
                  {formatLabel(key)}:
                  <select
                    className="form-select"
                    name={key}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    required={isRequired}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={`${country.iso2}-${index}`} value={country.iso2}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            );
          }

          if (key === 'state') {
            return (
              <div className="form-group" key={key}>
                <label>
                  {formatLabel(key)}:
                  <select
                    className="form-select"
                    name={key}
                    value={selectedState}
                    onChange={handleStateChange}
                    disabled={!selectedCountry} 
                    required={isRequired}
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                      <option key={`${state.code}-${index}`} value={state.code}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            );
          }

          if (key === 'cityName') {
            return (
              <div className="form-group" key={key}>
                <label>
                  {formatLabel(key)}:
                  <select
                    className="form-select"
                    name={key}
                    value={selectedCity}
                    onChange={handleCityChange}
                    disabled={!selectedCountry} 
                    required={isRequired}
                  >
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                      <option key={`${city.name}-${formData.state}-${formData.country}-${index}`} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            );
          }

          if (key === 'district') {
            return (
              <div className="form-group" key={key}>
                <label>
                  {formatLabel(key)}:
                  <input
                    className="form-input"
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    required={isRequired}
                    placeholder="Enter District"
                  />
                </label>
              </div>
            );
          }

          return (
            <div className="form-group" key={key}>
              <label>
                {formatLabel(key)}:
                <input
                  className="form-input"
                  type={key.includes('No') || key.includes('Participants') ? 'number' : key === 'emailId' ? 'email' : key === 'campProposeDate' ? 'date' : 'text'}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  required={isRequired}
                />
              </label>
            </div>
          );
        })}
        <button className="form-button" type="submit">Register Camp</button>
      </form>
    </div>
  );
};

export default RegisterCamp;
