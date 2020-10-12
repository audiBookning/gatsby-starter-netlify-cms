import React from 'react';
//import "./VideoPlayer.css";
  
const VideoPlayer = ({publicId}) => { 
    const src = `https://player.cloudinary.com/embed/?public_id=${publicId}&cloud_name=patarsofi&player%5Bshow_logo%5D=false&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5Bsource_types%5D%5B0%5D=mp4`

    const title = publicId
  return (
    <>
      {/* Cloudinary Video Player embed code */}
      <iframe
      src={src}
      title={title}
      width="100%"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      ></iframe>
    </>
  )
}

export default VideoPlayer;