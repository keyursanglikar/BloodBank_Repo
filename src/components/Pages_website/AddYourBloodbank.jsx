import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './AddYourBloodBank.css';

const AddBloodBank = () => {
  const [formData, setFormData] = useState({
    bloodBankName: '',
    parentHospitalName: '',
    shortName: '',
    category: '',
    contactPerson: '',
    email: '',
    contactNo: '',
    registrationDate: '',
    licenceNo: '',
    fromDate: '',
    toDate: '',
    apheresisFacility: '',
    helplineNo: '',
    address1: '',
    address2: '',
    pincode: '',
    latitude: '',
    longitude: '',
    website: '',
    numberOfBeds: '',
    donorType: '',
    donationType: '',
    componentType: '',
    bagType: '',
    ttiType: '',
    remarks: '',
  });

  const [step, setStep] = useState(1); // Step state for navigation
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep1 = () => {
    const newErrors = {};
    const requiredFields = [
      'bloodBankName',
      'category',
      'contactPerson',
      'contactNo',
      'registrationDate',
      'address1',
      'pincode',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const validateStep2 = () => {
    const newErrors = {};
    const requiredFields = [
      'donorType',
      'donationType',
      'componentType',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
    if (step === 2 && validateStep2()) {
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use axios to make the POST request
      const response = await axios.post('/Banks/add', formData);

      if (response.status === 201) {
        alert('Blood Bank added successfully!');
        setFormData({
          bloodBankName: '',
          parentHospitalName: '',
          shortName: '',
          category: '',
          contactPerson: '',
          email: '',
          contactNo: '',
          registrationDate: '',
          licenceNo: '',
          fromDate: '',
          toDate: '',
          apheresisFacility: '',
          helplineNo: '',
          address1: '',
          address2: '',
          pincode: '',
          latitude: '',
          longitude: '',
          website: '',
          numberOfBeds: '',
          donorType: '',
          donationType: '',
          componentType: '',
          bagType: '',
          ttiType: '',
          remarks: '',
        });
        setStep(1); // Reset to step 1 if you want
      } else {
        alert(`Error: ${response.data.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="Bloodform-container">
      <h2>Add Blood Bank Information</h2>

      {step === 1 && (
        <>
          <h3>Blood Bank Details</h3>

          {Object.keys(errors).map((key) => (
            <div key={key} className="error-message">
              {errors[key]}
            </div>
          ))}

          <div className="form-grid">
            <div className="form-group">
              <label>Blood Bank Name*</label>
              <input type="text" name="bloodBankName" value={formData.bloodBankName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Parent Hospital Name</label>
              <input type="text" name="parentHospitalName" value={formData.parentHospitalName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Short Name</label>
              <input type="text" name="shortName" value={formData.shortName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Category*</label>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select type</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
              </select>
            </div>

            <div className="form-group">
              <label>Contact Person*</label>
              <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Contact No.*</label>
              <input type="tel" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>First Registration Date*</label>
              <input type="date" name="registrationDate" value={formData.registrationDate} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Licence No.</label>
              <input type="text" name="licenceNo" value={formData.licenceNo} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>From Date</label>
              <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>To Date</label>
              <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Apheresis Facility</label>
              <select name="apheresisFacility" value={formData.apheresisFacility} onChange={handleChange}>
                <option value="">Select Value</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            <div className="form-group">
              <label>Helpline No.</label>
              <input type="tel" name="helplineNo" value={formData.helplineNo} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Address1*</label>
              <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Address2</label>
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Pincode*</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Latitude</label>
              <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Longitude</label>
              <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>No of Bed Hospital</label>
              <input type="number" name="numberOfBeds" value={formData.numberOfBeds} onChange={handleChange} />
            </div>
          </div>

          <button type="button" onClick={handleNext}>Next: Donation Information</button>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Donation Information</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Donor Type*</label>
              <select name="donorType" value={formData.donorType} onChange={handleChange} required>
                <option value="">Select Donor Type</option>
                <option value="Voluntary">Voluntary</option>
                <option value="Replacement">Replacement</option>
                <option value="Directed">Directed</option>
                <option value="Autologous">Autologous</option>
                <option value="Family Replacement">Family Replacement</option>
                <option value="External">External</option>
              </select>
            </div>

            <div className="form-group">
              <label>Donation Type*</label>
              <select name="donationType" value={formData.donationType} onChange={handleChange} required>
                <option value="">Select Donation Type</option>
                <option value="Leucapheresis">Leucapheresis</option>
                <option value="Plasmapheresis">Plasmapheresis</option>
                <option value="Plateletpheresis">Plateletpheresis</option>
                <option value="Whole Blood">Whole Blood</option>
              </select>
            </div>

            <div className="form-group">
              <label>Component Type*</label>
              <select name="componentType" value={formData.componentType} onChange={handleChange} required>
                <option value="">Select Component Type</option>
                <option value="Cryo">Cryo</option>
                <option value="FFP">FFP</option>
                <option value="PRBC">PRBC</option>
              </select>
            </div>

            <div className="form-group">
              <label>Bag Type</label>
              <select name="bagType" value={formData.bagType} onChange={handleChange}>
                <option value="">Select Bag Type</option>
                <option value="Blood Bag">Blood Bag</option>
                <option value="Component Bag">Component Bag</option>
              </select>
            </div>

            <div className="form-group">
              <label>TTI Type</label>
              <select name="ttiType" value={formData.ttiType} onChange={handleChange}>
                <option value="">Select TTI Type</option>
                <option value="HIV">HIV</option>
                <option value="HCV">HCV</option>
                <option value="HBV">HBV</option>
                <option value="Syphilis">Syphilis</option>
                <option value="Malaria">Malaria</option>
                <option value="COVID-19">COVID-19</option>
              </select>
            </div>

            <div className="form-group">
              <label>Remarks</label>
              <textarea name="remarks" value={formData.remarks} onChange={handleChange} />
            </div>
          </div>

          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default AddBloodBank;
