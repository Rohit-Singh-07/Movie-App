import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import ExampleCarouselImage from "./CarouselImage";
import axios from "../Utils/axios";

function CarouselComponent() {
  const [walpaper, setWalpaper] = useState();

  const getWalapaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setWalpaper(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWalapaper();
  }, []);

  console.log(walpaper && walpaper[0]);

  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage
        className="relative p-0"
          imageUrl={
            walpaper
              ? `https://image.tmdb.org/t/p/original/${
                  walpaper && walpaper[0].poster_path
                }`
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          }
          text="First slide"
        />
        <Carousel.Caption>
          <div className="absolute left-[-15vw] w-[100vw] pb-[10vh] pt-4 bottom-[-7vh] shadow-md px-[15vw]" style={
            {
              background: "linear-gradient(rgba(0, 0, 0, 0.025), rgba(0, 0, 0, 1.941))"
            }
          }>
          <h3 className="font-bold text-xl pb-1px">{walpaper ? walpaper[0].name || walpaper[0].title || walpaper[0].original_title: "Title"}</h3>
          <p>{walpaper ? walpaper[0].overview: "Overview"}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage
          imageUrl={
            walpaper
              ? `https://image.tmdb.org/t/p/original/${
                  walpaper && walpaper[1].poster_path
                }`
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          }
          text="Second slide"
        />
        <Carousel.Caption>
          <div className="absolute left-[-15vw] w-[100vw] pb-[10vh] pt-4 bottom-[-7vh] shadow-md px-[15vw]" style={
            {
              background: "linear-gradient(rgba(0, 0, 0, 0.025), rgba(0, 0, 0, 1.941))"
            }
          }>
          <h3 className="font-bold text-xl pb-1px" >{walpaper ? walpaper[1].name || walpaper[1].title || walpaper[1].original_title: "Title"}</h3>
          <p>{walpaper ? walpaper[1].overview: "Overview"}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage
          imageUrl={
            walpaper
              ? `https://image.tmdb.org/t/p/original/${
                  walpaper && walpaper[2].poster_path
                }`
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          }
          text="Third slide"
        />
        <Carousel.Caption>
          <div  className="absolute left-[-15vw] w-[100vw] pb-[10vh] pt-4 bottom-[-7vh] shadow-md px-[15vw]" style={
            {
              background: "linear-gradient(rgba(0, 0, 0, 0.025), rgba(0, 0, 0, 1.941))"
            }
          }>
          <h3 className="font-bold text-xl pb-1px">{walpaper ? walpaper[2].name || walpaper[2].title || walpaper[2].original_title: "Title"}</h3>
          <p>
          {walpaper ? walpaper[2].overview: "Overview"}
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
