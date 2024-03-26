import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

const Trailer = () => {

    const ytVideo = useSelector((state) => state.movie.info.videos)
  return (
    <div className='text-3xl text-white z-40 flex justify-center items-center absolute h-screen w-screen top-0 left-0' style={
        {
          background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.941))"
        }}>
      <div><ReactPlayer url={`https://www.youtube.com/watch?v=${ytVideo.key}`} /></div>
    </div>
  )
}

export default Trailer
