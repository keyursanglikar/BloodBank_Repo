import React from 'react';
import image1 from '../oneNation.jpg';
import image2 from '../saveLive.jpg';
import About from './About';
import BloodGroup from './BloodGroups';
import BloodBankStats from './BloodStatictics';
import Carousel from './CarousalComponent';
import DonationProcess from './DonationProcess';
import DonationTypes from './DonationTypes';
import Footer from './Footer';
import Services from './Services';
import SlidingContainer from './SlidingContainer';

// Import all components



const Home=()=>{
    
const images = [image1, image2];
    return(
        <div>
            <Carousel images={images}/>
          <BloodBankStats/>
          <Services/>
          <About/>
          <BloodGroup/>
          <DonationProcess/>
          <DonationTypes/>
          <SlidingContainer/>
       

          
      </div>
    )
        
        
    }

    export default Home
