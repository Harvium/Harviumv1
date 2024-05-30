import React from 'react';

const YouTubeVideo = () => (
  <div className='flex overflow-hidden mt-2 justify-center shadow-golden'>
    <iframe 
      src='https://www.youtube.com/embed/Qj9Cv037TB8?si=2Glda2CLn4pHsj4E&mute=1' 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer;; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen 
      className='rounded-lg lg:w-video-lg lg:h-video-lg w-video-sm h-video-sm'
    ></iframe>
  </div>
);

export default YouTubeVideo;
