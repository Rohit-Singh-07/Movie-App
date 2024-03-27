import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import asyncLoadTv, { removeTv } from "../store/actions/TvAction";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { IoLanguage } from "react-icons/io5";
import { PiClockBold } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import DetailsLoadAni from "./DetailsLoadAni";

const TvDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(asyncLoadTv(id));

    return () => {
      dispatch(removeTv());
    };
  }, [dispatch, id]);

  return (
    <div>
     { info? <div>
      <img
        className="h-[92vh] w-screen object-cover mt-1 opacity-20 relative shadow-[12px_12px_60px_-15px_rgb(107, 105, 105)]"
        src={
          info
            ? `https://image.tmdb.org/t/p/original/${
                info && info.details.backdrop_path
              }`
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        }
        alt=""
      />
              <Outlet/>
      <div className="h-[58vh] absolute text-white top-16 px-[2vw] overflow-auto w-full">
      <div >
        <h1 className="flex items-baseline gap-4">
          <span className="flex items-center font-semibold text-[5.5vw] pb-2">
            <BiCameraMovie className="text-orange-200 font-medium" />
            {info?.details.name}
          </span>
          <h3 className="text-[1.5vw] text-zinc-400">{info?.details.tagline}</h3>
        </h1>
        <div className="pl-[1vw] flex gap-[5vw] relative">
          <img
            className="md:h-[40vh] h-[29vh] rounded-md relative"
            src={
              info
                ? `https://image.tmdb.org/t/p/original/${
                    info && info.details.poster_path
                  }`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            }
            alt=""
          />

          <div className="bottom-0 absolute">
            <h2 className="text-white md:text-lg flex justify-center items-center gap-2 bg-orange-400 w-32 rounded-full p-2">
              Rating:{" "}
              <span>{Math.floor(info?.details.vote_average * 10)}%</span>{" "}
            </h2>
          </div>

          <div className="md:w-[50vw] w-[60vw] flex flex-col gap-2">
            <h2 className="font-semibold md:text-[1.5vw] text-[3.7vw]">Overview:</h2>
            <h2 className="md:text-[1.2vw] text-[3vw]">{info?.details.overview}</h2>
            <div className="flex md:gap-2 gap-1 ">
              <h2 className="flex gap-[0.5vw] items-center md:text-[1.2vw] text-[3.7vw]">
                <IoLanguage className="text-orange-200" />
                {info?.details.spoken_languages.map((elem, idx) => {
                  return <span key={idx}>{elem.english_name}</span>;
                })}
              </h2>
              <h2 className="flex gap-[0.5vw] items-center md:text-[1.2vw] text-[3.7vw]">
                <PiClockBold className="text-orange-200" />{" "}
                {info?.details.runtime} min
              </h2>
              {info?.details.status === "Released" ? (
                <h3 className="flex gap-[0.5vw] items-center md:text-[1.2vw] text-[3.7vw]">
                  <GrAnnounce className="text-orange-200" />{" "}
                  {info.details.release_date}
                </h3>
              ) : (
                ""
              )}
            </div>

            <span className="flex gap-2">
              <h2 className="md:text-[1.2vw] text-[3.7vw]">
                <span className="text-orange-200">genre:</span>{" "}
                {info?.details.genres.map((e, i) => {
                  return <span key={i}>{e.name}, </span>;
                })}
              </h2>
            </span>
            <h2 className="flex flex-col gap-2 py-2 flex-wrap md:text-[1.2vw] text-[3.7vw]">
              Production Companies:{" "}
              <span className="flex items-center justify-between w-[30vw] md:text-[1.2vw] text-[3.7vw]">
                {info?.details.production_companies.map((elem, i) => {
                  return (
                    <div>
                      <img
                        className="h-[4vw] w-[4vw] object-contain md:text-[1.2vw] text-[3.7vw]"
                        src={
                          info
                            ? `https://image.tmdb.org/t/p/original/${
                                elem && elem.logo_path
                              }`
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                        }
                        alt=""
                      />
                      <span className="text-orange-200 md:text-[1.2vw] text-[3.7vw] " key={i}>
                        {elem.name}
                      </span>
                    </div>
                  );
                })}
              </span>
            </h2>
            <div className="flex md:justify-between items-center md:flex-row flex-col md:gap-0 gap-3">
            <h2 className="flex gap-2 items-center md:text-[1.2vw] text-[3.7vw]">
              Available on:{" "}
              {info?.watchProviders?.flatrate.map((e, i) => {
                return (
                  <span key={i}>
                    <img
                      className="h-[4vh]"
                      src={
                        e
                          ? `https://image.tmdb.org/t/p/original/${
                              e && e.logo_path
                            }`
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                      }
                      alt=""
                    />
                  </span>
                );
              })}
            </h2>
            <Link to={`/tv/details/${info?.details.id}/trailer`} className="bg-blue-500 z-10 h-10 w-32 flex justify-center items-center rounded-sm"><h1>Watch Trailer</h1></Link>
            </div>
            
          </div>

          <div></div>
        </div>
      </div>
      </div>
      <div className="absolute bottom-0 left-[2vw]">
      <div className="w-[95vw] h-[3vw] mx-auto flex justify-end items-center text-[2.5vw] text-zinc-400 px-[5px] pointer-events-none">
        Similar Tv Shows
      </div>
      <div className="flex items-center gap-[2vw] md:gap-[1vw] w-[95vw] overflow-x-auto flex-nowrap mx-auto pb-[10px]">
        
        {info.similar.map((elem, idx) => {
          return (
            <Link key={idx} to={`/movie/details/${elem.id}`}>
            <div
              
              className="h-[20vh] md:h-[30vh] lg:w-[15vw] w-[27vw] bg-slate-500 overflow-hidden rounded-md flex-nowrap shrink-0 relative"
            >
              <img
                className="h-full w-full object-cover"
                src={
                  info.similar
                    ? `https://image.tmdb.org/t/p/original/${
                        elem && elem.poster_path || elem.profile_path
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
            </Link>
          );
        })}
      </div>
      </div>
     </div> : <DetailsLoadAni/>}
    </div>
  );
};

export default TvDetails;

