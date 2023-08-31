import React from "react";

const Promotion = () => {
  return (
    <div className="my-[100px]">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Promotion
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#BCB813] inline-flex" />
        </div>
      </div>
      {/* Promotion start here */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 1st child */}
        <div className="hero h-[25rem] custom_image1 bg-fixed bg-left bg-no-repeat"
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold uppercase flex"> Get upto <span className="text-[#BCB813] pl-2"> 60%</span> off</h1>
              <p className="mb-5">
                Flash Sale, Get upto 60% on the season Variant.
              </p>
               
            </div>
          </div>
        </div>
        {/* 2nd child */}
        <div className="hero h-[25rem] custom_image2 bg-fixed bg-center bg-no-repeat"
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold uppercase flex"> Get upto <span className="text-[#BCB813] pl-2"> 30%</span> off</h1>
              <p className="mb-5">
                Flash Sale, Get upto 30% on the New Stock.
              </p>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
