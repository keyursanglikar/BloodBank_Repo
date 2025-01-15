import React from "react";

import "./About.css";

import Arrow from "../assets/RightArrow.png";

const about = () => {
  // const containerStyle={
  //     backgroundImage: `url(${backgroundImage})`,
  //     backgroundSize:'cover',
  //     backgroundPosition:'center',
  //     height:'100vh',
  //     width:'100vw',
  //     marginBottom:'20px',

  // };

  const buttonBack = {
    backgroundColor: "#ffeff5",
    border: "2px solid #b40e0e",
    color: "red",
  };

  return (
    //style={containerStyle}
    <div className="Container">
      <div className="about-box w-50 h-100">
        <div className="about-container pb-4">
          <div>
            <p className="heading">About RaktSetu</p>
            <p className="about-text  font-bold ">
              RaktSetu is a comprehensive blood bank management system designed
              to streamline blood donation, management, and distribution
              processes, ensuring a seamless experience for both donors and
              recipients. It allows users to securely register and log in,
              managing their profiles and tracking donation frequency. The
              platform promotes blood donation campaigns, enabling users to
              create and manage events with details like location and date. With
              real-time blood inventory management, RaktSetu alerts
              administrators when stock levels are low, ensuring timely
              replenishment. Recipients can request blood based on their needs,
              while a user-friendly interface and efficient search functionality
              enhance accessibility. An admin panel provides oversight, allowing
              administrators to manage users, generate reports, and track
              engagement. Prioritizing data privacy and security, RaktSetu
              complies with health data regulations, making it a reliable
              resource for connecting donors with those in need. Through
              educational resources and community engagement initiatives,
              RaktSetu fosters awareness about the importance of blood donation,
              ultimately aiming to save lives and enhance community spirit.
            </p>
          </div>
          <button className="btn readBtn" style={buttonBack}>
        <p className="btnn">Read More  <img className="ms-2" src={Arrow} alt="Arrow Right" /> </p> 
        </button>
        </div>
      </div>
    </div>
  );
};

export default about;
