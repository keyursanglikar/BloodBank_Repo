import React from 'react';
import health from '../assets/healthcare.png';
import register from '../assets/register.png';
import Arrow from '../assets/RightArrow.png';
import Live from '../assets/saveLive.png';

import './DonationProcess.css';
const DonationProcess = () => {
  return (
    
      <div className="donation-process">
     
          <div className="step">
            <img src={register}alt="icon" className='Icon' />
              <p className='a'>Registration </p>
              <p className='b'>Sign up and schedule your first with ease</p>
          </div>
          <div className="arrows"><img src={Arrow} alt="arrowRight" /> </div>
          <div className="step">
          <img src={health} alt="icon" className='Icon'/>
              <p className='a'>Health Screening</p>
              <p className='b'>A simple check-up to ensure you’re ready to donate</p>
          </div>
          <div className="arrows"><img src={Arrow} alt="arrowRight" /></div>
          <div className="step">
          <img src={Live} alt="icon" className='Icon'/>
              <p className='a'> Donation Day</p>
              <p className='b'>Relax as our professional staff guide you through</p>
          </div>
       
      </div>
  );
};


export default DonationProcess;
