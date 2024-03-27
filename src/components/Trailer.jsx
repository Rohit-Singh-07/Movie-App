import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("tv") ? "tv" : "movie";
  const navigate = useNavigate();
  const ytVideo = useSelector((state) => state[category].info);

  if (!ytVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="text-3xl text-white z-40 flex justify-center items-center absolute h-screen w-screen top-0 left-0"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.941))",
      }}
    >
      <div className="relative">
        <ReactPlayer
          height={720}
          width={1228}
          url={`https://www.youtube.com/watch?v=${ytVideo.videos?.key}`}
          playing
        />
      </div>
      <Link
        className="absolute top-0 right-0 mr-[8vw] mt-[5vh] bg-red-300 rounded-full p-2"
        onClick={() => navigate(-1)}
      >
        <RxCross1 />
      </Link>
    </div>
  );
};

export default Trailer;
