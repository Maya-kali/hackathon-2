import React from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}) => {
  return (
    <div>
      {/* Best Selling Products here */}
      <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
        <Link href={`/${category}/${slug}`}>
          {/* image div */}
          <div className="block relative h-[23rem] rounded overflow-hidden">
            <Image src={src} alt="T-Shirt" height={"350"} width={"350"} />
          </div>
          {/* title */}
          <div className="mt-4">
            {title && (
              <h2 className=" text-gray-950 text-xl line-clamp-1">{title}</h2>
            )}
            {description && (
              <p className=" text-gray-950 text-sm line-clamp-1 mt-2">
                {description}
              </p>
            )}
            {price && (
              <div className="flex gap-4">
                <p
                  className={`text-gray-950 text-sm line-clamp-1 font-bold mt-2 ${
                    discount > 0 &&
                    "line-through decoration-2 decoration-orange-500/70"
                  }`}
                >
                  ${price}
                </p>
                {/* discounted value */}
                {discount > 0 && (
                  <p className=" text-gray-950 text-sm line-clamp-1 font-bold mt-2">
                    ${price - (price * discount) / 100}
                  </p>
                )}
              </div>
            )}
          </div>
        </Link>
        {/* Button */}
        <div className="flex mt-4">
          <button className="flex bg-gray-900 hover:bg-transparent text-white hover:text-black duration-300 p-2 rounded-xl absolute bottom-2 right-2">
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-[#BCB813] duration-300" />
            Add to Cart
          </button>
          <button className="flex bg-gray-900 hover:bg-transparent text-white hover:text-black duration-300 p-2 rounded-xl absolute bottom-2 left-2">
            <FaHeart className="mr-2 h-4 w-4 group-hover:text-[#BCB813] duration-300" />
            Buy Now
          </button>
          {discount > 0 && (
            <div className="text-xs text-white bg-orange-500 absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-2xl rounded-bl-2xl myDiscount font-semibold">{`${discount} % off`}</div>
          )}
        </div>
      </div>
      {/* Best Selling Products end */}
    </div>
  );
};

export default BestSellingCard;
