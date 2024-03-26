import React from 'react'
import Lottie from 'lottie-react'
import DetailsLoading from "../assets/DetailsLoading.json"

function DetailsLoadAni() {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
        <Lottie className='h-80' animationData={DetailsLoading}/>
        <h1 className='font-bold font-serif italic'>Loadind...</h1>
    </div>
  )
}

export default DetailsLoadAni