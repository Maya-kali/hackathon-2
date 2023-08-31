"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const FeaturedProducts = () => {
  // my data
  const bestSell = useAppSelector((state)=> state.products.slice(0,4))
  // const bestSell = [
    // {
      // src: "/1/g-2.jpg",
      // alt: "White T-Shirt",
      // title: "White Printed Tee",
      // description: "Best Quality T-Shirt for man",
      // price: 150,
      // category: "tops",
      // slug: "white-tops",
    // },
    // {
      // src: "/1/g-4.jpg",
      // alt: "White T-Shirt",
      // title: "White Printed Tee",
      // description: "Best Quality T-Shirt for man",
      // price: 150,
      // category: "tops",
      // slug: "black-tops",
    // },
    // {
      // src: "/1/g-5.jpg",
      // alt: "White T-Shirt",
      // title: "White Printed Tee",
      // description: "Best Quality T-Shirt for man",
      // price: 150,
      // category: "shoes",
      // slug: "black shoes",
    // },
    // {
      // src: "/1/g-2.jpg",
      // alt: "White T-Shirt",
      // title: "White Printed Tee",
      // description: "Best Quality T-Shirt for man",
      // price: 150,
      // category: "tops",
      // slug: "white-tops",
    // },
    // {
      // src: "/1/g-4.jpg",
      // alt: "White T-Shirt",
      // title: "White Printed Tee",
      // description: "Best Quality T-Shirt for man",
      // price: 150,
      // category: "tops",
      // slug: "black-tops",
    // },
    // {
      // src: "/1/g-5.jpg",
      // alt: "White T-Shirt",
      // title: "White Printed Tee",
      // description: "Best Quality T-Shirt for man",
      // price: 150,
      // category: "shoes",
      // slug: "black shoes",
    // },
  // ];

  // carousel settings
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrow: false,
        },
      },
    ],
  };
  return (
    <div className="my-[100px]">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Featured Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#BCB813] inline-flex" />
        </div>
      </div>

      {/* carousel */}
      <Slider {...settings}>
        {bestSell.map((items:any, i) => (
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
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
