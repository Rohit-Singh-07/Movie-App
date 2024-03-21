import React from 'react';

function ExampleCarouselImage({ imageUrl, text }) {
  return (
    <img
      className="d-block w-full h-[50vh] object-cover"
      src={imageUrl}
      alt={text}
    />
  );
}

export default ExampleCarouselImage;

