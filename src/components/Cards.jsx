import React from "react";

const Cards = () => {
  return (
    <div className="flex items-center gap-[1vw]">
      <div className="h-[40vh] w-[15vw] bg-slate-500 overflow-hidden rounded-md">
        <img
          className="h-[65%] w-full object-cover"
          src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
          alt=""
        />
        <h1 className="font-semibold text-[1.5vw]">Cards</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          harum, veritatis nihil, quas eaque aspernatur esse consequuntur
          tempore
        </p>
      </div>

      <div className="h-[40vh] w-[15vw] bg-slate-500 overflow-hidden rounded-md">
        <img
          className="h-[65%] w-full object-cover"
          src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
          alt=""
        />
        <h1 className="font-semibold text-[1.5vw]">Cards</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          harum, veritatis nihil, quas eaque aspernatur esse consequuntur
          tempore
        </p>
      </div>
    </div>
  );
};

export default Cards;
