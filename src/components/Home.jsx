import React, { useState } from 'react';
import CarouselComponent from './Carousel';
import Cards from './Cards';


const Home = () => {
  const [data, setData] = useState(false); // Initialize to a loading state

  const setLoad = (x) => {
    setData(x);
  };

  console.log(data)

  return (
    <>
      (
        <div className="overflow-auto">
          <CarouselComponent loadData={setData} />
          <br />
          <Cards />
          <br />
          <Cards />
        </div>
      )
    </>
  );
};

export default Home;
