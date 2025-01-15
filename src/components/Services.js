import React from 'react';
import icon1 from '../assets/SearchBlood.png';
import icon3 from '../assets/blood-donation.png';
import icon4 from '../assets/blood-donor-card.png';
import icon5 from '../assets/blood-donor.png';
import icon2 from '../assets/bloodBank.png';
import CardComponent from './Card';
import './Services.css';

const Services=()=>{
    const ServicesData=[
        {
            icon:icon1,
            title:'',
            description:'Blood Availability Search',
        },
        {
            icon:icon2,
            title:'',
            description:'Blood Bank Directory ',
        },
        {
            icon:icon3,
            title:'',
            description:'Blood Donation Camps',
        },
        {
            icon:icon4,
            title:'',
            description:'Donor Login',
        },
        {
            icon:icon5,
            title:'',
            description:'Register Voluntary Blood Camp',
        },
    ];

    return(
        <div className="services-container">
            <h2 class="textS">Our Services</h2>
            <div className="services-grid">
                {ServicesData.map((service, index)=>(
                    <CardComponent
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    />
                )
                )}
            </div>
        </div>
    );
};

export default Services;





