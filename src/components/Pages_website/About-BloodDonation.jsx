import React from 'react';
import './About-BloodDonation.css';

const AboutBloodDonation = () => {
  return (
    <div className="about-blood-donation">
      <header className="hero-section">
        <h1>About Blood Donation</h1>
        <p>Saving lives through the gift of blood donation.</p>
      </header>

      <div className="info-container">
        <section className="info-box">
          <h2>Why Donate Blood?</h2>
          <p>Blood donation is a life-saving act that helps millions of people worldwide. Your blood can be used to treat patients in emergency situations, surgery, cancer treatment, and for people with blood disorders.</p>
        </section>

        <section className="info-box">
          <h2>Who Can Donate?</h2>
          <p>Most people between the ages of 18 and 65, weighing at least 50kg, and in good health can donate blood. Specific eligibility requirements may vary, so it’s always best to check with your local blood bank.</p>
        </section>

        <section className="info-box">
          <h2>Donation Process</h2>
          <p>Blood donation typically takes about 10-15 minutes, and the entire process including registration, screening, and recovery usually takes around an hour. After donation, your body replaces the lost fluids within 24 hours, and red blood cells within a few weeks.</p>
        </section>

        <section className="info-box">
          <h2>Types of Donations</h2>
          <p>There are various types of donations including whole blood, platelet, plasma, and double red cell donations. Each type of donation serves a unique purpose and can be used for different patient needs.</p>
        </section>

        <section className="info-box">
          <h2>Benefits of Donating Blood</h2>
          <p>Donating blood not only helps those in need, but it also has health benefits for donors, including a potential reduction in heart disease risk and a mini health screening during the donation process.</p>
        </section>
      </div>
    </div>
  );
};

export default AboutBloodDonation;
