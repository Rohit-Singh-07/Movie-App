import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import asyncLoadMovie, { removeMovie } from "../store/actions/MovieAction";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { IoLanguage } from "react-icons/io5";
import { PiClockBold } from "react-icons/pi";
import Similar from "./Similar";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncLoadMovie(id));

    return () => {
      dispatch(removeMovie());
    };
  }, [dispatch, id]);

  return (
    <div>
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
      <div className="absolute text-white top-16 h-[92vh] px-[2vw]">
        <h1 className="flex items-baseline gap-4">
          <span className="flex items-center font-semibold text-[5.5vw] pb-2">
            <BiCameraMovie className="text-orange-200 font-medium" />
            {info?.details.title}
          </span>
          <h3 className="text-[20px] text-zinc-400">{info?.details.tagline}</h3>
        </h1>
        <div className="pl-[1vw] flex gap-[5vw] relative">
          <img
            className="h-[40vh] "
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
            <h2 className="text-white text-lg flex justify-center items-center gap-2 bg-orange-400 w-32 rounded-full p-2">
              Rating:{" "}
              <span>{Math.floor(info?.details.vote_average * 10)}%</span>{" "}
            </h2>
          </div>

          <div className="w-[35vw] flex flex-col gap-2">
            <h2>Overview:</h2>
            <h2>{info?.details.overview}</h2>
            <div className="flex gap-2">
              <h2 className="flex gap-[0.5vw] items-center">
                <IoLanguage className="text-orange-200" />
                {info?.details.spoken_languages.map((elem, idx) => {
                  return <span key={idx}>{elem.english_name}</span>;
                })}
              </h2>
              <h2 className="flex gap-[0.5vw] items-center">
                <PiClockBold className="text-orange-200" />{" "}
                {info?.details.runtime} min
              </h2>
              {info?.details.status === "Released" ? (
                <h3 className="flex gap-[0.5vw] items-center">
                  <GrAnnounce className="text-orange-200" />{" "}
                  {info.details.release_date}
                </h3>
              ) : (
                ""
              )}
            </div>

            <span className="flex gap-2">
              <h2>
                <span className="text-orange-200">genre:</span>{" "}
                {info?.details.genres.map((e, i) => {
                  return <span key={i}>{e.name}, </span>;
                })}
              </h2>
            </span>
            <h2 className="flex flex-col gap-2 py-2 flex-wrap">
              Production Companies:{" "}
              <span className="flex items-center justify-between w-[30vw]">
                {info?.details.production_companies.map((elem, i) => {
                  return (
                    <div>
                      <img
                        className="h-[4vw] w-[4vw] object-contain"
                        src={
                          info
                            ? `https://image.tmdb.org/t/p/original/${
                                elem && elem.logo_path
                              }`
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                        }
                        alt=""
                      />
                      <span className="text-orange-200" key={i}>
                        {elem.name}
                      </span>
                    </div>
                  );
                })}
              </span>
            </h2>
            <div className="flex justify-between items-center">
            <h2 className="flex gap-2 items-center">
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
            <Link to={`/movie/details/${info?.details.id}/trailer`} className="bg-blue-500 h-10 w-32 flex justify-center items-center"><h1>Watch Trailer</h1></Link>
            </div>
            
          </div>

          <div></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[2vw]">
        <Similar category = "movie"  data= {info?.similar}/>
      </div>
    </div>
  );
};

export default Details;
