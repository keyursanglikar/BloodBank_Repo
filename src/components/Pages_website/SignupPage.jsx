import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase';
import eyeClosed from '../../assets/eye-closed.png'; // Adjust the path as necessary
import eyeOpen from '../../assets/eye-open.png'; // Adjust the path as necessary
import './SignupPage.css';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        try {
            await axios.post('http://localhost:5000/auth/signup', {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });
            alert('User registered successfully!');
            navigate('/login');
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Signup failed: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            const user = result.user;

            const response = await axios.post('http://localhost:5000/auth/check-user', {
                email: user.email,
            });

            if (response.data.exists) {
                alert('User already exists with this email. Please log in.');
                navigate('/login');
                return;
            }

            const password = prompt("Please set a password for future logins:");

            if (!password) {
                alert("Password is required for account setup.");
                return;
            }

            await axios.post('http://localhost:5000/auth/google-signup', {
                username: user.displayName || user.email.split('@')[0],
                email: user.email,
                uid: user.uid,
                password: password,
            });

            alert('User signed up successfully with Google! You can now log in using your password.');
            navigate('/login');
        } catch (error) {
            console.error('Google signup error:', error);
            alert('Google signup failed: ' + error.message);
        }
    };

    return (
        <div className="signup-page-container">
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <img
                            src={showPassword ? eyeClosed : eyeOpen}
                            alt={showPassword ? 'Hide password' : 'Show password'}
                            className="password-toggle-icon"
                            onClick={toggleShowPassword}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <img
                            src={showPassword ? eyeClosed : eyeOpen}
                            alt={showPassword ? 'Hide password' : 'Show password'}
                            className="password-toggle-icon"
                            onClick={toggleShowPassword}
                        />
                    </div>
                </div>
                <button type="submit">Sign Up</button>
                <button type="button" onClick={handleGoogleSignup} style={{ marginTop: '10px' }}>
                    Sign Up with Google
                </button>
            </form>

            <div className="login-link">
                Already have an account? <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Signup;
