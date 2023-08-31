"use client";
import SlugComponent from "@/components/slugComponents";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Item } from "@radix-ui/react-navigation-menu";
import { addToCart } from "@/app/store/features/cart";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);
  // console.log("abc",params.category)

  const slug = product.filter((val) => val.slug == params.slug);
  // console.log("slug", params.slug)
  // console.log("abc", slug);
  const dispatch = useAppDispatch()
  const [cartItem, setCartItem] = useState({
id: slug[0].id,
title: slug[0].title,
image: slug[0].image[0],
slug: slug[0].slug,
price: slug[0].price,
discount: slug[0].discount,
category: slug[0].category,
size: slug[0].size[0],
qty: slug[0].qty,
color: slug[0].color[0]

  })
  // opject
  // console.log("uuid",Math.floor(1000+Math.random()*9000))
  return (
    <div>
      {" "}
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* image */}
          <SlugComponent image={slug[0].image} />
          {/* <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      /> */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* category */}
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {slug[0].category}
            </h2>
            {/* title heading */}
            <h1 className="text-gray-900 mt-2 text-3xl title-font font-medium mb-1">
              {slug[0].title}
            </h1>
            {/* rating */}
            {/* sm */}
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {/* description */}
            <p className="leading-relaxed mt-2">{slug[0].description}</p>
            {/* colors */}
            <div className="flex mt-6 items-center mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {slug[0].color.map((item, i) => (
                  <button
                    key={i} onClick={()=>(setCartItem({...cartItem, color:item}))}
                    className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                ))}
                {/* <button className="border-2 border-gray-300 mr-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" /> */}
                {/* <button className="border-2 border-gray-300 mr-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" /> */}
                {/* <button className="border-2 border-gray-300 mr-1 bg-black rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" /> */}
              </div>
              {/* size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <select onChange={(e)=>(setCartItem({...cartItem, size:e.target.value}))} className="select select-bordered">
                  <option disabled selected>
                    Select Size
                  </option>
                  {slug[0].size.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                  {/* <option>M</option> */}
                  {/* <option>L</option> */}
                  {/* <option>XL</option> */}
                  {/* <option>XXL</option> */}
                </select>
              </div>
            </div>
            {/* quantity */}
            <div className="flex items-center ">
              <h2 className="mr-3">Quantity</h2>
              <Button onClick={()=>(setCartItem({...cartItem, qty:cartItem.qty<=1?1: --cartItem.qty}))} className="bg-gray-700 rounded-xl w-fit h-fit right-2 bottom-2 hover:text-gray-800 text-white">
                <FaMinus className=" h-4 w-4" />
              </Button>
              <div className="mx-2">{cartItem.qty}</div>
              <Button onClick={()=>(setCartItem({...cartItem, qty:++cartItem.qty}))} className="bg-gray-700 rounded-xl w-fit h-fit right-2 bottom-2 hover:text-gray-800 text-white">
                <FaPlus className=" h-4 w-4 " />
              </Button>
            </div>
            <div className="divider"></div>

            <div className="flex items-center justify-between">
              {/* price */}
              
              <div>
                <span className= {`font-medium text-xl text-gray-900 
                ${cartItem.discount > 0 &&
                   "line-through decoration-2 decoration-orange-500/70"}`}>
                  ${cartItem.price * cartItem.qty}
                </span>
                
                {/* discounted value */}

                {cartItem.discount > 0 && (
                  <span className=" ml-5 font-medium text-xl text-gray-900">
                    ${(cartItem.price - (cartItem.discount * cartItem.price)/100)  * cartItem.qty}
                  </span>
                )}
              </div>
              {/* add to cart */}
              <Button onClick={()=>dispatch(addToCart(cartItem))} className="bg-gray-700 rounded-xl right-2 bottom-2 hover:text-gray-800 text-white">
                <FaShoppingCart className="mr-2 h-4 w-4 " /> Add to Cart
              </Button>
            </div>
            {/* buy now */}
            <Button className=" mt-4 w-full bg-gray-700 rounded-xl right-2 bottom-2 hover:text-gray-800 text-white">
              <FaHeart className="mr-2 h-4 w-4 " /> Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
