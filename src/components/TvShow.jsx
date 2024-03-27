import React, { useEffect, useState } from "react";
import axios from "../Utils/axios";
import Dropdown from "./Dropdown";
import { GrAnnounce } from "react-icons/gr";
import { IoLanguage } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import DetailsLoadAni from "./DetailsLoadAni";

const TvShow = () => {
    const [Trend, setTrend] = useState([]);
    const [category, setCategory] = useState("airing_today");
    const [page, setPage] = useState(1);

    const handleCategoryChange = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value);
        setPage(1);
    };

    const getCategoryTrend = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=1`);
            setTrend(data.results);
            setPage(2);
        } catch (err) {
            console.log(err);
        }
    };
    
    const getNextPageTrend = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            setTrend(prevTrend => [...prevTrend, ...data.results]);
            setPage(prevPage => prevPage + 1);
        } catch (err) {
            console.log(err);
        }
    };
    
    useEffect(() => {
        getCategoryTrend();
    }, [category]);
    
    useEffect(() => {
        getNextPageTrend();
    }, [page]);
    

    return (
        <>
           { Trend.length !== 0 ? <div>
            <div className="w-[95vw] h-[3vw] mx-auto flex justify-between items-center text-[25px] text-zinc-400 px-[5px] mt-4">
                <h1 className="font-semibold">TvShow <small className="text-sm">{`(${category})`}</small></h1>
                <div className="flex gap-3">
                    <Dropdown
                        title="Category"
                        options={["popular", "top_rated", "on_the_air", "airing_today"]}
                        category={handleCategoryChange}
                    />
                </div>
            </div>
            <div className="flex items-center gap-[3vw] md:gap-[1vw] w-[95vw] overflow-hidden flex-wrap justify-center mx-auto py-[15px]">
                {Trend.map((elem, idx) => (
                    <Link to={`/tv/details/${elem.id}`}>
                    <div
                        key={idx}
                        className="h-[20vh] md:h-[30vh] lg:w-[15vw] w-[27vw] bg-slate-500 overflow-hidden rounded-md flex-nowrap shrink-0 relative"
                    >
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
                                <span className="flex items-center gap-2"><GrAnnounce className="text-orange-200" />{elem.release_date}</span>
                                <span className="flex items-center gap-2"><FaStar className="text-orange-200" />{`${Math.floor(elem.vote_average * 10)}%`}</span>
                            </p>
                            <p className="flex items-center gap-2 text-[1vw] md:text-[0.9vw]">
                                <IoLanguage className="text-orange-200" /> {elem.original_language}
                            </p>
                        </div>
                    </div></Link>
                ))}
            </div>
            <InfiniteScroll
                dataLength={Trend.length}
                next={getCategoryTrend}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                scrollThreshold={0.9} // Adjust scrollThreshold as needed
                endMessage={<p>No more items to load</p>}
            />
           </div>: <DetailsLoadAni/>
           }
        </>
    );
}

export default TvShow
