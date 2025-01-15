import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/blood.png';
import './Navbar.css';

const Navbar = ({ style }) => {
    const [dropdownOpen, setDropdownOpen] = useState({
        aboutUs: false,
        lookingForBlood: false,
        wantToDonateBlood: false,
        bloodBankLogin: false,
    });
    const [navOpen, setNavOpen] = useState(false);

    const toggleDropdown = (menu) => {
        setDropdownOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header>
            <nav className="navbar" style={style}>
                <div className="logo">
                    <img src={logo} alt="Raktsetu Logo" className="logo-img" />
                </div>

                {/* Hamburger Icon */}
                <div className={`hamburger ${navOpen ? 'open' : ''}`} onClick={toggleNav}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <ul className={`nav-links ${navOpen ? 'active' : ''}`}>
                    {/* About Us Dropdown */}
                    <li
                        className="nav-item"
                        onClick={() => toggleDropdown('aboutUs')}
                        onMouseEnter={() => toggleDropdown('aboutUs')}
                        onMouseLeave={() => toggleDropdown('aboutUs')}
                    >
                        <Link to="#">About Us</Link>
                        {dropdownOpen.aboutUs && (
                            <ul className="dropdown-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about-raktsetu">About RaktSetu</Link></li>
                                <li><Link to="/Faqs">RaktSetu FAQs</Link></li>
                                <li><Link to="/Gallery">Gallery</Link></li>
                                <li><Link to="/video-gallery">Video Gallery</Link></li>
                                <li><Link to="/Contact">Contact Us</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Looking For Blood Dropdown */}
                    <li
                        className="nav-item"
                        onClick={() => toggleDropdown('lookingForBlood')}
                        onMouseEnter={() => toggleDropdown('lookingForBlood')}
                        onMouseLeave={() => toggleDropdown('lookingForBlood')}
                    >
                        <Link to="#">Looking For Blood</Link>
                        {dropdownOpen.lookingForBlood && (
                            <ul className="dropdown-menu">
                                <li><Link to="/bloodAva"> Blood Availability</Link></li>
                                <li><Link to="/BloodDirect">Blood Bank Directory</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Want to Donate Blood Dropdown */}
                    <li
                        className="nav-item"
                        onClick={() => toggleDropdown('wantToDonateBlood')}
                        onMouseEnter={() => toggleDropdown('wantToDonateBlood')}
                        onMouseLeave={() => toggleDropdown('wantToDonateBlood')}
                    >
                        <Link to="#">Want to Donate Blood</Link>
                        {dropdownOpen.wantToDonateBlood && (
                            <ul className="dropdown-menu">
                                <li><Link to="/Donation-Camps">Blood Donation Camps</Link></li>
                                <li><Link to="/donor-login">Donor Login</Link></li>
                                <li><Link to="/AboutBlood">About Blood Donations</Link></li>
                                <li><Link to="/vbd-Camps">Register VBD Camp</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Blood Bank Login Dropdown */}
                    <li
                        className="nav-item"
                        onClick={() => toggleDropdown('bloodBankLogin')}
                        onMouseEnter={() => toggleDropdown('bloodBankLogin')}
                        onMouseLeave={() => toggleDropdown('bloodBankLogin')}
                    >
                        <Link to="#" className="font-bold large-font">Blood Bank Login</Link>
                        {dropdownOpen.bloodBankLogin && (
                            <ul className="dropdown-menu">
                                <li><Link to="/signup">RaktSetu Login</Link></li>
                                <li><Link to="/Add">Add Your Blood Bank</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
