import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./CarouselImage";
import axios from "../Utils/axios";
import HomeLoadAni from "./HomeLoadAni";


function CarouselComponent({ loadData }) {
  const [wallpaper, setWallpaper] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setWallpaper(data.results);
      loadData(data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWallpaper();
  }, []);

  if (loading) {
    return <HomeLoadAni/>
  }

  if (error) {
    return <div>Error: {error}</div>; // Render an error message
  }

  return (
    <Carousel className="p-0" >
      {wallpaper.slice(0, 3).map((item, index) => (
        <Carousel.Item key={index} interval={3000}>
          <ExampleCarouselImage
            className="relative p-0"
            imageUrl={
              item.poster_path
                ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            }
            text={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <div
              className="absolute left-[-15vw] w-[100vw] pb-[10vh] pt-4 bottom-[-7vh] shadow-md px-[15vw]"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.941))",
              }}
            >
              <h3 className="font-bold text-2xl pb-1px">
                {item.name || item.title || item.original_title}
              </h3>
              <p className="md:text-[15px] sm:text-[12px] text-[10px]">
                {item.overview}
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
