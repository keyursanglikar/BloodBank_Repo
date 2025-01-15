import React, { useState } from 'react';
import BloodRight from '../assets/BloodRightArrow.png'; // Adjust the path as necessary
import redBlood from '../assets/redBlood.jpg'; // Adjust the path as necessary
import './DonationTypes.css'; // Import your CSS file if needed

const donationData = {
    "Packed Red Blood Cells": {
        question: "What is it?",
        answer: "Blood collected straight from the donor into a blood bag and mixed with an anticoagulant is called whole blood. This collected whole blood is then centrifuged, and red cells, platelets, and plasma are separated. The separated red cells are mixed with a preservative to be called packed red blood cells.",
        whoCanDonate: "You need to be 18-65 years old, weigh 45kg or more, and be fit and healthy.",
        usedFor: "Correction of severe anemia in a number of conditions and blood loss in cases of childbirth, surgery, or trauma settings.",
        lastsFor: "Red cells can be stored for 42 days at 2-6 degrees Celsius.",
        howLongToDonate: "15-30 minutes to donate, including the pre-donation check-up.",
        howOftenCanDonate: "Male donors can donate again after 90 days, and female donors can donate again after 120 days.",
    },
    "Plasma": {
        question: "What is it?",
        answer: "Plasma is the liquid portion of blood, making up about 55% of total blood volume. It carries cells, nutrients, hormones, and waste products.",
        whoCanDonate: "Healthy individuals aged 18-65 who weigh at least 50 kg can donate plasma.",
        usedFor: "Plasma is used to treat patients with clotting disorders and during surgeries.",
        lastsFor: "Plasma can be stored for up to 1 year if frozen.",
        howLongToDonate: "Plasma donation takes about 1 hour.",
        howOftenCanDonate: "You can donate plasma every 28 days.",
    },
    "Platelets": {
        question: "What is it?",
        answer: "Platelets are small cell fragments that play a crucial role in blood clotting and wound healing.",
        whoCanDonate: "Individuals aged 18-65 and at least 50 kg can donate platelets.",
        usedFor: "Platelets are often needed for cancer patients and those undergoing major surgeries.",
        lastsFor: "Platelets can be stored for up to 5 days.",
        howLongToDonate: "Platelet donation takes about 2 hours.",
        howOftenCanDonate: "You can donate platelets every 7 days.",
    }
};

const DonationTypes = () => {
    const [selectedDonation, setSelectedDonation] = useState("Packed Red Blood Cells");

    const handleSelection = (type) => {
        setSelectedDonation(type);
    };

    return (
        <div className="DonationTypecontainer cont">
            <div className="text-center pt-5 pb-5">
                <h3 className="section-heading mb-3">Types of Donation</h3>
                <p className="sectionTxt mb-0">
                    The average human body contains about five litres of blood, which is made of several cellular and non-cellular components such as
                    <span> Red blood cell, Platelet, and Plasma.</span>
                </p>
            </div>

            <div className="row">
                <div className="col-xl-3">
                    <div className="tabs">
                        <ul className="nav flex-column">
                            {Object.keys(donationData).map((type) => (
                                <li className="nav-item" key={type}>
                                    <a
                                        className={`nav-link py-3 ${selectedDonation === type ? 'active' : ''}`}
                                        onClick={() => handleSelection(type)}
                                        href="javascript:void(0)"
                                    >
                                        {type}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-xl-9">
                    <div className="tabContent p-3">
                        <div className="row active">
                            <div className="col-xl-8 col-lg-8 col-12">
                                <div className="tabContainer">
                                    <p className="ques mb-2">{donationData[selectedDonation].question}</p>
                                    <p className="ans">{donationData[selectedDonation].answer}</p>
                                    <p className="ques mb-2">Who can donate?</p>
                                    <p className="ans">{donationData[selectedDonation].whoCanDonate}</p>
                                    <p className="ques mb-2">Used for?</p>
                                    <p className="ans">{donationData[selectedDonation].usedFor}</p>
                                    <p className="ques mb-2">Lasts for?</p>
                                    <p className="ans">{donationData[selectedDonation].lastsFor}</p>
                                    <p className="ques mb-2">How long does it take to donate?</p>
                                    <p className="ans">{donationData[selectedDonation].howLongToDonate}</p>
                                    <p className="ques mb-2">How often can I donate?</p>
                                    <p className="ans">{donationData[selectedDonation].howOftenCanDonate}</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-12">
                                <div className="img text-center">
                                    <img className="img-fluid" src={redBlood} width="282px" height="410px" alt="Donation Illustration" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3">
                    <button className="btn searchBtn">
                        Find Nearest Blood Bank To Donate
                        <img className="ms-2" src={BloodRight}  height="20px" alt="Forward Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonationTypes;
