// import React, { useEffect, useState } from 'react';
// import './BloodAva.css';

// const BloodStockAvailability = () => {
//     const [stateCode, setStateCode] = useState("-1");
//     const [districtCode, setDistrictCode] = useState("-1");
//     const [cityCode, setCityCode] = useState("-1");
//     const [states, setStates] = useState([]);
//     const [districts, setDistricts] = useState([]);
//     const [cities, setCities] = useState([]);

//     useEffect(() => {
//         const fetchStates = async () => {
//             try {
//                 const response = await fetch('YOUR_API_URL/states'); // Replace with your API URL
//                 const data = await response.json();
//                 setStates(data);
//             } catch (error) {
//                 console.error("Error fetching states:", error);
//             }
//         };

//         fetchStates();
//     }, []);

//     const loadDistrictList = async (state) => {
//         try {
//             const response = await fetch(`YOUR_API_URL/districts/${state}`); // Replace with your API URL
//             const data = await response.json();
//             setDistricts(data);
//             setCities([]); // Clear cities when state changes
//             setDistrictCode("-1");
//             setCityCode("-1");
//         } catch (error) {
//             console.error("Error fetching districts:", error);
//         }
//     };

//     const loadCityList = async (district) => {
//         try {
//             const response = await fetch(`YOUR_API_URL/cities/${stateCode}/${district}`); // Replace with your API URL
//             const data = await response.json();
//             setCities(data);
//         } catch (error) {
//             console.error("Error fetching cities:", error);
//         }
//     };

//     const getBloodBankList = () => {
//         console.log('Searching for blood banks...');
//         // Implement the logic to fetch blood bank details based on selected location
//     };

//     return (
//         <div className="container wrapper">
//             <div className="page-header">
//                 <h3 className="text-danger">Blood Stock Availability</h3>
//             </div>
//             <div className="panel panel-danger">
//                 <div className="panel-heading">Search Blood Stock</div>
//                 <div className="panel-body">
//                     <div className="row">
//                         <div className="col-md-3">
//                             <select
//                                 name="stateCode"
//                                 onChange={(e) => {
//                                     setStateCode(e.target.value);
//                                     loadDistrictList(e.target.value);
//                                 }}
//                                 className="form-control"
//                                 id="stateCode"
//                             >
//                                 <option value="-1">Select State</option>
//                                 {states.map((state, index) => (
//                                     <option key={index} value={state.code}>{state.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="col-md-3 lineseparator">
//                             <select
//                                 name="districtCode"
//                                 onChange={(e) => {
//                                     setDistrictCode(e.target.value);
//                                     loadCityList(e.target.value);
//                                 }}
//                                 className="form-control"
//                                 id="districtCode"
//                                 disabled={districts.length === 0}
//                             >
//                                 <option value="-1">Select District</option>
//                                 {districts.map((district, index) => (
//                                     <option key={index} value={district.code}>{district.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="col-md-3 lineseparator">
//                             <select
//                                 name="cityCode"
//                                 onChange={(e) => setCityCode(e.target.value)}
//                                 className="form-control"
//                                 id="cityCode"
//                                 disabled={cities.length === 0}
//                             >
//                                 <option value="-1">Select City</option>
//                                 {cities.map((city, index) => (
//                                     <option key={index} value={city.code}>{city.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="col-md-3 lineseparator">
//                             <button
//                                 className="btn btn-danger btn-block"
//                                 onClick={getBloodBankList}
//                                 disabled={stateCode === "-1" || districtCode === "-1" || cityCode === "-1"}
//                             >
//                                 Search Blood Banks
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BloodStockAvailability;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BloodAva.css';

