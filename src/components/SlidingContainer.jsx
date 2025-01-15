import React, { useEffect, useState } from 'react';
import Icon1 from '../assets/clock.png';
import Icon4 from '../assets/medical-sign.png';
import Icon2 from '../assets/orange-juice.png';
import Icon3 from '../assets/rupee.png';
import './SlidingContainer.css'; // Import CSS for styling

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselItems = [
        {
            img: Icon1,
            title: 'It takes only an hour',
            description: 'Donate blood save lives!',
        },
        {
            img: Icon2,
            title: 'You will get free refreshments after donation',
            description: 'Donation of blood is safe and healthy',
        },
        {
            img: Icon3,
            title: 'It costs nothing',
            description: 'Give blood and stay healthy',
        },
        {
            img: Icon4,
            title: 'There is nothing better than saving a life',
            description: 'Every blood donor is a hero',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, [carouselItems.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    return (
        <div className="carouselwrapper">
            <div className="carousel">
                {carouselItems.map((item, index) => (
                    <div
                        className={`card  cardgg ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                        
                    >
                        <img src={item.img} width="62px" height="62px" alt="" className="imggg"/>
                        <p className="card-txt mb-0 font-bold  title">{item.title}</p>
                        <p className="card-txt-light mb-1 desc">{item.description}</p>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;
