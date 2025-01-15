import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../firebase'; // Ensure Firebase is initialized
import './Login.css';

import eyeSlashIcon from '../../assets/eye-closed.png'; // Import eye slash icon PNG
import eyeIcon from '../../assets/eye-open.png'; // Import eye icon PNG

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                email,
                password,
            });
            setSuccessMessage('Login successful!');
            alert('Login Sucessfull');
            setError('');
            localStorage.setItem('token', response.data.jwtToken);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Login failed: ' + (err.response?.data.message || 'Unknown error'));
            setSuccessMessage('');
        }
    };

    const handleForgotPassword = () => {
        console.log('Navigate to forgot password page');
        navigate('/forgot-password'); // Adjust as necessary
    };

    return (
        <div className="login-page-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <div className="password-input-container">
                    <label>Password:</label>
                    <div className="password-input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle password visibility
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)} // Toggle state
                        >
                            <img 
                                src={showPassword ? eyeSlashIcon : eyeIcon} 
                                alt={showPassword ? "Hide Password" : "Show Password"} 
                            />
                        </span>
                    </div>
                </div>
                <button type="submit" className="login-btn">Login</button>
            </form>
            <div className="button-container">
                <p className="forgot-password" onClick={handleForgotPassword}>
                    Forgot Password?
                </p>
            </div>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Login;
