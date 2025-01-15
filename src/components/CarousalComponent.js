// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include Bootstrap JS
// import React from 'react';
// import './Carousel.css'; // Import the CSS file at the top of your Carousel.js


// const Carousel = () => {
//   return (
//     <div id="myCarousel" className="carousel slide" data-ride="carousel">
//       <div className="carousel-inner">
//         {/* First Item */}
//         <div className="carousel-item active" data-interval="1000">
//           <img
//             src="/assets/saveLive.jpg"
//             className="carouselImg"
//             alt="saveLive.jpg"
//           />
//           <div className="container">
//             <div className="carousel-caption">
//               <div className="sec-title wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1000ms">
//                 <h1 className="toggle2"></h1>
//               </div>
//               <div className="carDescText"></div>
//             </div>
//           </div>
//         </div>

//         {/* Second Item */}
//         <div className="carousel-item" data-interval="1000">
//           <img
//             src="/assets/oneNation.jpg"
//             className="carouselImg"
//             alt="oneNation.jpg"
//           />
//           <div className="container">
//             <div className="carousel-caption">
//               <div className="sec-title wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1000ms"></div>
//             </div>
//           </div>
//         </div>

//         {/* Third Item */}
//         <div className="carousel-item" data-interval="1000">
//           <img
//             src="assets/O4sep2022NE_NATION_2500_600-Photoroom.png"
//             className="carouselImg"
//             alt="O4sep2022NE_NATION_2500_600-Photoroom.png"
//           />
//           <div className="container">
//             <div className="carousel-caption">
//               <div className="sec-title wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1000ms"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//       </a>
//       <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//   );
// };

// export default Carousel;

import React, { useEffect, useState } from 'react';
import './Carousel.css'; // Import the CSS file for styling

const AutoCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={goToPrevious}>&lt;</button>
      <img src={images[currentIndex]} alt="carousel item" className="carousel-image" />
      <button className="arrow right" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default AutoCarousel;


