// src/components/About.jsx
import React from 'react';
import './About-RaktSetu.css'; // Import CSS for styling

const About = () => {
    return (
        <div className="about-page"> {/* No need for global classes */}
            <h1>About RaktSetu</h1>
            <p>
                E-RaktSetu enforces the Drug & Cosmetic Act, National Blood Policy standards, and guidelines, ensuring proper collection & donation, effective management, and monitoring of the quality and quantity of the donated blood. Considering the national rollout, E-RaktSetu has been developed with a modular and scalable approach, featuring a configurable rule-based architecture that allows customization to easily incorporate specific requirements from nationwide stakeholders.
            </p>
            <h2>Objectives</h2>
            <ul>
                <li>Safe and Adequate Blood Supplies</li>
                <li>Reduced Turnaround Time</li>
                <li>Preventing Wastage of Blood</li>
                <li>Restrict Professional Donors</li>
                <li>Networking of Blood Banks</li>
                <li>Donor Repository</li>
            </ul>
            <h2>Salient Features</h2>
            <ul>
                <li>Web-Based Application</li>
                <li>Aadhar Linkage</li>
                <li>Decision Support</li>
                <li>Enforces Guidelines</li>
                <li>Dashboard</li>
                <li>Statutory Reports</li>
            </ul>
            <h2>Components of E-RaktSetu</h2>
            <p>
                E-RaktSetu has six major components for managing the blood donation life cycle:
            </p>
            <ol>
                <li>
                    <strong>Biometric Donor Management System:</strong> Identifying, tracking, and blocking donors based on the donor's health, donation history, etc. It provides features such as blood grouping, TTI screening, antibody screening, component preparation, etc., as per the defined processes and rules.
                </li>
                <li>
                    <strong>Centralized Blood Inventory Management System:</strong> Keeping track of blood stock across numerous blood banks.
                </li>
                <li>
                    <strong>Bio-Medical Waste Management System:</strong> Disposal of discarded blood and other waste generated during this process.
                </li>
                <li>
                    <strong>Rare Blood Group Donor Registries:</strong> Generation of registries for rare blood groups and regular repeat donors.
                </li>
                <li>
                    <strong>Alert and Notification System:</strong> Keeping stakeholders informed about important updates.
                </li>
            </ol>
        </div>
    );
};

export default About;
