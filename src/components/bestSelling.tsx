"use client"
import Image from "next/image";
import React from "react";
import Card_1 from "../../public/1/g-4.jpg";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const BestSelling = () => {
  const product = useAppSelector((state)=> state.products)
  const bestSell = product.slice(0,3)
  // const bestSell = [
    // {
      // src:"/1/g-2.jpg",
      // alt:"White T-Shirt",
      // title:"White Printed Tee",
      // description:"Best Quality T-Shirt for man",
      // price: 150,
      // category:"tops",
      // slug: "white-tops"
    // },
    // {
      // src:'/1/g-4.jpg',
      // alt:"White T-Shirt",
      // title:"White Printed Tee",
      // description:"Best Quality T-Shirt for man",
      // price: 150,
      // category:"tops",
      // slug: "black-tops"
    // },
    // {
      // src:'/1/g-5.jpg',
      // alt:"White T-Shirt",
      // title:"White Printed Tee",
      // description:"Best Quality T-Shirt for man",
      // price: 150,
      // category:"shoes",
      // slug: "black shoes"
    // },
  // ]
  return (
    <div className="my-[100px]">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#BCB813] inline-flex" />
        </div>
      </div>

      {/* Best Selling Products here */}
        <div className="flex flex-wrap justify-center gap-5">
          {
            bestSell.map((items: any,i)=>(
              <BestSellingCard 
              key={i} 
              src={items.image[0]} 
              alt={items.title} 
              title={items.title} 
              description={items.description} 
              price={items.price}
              category={items.category}
              slug={items.slug}
              discount={items.discount}
              />
            ))
          }
        </div>
      
       {/* Best Selling Products end */}
    </div>
  );
};

export default BestSelling;
