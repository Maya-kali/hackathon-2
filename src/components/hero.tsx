import React from 'react'
import {AiFillShopping} from "react-icons/ai"
const Hero = () => {
  return (
    <div className='mb-[100px]'>
        <div className="hero min-h-[80vh] custom_image bg-fixed bg-center bg-no-repeat">
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Futuristic <span className='text-[#BCB813]'>Clothes</span></h1>
      <p className="mb-5  first-letter:uppercase text-white">Upgrade your wardrobe with sleek and stylish apparels and top-notch shoes</p>
      <button className=" px-4 py-3 flex gap-2 border-2 border-gray-800 m-auto text-gray-900 bg-[#BCB813] group hover:rounded-3xl duration-300 ease-in"> <AiFillShopping className="animate-bounce" /> Shop Now</button>
    
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero