import React from 'react'
import {FaMoneyBillWave,FaServicestack} from 'react-icons/fa'
import {TbTruckDelivery} from 'react-icons/tb'

const Services = () => {
  return (
    <div className='my-[100px]'><section className=" body-font">
    <div className="container px-5 mx-auto">
        {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Our Services
        </h1>
      
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#BCB813] inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 mx-auto flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
           
            <TbTruckDelivery size={"60"} className="text-[#BCB813]"/>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Free Delivery 
            </h2>
            <p className="leading-relaxed text-base">
              Free Delivery on Order Above $1000
            </p>
            
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex mx-auto flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          
            <FaServicestack size={"60"} className="text-[#BCB813]"/>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              24/7 Customer Services
            </h2>
            <p className="leading-relaxed text-base">
              For Queries and Questions Feel Free to Contact Us
            </p>
            
          </div>
        </div>
        <div className="p-4 md:w-1/3 mx-auto flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            
            <FaMoneyBillWave size={"60"} className="text-[#BCB813]" />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Money Back Guarantee
            </h2>
            <p className="leading-relaxed text-base">
            Get Money Back Guarantee on Damage Products
            </p>
           
          </div>
        </div>
      </div>
      
    </div>
  </section>
  </div>
  )
}

export default Services