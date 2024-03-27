import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import asyncLoadPerson, { removePerson } from "../store/actions/PersonAction";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { IoLanguage } from "react-icons/io5";
import { PiClockBold } from "react-icons/pi";
import Similar from "./Similar";
import DetailsLoadAni from "./DetailsLoadAni";

const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(asyncLoadPerson(id));

    return () => {
      dispatch(removePerson());
    };
  }, [dispatch, id]);

  return (
    <div>
     { info? <div className="text-white px-[5vw] py-4 h-screen bg-gradient-to-r from-black to-purple-900 overflow-auto">
      <div className="flex justify-between">
        <div>
        <img 
        className="md:h-[50vh] h-[25vh] rounded-sm"
        src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`} alt="" />

        <h1 className="font-bold text-[3vw]">{info.details.name}</h1>
        <h3 className="font-semibold text-[2vw]">{info.details.gender === 1 ? <span>Female</span> : info.details.gender === 2 ? <span>Male</span> : <span>Not Specified</span>}</h3>
        
        </div>
        <div className="w-[50vw] text-[2vw]">
          <h1 className="font-semibold">Biography:</h1>
          <h2>{info.details.biography}</h2>
          <br />
          <h3><span className="font-semibold">Place of Birth: </span> {info.details.place_of_birth}</h3>
          <br />
          <h3 ><span className="font-semibold">Department: </span>{info.details.known_for_department}</h3>
        </div>
      </div>
     </div> : <DetailsLoadAni/>}
    </div>
  );
};

export default PersonDetails;

