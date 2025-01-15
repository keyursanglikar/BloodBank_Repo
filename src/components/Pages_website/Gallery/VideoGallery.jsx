import React, { useState } from 'react';
import './VideoGallery.css';

const videos = [
  { id: 1, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 1' },
  { id: 2, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 2' },
  { id: 3, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 3' },
  { id: 4, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 4' },
  { id: 5, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 5' },
  { id: 6, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 6' },
  { id: 7, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 7' },
  { id: 8, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 8' },
  { id: 9, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 9' },
  { id: 10, src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Sample video 10' },
];

const VIDEOS_PER_PAGE = 5;

const VideoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  const currentVideos = videos.slice(
    (currentPage - 1) * VIDEOS_PER_PAGE,
    currentPage * VIDEOS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="video-gallery-container">
      <h2 className="video-gallery-header">Videos</h2>
      <div className="video-gallery">
        {currentVideos.map((video) => (
          <div className="video-container" key={video.id}>
            <video className="video" controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-description">
              <h3>Video {video.id}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
