import React, { useState } from 'react';
import CarouselComponent from './Carousel';
import Cards from './Cards';


const Home = () => {
  const [data, setData] = useState(false); // Initialize to a loading state

  const setLoad = (x) => {
    setData(x);
  };



  return (
    <>
      (
        <div className="overflow-hidden">
          <CarouselComponent loadData={setData} />
          <br />
          <Cards />
        </div>
      )
    </>
  );
};

export default Home;
