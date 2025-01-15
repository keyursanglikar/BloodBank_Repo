import React, { useEffect, useState } from 'react';
import './BloodDirectory.css';

const BloodBank = () => {
  const [locationPermission, setLocationPermission] = useState(false);
  const [stateCode, setStateCode] = useState('-1');
  const [districtCode, setDistrictCode] = useState('-1');
  const [cityCode, setCityCode] = useState('-1');
  const [bloodBanks, setBloodBanks] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedBloodBank, setSelectedBloodBank] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationPermission(true);
          setCurrentLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        },
        () => {
          setLocationPermission(false);
          alert('User denied the request for Geolocation.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const loadDistrictList = (state) => {
    setStateCode(state);
    setDistrictCode('-1'); // Reset district and city when state changes
    setCityCode('-1');
    // Logic to fetch district list based on state (not shown)
  };

  const loadCityList = (district) => {
    setDistrictCode(district);
    setCityCode('-1'); // Reset city when district changes

    // Fetch cities based on selected state and district
    fetch(`http://localhost:5000/cities?stateCode=${stateCode}&districtCode=${district}`)
      .then(response => response.json())
      .then(data => {
        setCities(data); // Update cities state
      })
      .catch(err => {
        console.error('Error fetching cities:', err);
      });
  };

  const getBloodBanks = () => {
    if (stateCode === '-1' || districtCode === '-1' || cityCode === '-1') {
      alert('Please select state, district, and city.');
      return;
    }

    // Fetch blood banks based on selected state, district, and city
    fetch(`http://localhost:5000/bloodbanks?stateCode=${stateCode}&districtCode=${districtCode}&cityCode=${cityCode}`)
      .then(response => response.json())
      .then(data => {
        setBloodBanks(data); // Update blood banks state
      })
      .catch(err => {
        console.error('Error fetching blood banks:', err);
      });
  };

  return (
    <div className="Direccontainer wrapper">
      <div className="page-header">
        <h3 className="text-danger">Nearest Blood Bank(BB)/ Blood Storage Unit(BSU)</h3>
      </div>

      <div className="row">
        <div className="col-md-3">
          <select
            id="donorAddStateCode"
            className="form-control"
            onChange={(e) => loadDistrictList(e.target.value)}
          >
            <option value="-1">Select State</option>
            <option value="35">Andaman &amp; Nicobar Islands</option>
            <option value="28">Andhra Pradesh</option>
            {/* Add more states as needed */}
            <option value="19">West Bengal</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            id="distList"
            className="form-control"
            onChange={(e) => loadCityList(e.target.value)}
          >
            <option value="-1">Select District</option>
            {/* District options will be populated here */}
          </select>
        </div>

        <div className="col-md-3">
          <select
            id="cityList"
            className="form-control"
            onChange={(e) => setCityCode(e.target.value)}
          >
            <option value="-1">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select
            id="bloodBankSelect"
            className="form-control"
            onChange={(e) => setSelectedBloodBank(e.target.value)}
          >
            <option value="">Select Blood Bank or Hospital</option>
            {bloodBanks.map((bank) => (
              <option key={bank.id} value={bank.name}>{bank.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <button type="button" className="btn btn-danger" onClick={getBloodBanks}>
            Search
          </button>
        </div>
      </div>

      <div className="row">
        <div id="bblist">
          <h5 align="left">
            <span className="label label-info">{currentLocation || 'Location not detected.'} </span>
          </h5>
        </div>
      </div>

      <div className="row">
        <div>
          <dl>
            <ul className="legend">
              <li className="legendtext"><span className="govt"></span> Government Blood Banks</li>
              <li className="legendtext"><span className="others"></span> Other Blood Banks</li>
            </ul>
          </dl>
          <h5 align="right">
            <span className="label"><a id="btnShow">Click to show search results on Map</a></span>
          </h5>
        </div>
      </div>

      <div className="row">
        <div id="example-table_wrapper" className="dataTables_wrapper no-footer">
          <div className="dataTables_length" id="example-table_length">
            <label>
              Show <select name="example-table_length" className="">
                <option value="4">4</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="-1">All</option>
              </select> entries
            </label>
          </div>

          <div id="example-table_filter" className="dataTables_filter">
            <label>Search:<input type="search" className="" placeholder="" aria-controls="example-table" /></label>
          </div>

          <table id="example-table" className="table table-bordered table-hover table-striped dt-responsive dataTable no-footer dtr-inline collapsed">
            <thead className="bgtablered">
              <tr role="row">
                <th className="fnt" style=  {{ width: '5%' }}>S.No.</th>
                <th className="fnt" style={{ width: '25%' }}>Name</th>
                <th className="fnt" style={{ width: '20%' }}>Address</th>
                <th className="fnt" style={{ width: '10%' }}>Phone</th>
                <th className="fnt" style={{ width: '10%' }}>Email</th>
                <th className="fnt" style={{ width: '10%' }}>Category</th>
                <th className="fnt" style={{ width: '10%' }}>Distance (km)</th>
                <th className="fnt" style={{ width: '5%' }}>Type</th>
              </tr>
            </thead>
            <tbody>
              {bloodBanks.length > 0 ? bloodBanks.map((bank, index) => (
                <tr key={bank.id}>
                  <td>{index + 1}</td>
                  <td>{bank.name}</td>
                  <td>{bank.address}</td>
                  <td>{bank.phone}</td>
                  <td>{bank.email}</td>
                  <td>{/* Add logic for category */}</td>
                  <td>{/* Add logic for distance */}</td>
                  <td>{/* Add logic for type */}</td>
                </tr>
              )) : (
                <tr className="odd">
                  <td colSpan="8" className="dataTables_empty">No data available in table</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
