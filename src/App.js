import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect } from 'react'; // Import useEffect
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all components
import Footer from './components/Footer.jsx';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutRaktaSetu from './components/Pages_website/About-RaktSetu.jsx';
import ADD from './components/Pages_website/AddYourBloodbank';
import BloodAva from './components/Pages_website/BloodAva';
import BloodCamp from './components/Pages_website/BloodCamp';
import BloodDirect from './components/Pages_website/BloodDirectory';
import DonorSignup from './components/Pages_website/BloodDonorSignup';
import Contactus from './components/Pages_website/Contactus.jsx';
import DonorLogin from './components/Pages_website/DonorLogin';
import Gallery from './components/Pages_website/Gallery/Gallery.jsx';
import Login from './components/Pages_website/Login';
import Signup from './components/Pages_website/SignupPage';
import VBDCamp from './components/Pages_website/VBDCamp.jsx';
import Video from './components/Pages_website/Gallery/VideoGallery.jsx';
import FAQS from './components/Pages_website/RaktaSetu-Faqs.jsx';
import AboutBlood from './components/Pages_website/About-BloodDonation.jsx';
function App() {
  useEffect(() => {
    // Message listener for popup communication
    const handleMessage = (event) => {
      if (event.origin !== "http://localhost:5000") return; // Replace with your popup origin
      if (event.data === "close") {
        console.log("Popup requested to close");
        // Logic to handle popup closure can be placed here
        // For example, you might want to navigate or show a message
      }
    };

    // Adding event listener
    window.addEventListener("message", handleMessage);

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <Router>
      <div>
        <Navbar className="navbar" />

        <main className="main-content"> {/* Wrap main content */}
          <Routes>
            <Route exact path="/" element={<Home />} /> {/* Render Home at root */}
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Add" element={<ADD/>}/>
            <Route exact path="/donor-login" element={<DonorLogin/>}/>
            <Route exact path="/Donor-Signup" element={<DonorSignup/>}/>
            <Route exact path= "/Donation-Camps" element={<BloodCamp/>}/>
            <Route exact path= "/vbd-Camps" element={<VBDCamp/>}/>
            <Route exact path="/bloodAva" element={<BloodAva/>}/>
            <Route exact path="/BloodDirect" element={<BloodDirect/>}/>
            <Route exact path='/About-RaktSetu' element={<AboutRaktaSetu/>}/>
            <Route exact path='/Contact' element={<Contactus/>}/>
            <Route exact path='/Gallery' element={<Gallery/>}/>
            <Route exact path='/video-gallery' element={<Video/>}/>
            <Route exact path='/FAQS' element={<FAQS/>}/>
            <Route exact path='/AboutBlood' element={<AboutBlood/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
     
    </Router>
  );
}

export default App;
