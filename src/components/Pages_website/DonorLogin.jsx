import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import CSS for styling
import { Link } from 'react-router-dom';
import './DonorLogin.css';

const DonorLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);

    const submitDonorDetails = () => {
        // Here you can add logic to generate OTP
        setShowOtpInput(true);
        console.log("OTP sent to:", phoneNumber);
    };

    const validateOtp = () => {
        // Logic to validate the OTP
        console.log("Validating OTP:", otp);
    };

    return (
        <div className="Donor-container">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title text-danger" id="myModalLabel">Donor Login</h4>
                </div>
                <div className="modal-body">
                    <form className="form-signin" autoComplete="off">
                        <div className="well">
                            <div className="row">
                                <div className="col-sm-12">
                                    <label htmlFor="phoneNumber" className="control-label">Enter Mobile No.:</label>
                                    <PhoneInput
                                        international
                                        defaultCountry="US" // default country
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                        placeholder="Enter Mobile No"
                                        required
                                        className='phninput'
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: '10px' }}>
                                <div className="col-sm-12">
                                    <button type="button" className="generate-otp" onClick={submitDonorDetails}>
                                        Generate OTP
                                    </button>
                                </div>
                            </div>
                            {showOtpInput && (
                                <>
                                    <div className="row" style={{ marginTop: '10px' }}>
                                        <div className="col-sm-12">
                                            <label htmlFor="otp" className="control-label">Enter OTP:</label>
                                            <input
                                                type="text"
                                                name="otp"
                                                className="form-control"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                placeholder="OTP"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: '10px' }}>
                                        <div className="col-sm-12">
                                            <button type="button" className="btn btn-primary btn-block btn-danger btn-Validate" onClick={validateOtp}>
                                                Validate OTP
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </form>
                    <div className="register-section">
                        <p className="lead text-success"><b>Register Now</b></p>
                        <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                            <li><span className="fa fa-check text-success"></span> View/Add your Donations</li>
                            <li><span className="fa fa-check text-success"></span> Update your Profile</li>
                            <li><span className="fa fa-check text-success"></span> Manage your Account</li>
                        </ul>
                        <p>
                        <Link to="/Donor-Signup">
                         <button type="button" className="btn btn-primary btn-block btn-danger btn-register">Register Now</button>
                         </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorLogin;
