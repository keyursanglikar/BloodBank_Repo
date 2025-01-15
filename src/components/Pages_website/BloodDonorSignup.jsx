import axios from 'axios';
import React, { useState } from 'react';
import './BloodDonorSignup.css';

const BloodDonorSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    fatherName: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    address: '',
    pincode: '',
    captchaInput: '',
    captcha: Math.floor(Math.random() * 9000) + 1000
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const refreshCaptcha = () => {
    setFormData((prevData) => ({
      ...prevData,
      captcha: Math.floor(Math.random() * 9000) + 1000,
      captchaInput: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(formData.captchaInput) !== formData.captcha) {
      alert("Incorrect Captcha. Please try again.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/donors', formData);
      alert('Donor signed up successfully!');
      setFormData({
        name: '',
        age: '',
        gender: '',
        fatherName: '',
        mobile: '',
        email: '',
        state: '',
        district: '',
        address: '',
        pincode: '',
        captchaInput: '',
        captcha: Math.floor(Math.random() * 9000) + 1000
      });
    } catch (error) {
      console.error('Error signing up donor:', error);
      alert('Failed to sign up donor.');
    }
  };

  return (
    <div className="heading"><h2>Blood Donor Signup</h2>
    <div className="signup-container">
   
      <div className="signup-box">
   
      
        <div className="form-section">
        
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </form>
        </div>
        
        <div className="form-section">
          <div className="form-group">
            <label>Father's Name</label>
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>District</label>
            <input type="text" name="district" value={formData.district} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>Pincode</label>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Captcha</label>
            <div className="captcha-container">
              <span>{formData.captcha}</span>
              <button type="button" onClick={refreshCaptcha}>Refresh</button>
            </div>
            <input type="text" name="captchaInput" value={formData.captchaInput} onChange={handleChange} required />
          </div>

          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BloodDonorSignup;
