import React, { useEffect, useState } from "react";
import axios from "../Utils/axios";
import Dropdown from "./Dropdown";
import { MdLiveTv } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Cards = () => {
  const [Trend, setTrend] = useState([]);
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };

  const getTrend = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrend(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTrend();
  }, [category]);

  return (
    <>
      <div className="w-[95vw] h-[3vw] mx-auto flex justify-between items-center text-[25px] text-zinc-400 px-[5px]">
        <h1 className="font-semibold">Trending</h1>
        <Dropdown
          title="Filter"
          options={["all", "movie", "tv"]}
          category={handleCategoryChange}
        ></Dropdown>
      </div>
      <div className="flex items-center gap-[2vw] md:gap-[1vw] w-[95vw] overflow-x-auto flex-nowrap mx-auto py-[15px]">
        {console.log(Trend)}
        {Trend.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="h-[20vh] md:h-[30vh] lg:w-[15vw] w-[27vw] bg-slate-500 overflow-hidden rounded-md flex-nowrap shrink-0 relative"
            >
              <img
                className="h-full w-full object-cover"
                src={
                  Trend
                    ? `https://image.tmdb.org/t/p/original/${
                        Trend && Trend[idx].poster_path
                      }`
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
                alt=""
              />
              <div className="absolute bottom-0 text-zinc-200 w-full px-2" style={
            {
              background: "linear-gradient(rgba(0, 0, 0, 0.040), rgba(0, 0, 0, 1.941))"
            }
          }>
                <h1 className="font-semibold text-[1.4vw] md:text-[1.1vw]">
                  {elem.name || elem.title || elem.original_title}
                </h1>
                <p className="flex items-center justify-between text-[1vw] md:text-[0.9vw]">
                  <span className="flex items-center gap-2"><MdLiveTv className="text-orange-200" />
                  {elem.media_type}</span>
                  <span className="flex items-center gap-2"><FaStar className="text-orange-200"/>{`${elem.vote_average}/10`}</span>
                </p>
                <p className="flex items-center gap-2 text-[1vw] md:text-[0.9vw]">
                  <IoLanguage className="text-orange-200" />{" "}
                  {elem.original_language}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
