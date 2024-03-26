import React from 'react'
import Lottie from 'lottie-react'
import newLoad from '../assets/newLoad.json'

function HomeLoadAni() {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
        <Lottie className='h-80' animationData={newLoad}/>
        <h1 className='font-bold font-serif italic'>Loadind...</h1>
    </div>
  )
}

export default HomeLoadAni