import Image from "next/image";
import Link from "next/link";
import React from "react";
import cat1 from '../../public/1/g-7.jpg'
import cat2 from '../../public/1/g-1.jpg'
import cat3 from '../../public/1/g-6.jpg'
import cat4 from '../../public/1/m-7.jpg'

const Categories = () => {
  return (
    <div className="my-[100px]">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Our Categories
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#BCB813] inline-flex" />
        </div>
      </div>
      {/* Categories start here */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2 rounded-xl">
        {/* category 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/pants"}>
            <Image
              src={cat1}
              alt="Pants"
              height={"350"}
              width={"350"}
              className="rounded-xl duration-300 hover:scale-110"
            />
            {/* h1 */}
            <div className="absolute -bottom-24 group-hover:bottom-0 duration-500 text-center w-full bg-gray-950/70 text-white text-4xl font-extrabold">
              <h1 className="uppercase">Pants</h1>
            </div>
          </Link>
        </div>
        {/* category 2 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/accessories"}>
            <Image
              src={cat2}
              alt="Accessories"
              height={"350"}
              width={"350"}
              className="rounded-xl duration-300 hover:scale-110"
            />
            {/* h1 */}
            <div className="absolute -bottom-24 group-hover:bottom-0 duration-500 text-center w-full bg-gray-950/70 text-white text-4xl font-extrabold">
              <h1 className="uppercase">Accessories</h1>
            </div>
          </Link>
        </div>
         {/* category 3 */}
         <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/tops"}>
            <Image
              src={cat3}
              alt="Tops"
              height={"350"}
              width={"350"}
              className="rounded-xl duration-300 hover:scale-110"
            />
            {/* h1 */}
            <div className="absolute -bottom-24 group-hover:bottom-0 duration-500 text-center w-full bg-gray-950/70 text-white text-4xl font-extrabold">
              <h1 className="uppercase">Top</h1>
            </div>
          </Link>
        </div>
         {/* category 4 */}
         <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes"}>
            <Image
              src={cat4}
              alt="Shoes"
              height={"350"}
              width={"350"}
              className="rounded-xl duration-300 hover:scale-110"
            />
            {/* h1 */}
            <div className="absolute -bottom-24 group-hover:bottom-0 duration-500 text-center w-full bg-gray-950/70 text-white text-4xl font-extrabold">
              <h1 className="uppercase">Shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
