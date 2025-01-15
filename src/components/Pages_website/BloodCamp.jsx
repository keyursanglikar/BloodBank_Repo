import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './BloodCamp.css';

const CampSchedule = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [campData, setCampData] = useState([]);

  // Fetch countries on mount
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('/api/location/countries');
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStates = async (countryCode) => {
    try {
      const response = await axios.get(`/api/location/states?country=${countryCode}`);
      setStates(response.data);
      setCities([]); // Reset cities on country change
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (stateCode) => {
    try {
      const response = await axios.get(`/api/location/cities?country=${selectedCountry}&state=${stateCode}`);
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setSelectedState('');
    setSelectedCity('');
    fetchStates(countryCode);
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setSelectedCity('');
    fetchCities(stateCode);
  };

  const handleCityChange = (e) => {
    const cityCode = e.target.value;
    setSelectedCity(cityCode);
  };

  // Fetch blood camps based on selected location filters
  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/camps', {
        params: {
          country: selectedCountry,
          state: selectedState,
          city: selectedCity
        }
      });
      setCampData(response.data);
    } catch (error) {
      console.error("Error fetching blood camps:", error);
    }
  };

  return (
    <div className="Blood-Camp-Container">
      <div className="page-header">
        <h3 className="text-danger">Camp Schedule</h3>
      </div>
      <div className="panel panel-danger">
        <div className="panel-heading">Camp Schedules</div>
        <div className="panel-body">
          <div className="row">
            {/* Country Selection */}
            <div className="col-md-2">
              <select 
                id="countryCode" 
                className="form-control1" 
                onChange={handleCountryChange}
                value={selectedCountry}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.iso2} value={country.iso2}>{country.name}</option>
                ))}
              </select>
            </div>

            {/* State Selection */}
            <div className="col-md-2">
              <select 
                id="stateCode" 
                className="form-control1" 
                onChange={handleStateChange}
                value={selectedState}
                disabled={!selectedCountry}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.iso2} value={state.iso2}>{state.name}</option>
                ))}
              </select>
            </div>

            {/* City Selection */}
            <div className="col-md-3">
              <select 
                id="cityCode" 
                className="form-control1" 
                onChange={handleCityChange} 
                value={selectedCity}
                disabled={!selectedState}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.code} value={city.code}>{city.name}</option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="col-md-2">
              <button type="button" className="btn btn-danger" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          {/* Blood Camp List */}
          <div id="newbblist" style={{ display: campData.length > 0 ? 'block' : 'none' }}>
            <table id="example-table" className="table table-bordered table-hover">
              <thead className="bgtablered">
                <tr>
                  <th>S.No.</th>
                  <th>Date</th>
                  <th>Camp Name</th>
                  <th>Address</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Contact</th>
                  <th>Conducted By</th>
                  <th>Organized By</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {campData.map((camp, index) => (
                  <tr key={camp.id}>
                    <td>{index + 1}</td>
                    <td>{camp.date}</td>
                    <td>{camp.name}</td>
                    <td>{camp.address}</td>
                    <td>{camp.state}</td>
                    <td>{camp.city}</td>
                    <td>{camp.contact}</td>
                    <td>{camp.conductedBy}</td>
                    <td>{camp.organizedBy}</td>
                    <td>{camp.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampSchedule;
