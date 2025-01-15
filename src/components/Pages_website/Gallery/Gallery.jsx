import React, { useState } from 'react';
import './Gallery.css';
import image1 from '../../../assets/Gallery/1.jpg';
import image2 from '../../../assets/Gallery/2.jpg';
import image3 from '../../../assets/Gallery/3.jpg';
import image4 from '../../../assets/Gallery/4.jpg';
import image5 from '../../../assets/Gallery/5.jpg';

import image7 from '../../../assets/Gallery/7.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image7,
  image4,
  image5,
  image7,
  image1,
  image2,
  image3,
  image4,
  image5,
  image7,
  image4,
  image5,
  image7,
  image7,
  image4,
  image5,
  image7,
  image1,
  image2,
  image3,
  image4,
  image5,
  image7,
  image4,
  image5,
  image7,
];

// Helper function to split images into chunks
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const imagesPerPage = 16; // Number of images per page
  const imageChunks = chunkArray(images, imagesPerPage);

  const openImage = (index) => {
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextPage = () => {
    if (currentPage < imageChunks.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="gallery-body">
      <div className="header">
        <h2>RaktSetu Gallery</h2>
      </div>
      <div className="gallery-container">
        <div className="gallery-row">
          {imageChunks[currentPage].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => openImage(index)}
              className="gallery-image"
            />
          ))}
        </div>

        <div className="pagination-controls">
          {currentPage > 0 && (
            <button className="pagination-button" onClick={goToPreviousPage}>
              Previous
            </button>
          )}
          {currentPage < imageChunks.length - 1 && (
            <button className="pagination-button" onClick={goToNextPage}>
              Next
            </button>
          )}
        </div>

        {currentImageIndex !== null && (
          <div className="lightbox">
            <span className="close" onClick={closeImage}>
              &times;
            </span>
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="lightbox-image"
            />
            <span className="prev" onClick={goToPreviousImage}>
              &#10094;
            </span>
            <span className="next" onClick={goToNextImage}>
              &#10095;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
