import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import ExampleCarouselImage from './CarouselImage';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage imageUrl="https://images.thedirect.com/media/article_full/disney-movies-titles.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage imageUrl="https://images.thedirect.com/media/article_full/disney-movies-titles.jpg" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage imageUrl="https://images.thedirect.com/media/article_full/disney-movies-titles.jpg" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
