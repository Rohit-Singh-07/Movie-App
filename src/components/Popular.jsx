import React, { useEffect, useState } from "react";
import axios from "../Utils/axios";
import Dropdown from "./Dropdown";
import { MdLiveTv } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import DetailsLoadAni from "./DetailsLoadAni";

const Popular = () => {
    const [popularity, setPopularity] = useState([]);
    const [category, setCategory] = useState("movie");
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        // setPage(1);
    };

    const getCategoryPopularity = async () => {
        try {
          const { data } = await axios.get(`/${category}/popular?page=1`);
          setPopularity(data.results);
          setPage(1);
        } catch (err) {
          setError(err.message);
        }
      };
    
      const getNextPagePopularity = async () => {
        try {
          const { data } = await axios.get(`/${category}/popular?page=${page}`);
          setPopularity((prevPopularity) => [...prevPopularity, ...data.results]);
          setPage((prevPage) => prevPage + 1);
        } catch (err) {
          setError(err.message);
        }
      };
    
      useEffect(() => {
        getCategoryPopularity();
      }, [category]);
    
      useEffect(() => {
        getNextPagePopularity();
      }, [page]);

    return (
        <>
           { popularity.length !== 0 ? <div>
            <div className="w-[95vw] h-[3vw] mx-auto flex justify-between items-center text-[25px] text-zinc-400 px-[5px] mt-4">
                <h1 className="font-semibold">Popular</h1>
                <div className="flex gap-3">
                    <Dropdown
                        title="Category"
                        options={["movie", "tv"]}
                        category={handleCategoryChange}
                    />
                </div>
            </div>
            <div className="flex items-center gap-[3vw] md:gap-[1vw] w-[95vw] overflow-hidden flex-wrap justify-center mx-auto py-[15px]">
                {popularity.map((elem, idx) => (
                    <Link key={idx} to={`/${category}/details/${elem.id}`}>
                        <div className="h-[20vh] md:h-[30vh] lg:w-[15vw] w-[27vw] bg-slate-500 overflow-hidden rounded-md flex-nowrap shrink-0 relative">
                            <img
                                className="h-full w-full object-cover"
                                src={`https://image.tmdb.org/t/p/original/${elem.profile_path || elem.poster_path}`}
                                alt=""
                            />
                            <div className="absolute bottom-0 text-zinc-200 w-full px-2" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.040), rgba(0, 0, 0, 1.941))" }}>
                                <h1 className="font-semibold text-[1.4vw] md:text-[1.1vw]">
                                    {elem.name || elem.title || elem.original_title}
                                </h1>
                                <p className="flex items-center justify-between text-[1vw] md:text-[0.9vw]">
                                    <span className="flex items-center gap-2"><MdLiveTv className="text-orange-200" />{category}</span>
                                    <span className="flex items-center gap-2"><FaStar className="text-orange-200" />{`${elem.vote_average}/10`}</span>
                                </p>
                                <p className="flex items-center gap-2 text-[1vw] md:text-[0.9vw]">
                                    <IoLanguage className="text-orange-200" /> {elem.original_language}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {error && <p>Error: {error}</p>}
            <InfiniteScroll
                dataLength={popularity.length}
                next={getNextPagePopularity}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                scrollThreshold={0.9}
                endMessage={<p>No more items to load</p>}
            />
           </div>: <DetailsLoadAni/>
           }
        </>
    );
}

export default Popular;
