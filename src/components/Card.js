import React from 'react';
import './Card.css';

const CardComponent=({icon, title,description})=>{
    return(
        <div className="service-card">
            <div className="icon"> {icon && <img src={icon} alt={title} style={{ width: '80px', height: '80px' }} />}
          <h3 className="Card-title">{title}
            <p className="Card-description">{description}</p>
          </h3>
            </div>
        </div>
    );
};
export default CardComponent;