const BloodStockAvailability = () => {
    const [countryCode, setCountryCode] = useState("-1");
    const [stateCode, setStateCode] = useState("-1");
    const [districtCode, setDistrictCode] = useState("-1");
    const [cityCode, setCityCode] = useState("-1");
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [cities, setCities] = useState([]);
    const [bloodBanks, setBloodBanks] = useState([]); // State to hold blood bank data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const options = {
        method: 'POST',
        url: 'https://geodb-cities-graphql.p.rapidapi.com/',
        headers: {
            'x-rapidapi-key': '32a123a422mshaac92b9fac9830dp13929fjsn075d54736fe1',
            'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    // Fetch countries
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.request({
                    ...options,
                    data: {
                        query: `{
                            countries {
                                code
                                name
                            }
                        }`
                    }
                });
                setCountries(response.data.data.countries);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    // Fetch states based on selected country
    const loadStateList = async (country) => {
        try {
            const response = await axios.request({
                ...options,
                data: {
                    query: `query {
                        country(code: "${country}") {
                            states {
                                code
                                name
                            }
                        }
                    }`
                }
            });
            setStates(response.data.data.country.states);
        } catch (error) {
            console.error("Error fetching states:", error);
        }
    };

    // Fetch districts based on selected state
    const loadDistrictList = async (state) => {
        try {
            const response = await axios.request({
                ...options,
                data: {
                    query: `query {
                        state(code: "${state}") {
                            districts {
                                code
                                name
                            }
                        }
                    }`
                }
            });
            setDistricts(response.data.data.state.districts);
        } catch (error) {
            console.error("Error fetching districts:", error);
        }
    };

    // Fetch cities based on selected district
    const loadCityList = async (district) => {
        try {
            const response = await axios.request({
                ...options,
                data: {
                    query: `query {
                        district(code: "${district}") {
                            cities {
                                code
                                name
                            }
                        }
                    }`
                }
            });
            setCities(response.data.data.district.cities);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    // Fetch blood banks based on selected location
    const getBloodBankList = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:5000/api/blood-banks`, {
                params: {
                    countryCode,
                    stateCode,
                    districtCode,
                    cityCode,
                },
            });
            setBloodBanks(response.data); // Assuming the response is an array of blood banks
        } catch (error) {
            console.error("Error fetching blood banks:", error);
            setError("Error fetching blood banks. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Avacontainer wrapper">
            <div className="page-header">
                <h3 className="text-danger">Blood Stock Availability</h3>
            </div>
            <div className="panel panel-danger">
                <div className="panel-heading">Search Blood Stock</div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-3">
                            <select
                                name="countryCode"
                                onChange={(e) => {
                                    setCountryCode(e.target.value);
                                    setStateCode("-1"); // Reset state
                                    setDistrictCode("-1"); // Reset district
                                    setCityCode("-1"); // Reset city
                                    loadStateList(e.target.value);
                                }}
                                className="form-control"
                                id="countryCode"
                            >
                                <option value="-1">Select Country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country.code}>{country.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select
                                name="stateCode"
                                onChange={(e) => {
                                    setStateCode(e.target.value);
                                    setDistrictCode("-1"); // Reset district
                                    setCityCode("-1"); // Reset city
                                    loadDistrictList(e.target.value);
                                }}
                                className="form-control"
                                id="stateCode"
                                disabled={states.length === 0}
                            >
                                <option value="-1">Select State</option>
                                {states.map((state, index) => (
                                    <option key={index} value={state.code}>{state.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select
                                name="districtCode"
                                onChange={(e) => {
                                    setDistrictCode(e.target.value);
                                    setCityCode("-1"); // Reset city
                                    loadCityList(e.target.value);
                                }}
                                className="form-control"
                                id="districtCode"
                                disabled={districts.length === 0}
                            >
                                <option value="-1">Select District</option>
                                {districts.map((district, index) => (
                                    <option key={index} value={district.code}>{district.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select
                                name="cityCode"
                                onChange={(e) => setCityCode(e.target.value)}
                                className="form-control"
                                id="cityCode"
                                disabled={cities.length === 0}
                            >
                                <option value="-1">Select City</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city.code}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <button
                                className="btn btn-danger btn-block"
                                onClick={getBloodBankList}
                                disabled={countryCode === "-1" || stateCode === "-1" || districtCode === "-1" || cityCode === "-1"}
                            >
                                Search Blood Banks
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display loading indicator or errors */}
            {loading && <p>Loading blood banks...</p>}
            {error && <p className="text-danger">{error}</p>}

            {/* Display fetched blood banks */}
            <div className="blood-bank-results">
                <h4>Available Blood Banks:</h4>
                {bloodBanks.length > 0 ? (
                    <ul>
                        {bloodBanks.map((bank, index) => (
                            <li key={index}>{bank.name} - {bank.address}</li> // Adjust according to your response structure
                        ))}
                    </ul>
                ) : (
                    <p>No blood banks found for the selected location.</p>
                )}
            </div>
        </div>
    );
};

export default BloodStockAvailability;
