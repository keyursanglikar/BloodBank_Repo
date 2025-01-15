import React, { useEffect, useState } from 'react';
import './BloodStatictics.css';

const BloodStatictics = () => {
  const [registeredDonors, setRegisteredDonors] = useState(0);
  const [donatedUnits, setDonatedUnits] = useState(0);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        // Replace this with your API call
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        
        // Update state with fetched data
        setRegisteredDonors(data.registeredDonors);
        setDonatedUnits(data.donatedUnits);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once when component mounts

  return (
    <div className="donorCount">
      <div className="d-xl-flex d-lg-flex d-md-flex d-sm-flex cont">
        <div className="bg-left w-100 text-xl-end text-lg-end text-md-end text-sm-end text-center">
          <p id="registeredDonorsAll" className="count mb-0">
            {registeredDonors.toLocaleString()}
          </p>
          <p className="totalCount mb-0 font-bold">Donors Registered</p>
        </div>
        <div className="bg-right w-100 text-xl-start text-lg-start text-md-start text-sm-start text-center ">
          <p id="donorsDonatedAll" className="count mb-0">
            {donatedUnits.toLocaleString()}
          </p>
          <p className="totalCount mb-0 font-bold">Blood Units Collected</p>
        </div>
      </div>
    </div>
  );
};

export default BloodStatictics;
