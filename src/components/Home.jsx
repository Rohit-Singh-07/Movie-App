import React from 'react'
import CarouselComponent from './Carousel'
import Cards from './Cards'

const Home = () => {
  return (
    <div className='overflow-auto'>
      <CarouselComponent/>
      <br />
      <Cards/>
      <br />
      <Cards/>
    </div>
  )
}

export default Home
