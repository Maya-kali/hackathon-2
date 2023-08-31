"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, delItem, subtractCart } from "@/app/store/features/cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  

  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => (
          <div key={i} className="flex px-10 py-3">
            {/* image */}
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="w-[100px] h-[100px]"
            />
            {/* some info */}
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                {/* title */}
                <h2 className="text-sm font-semibold leading-none line-clamp-1">
                  {item.title}
                </h2>
                {/* size */}
                <p className="mt-2 text-sm text-gray-700 leading-none line-clamp-1">
                  size: <span>{item.size}</span>
                </p>
                {/* color */}
                <p className="mt-2 text-sm text-gray-700 leading-none line-clamp-1">
                  Color:{" "}
                  <span>
                    <button
                      className="border-2 border-gray-300 mr-1 rounded-full w-3 h-3 focus:outline-none active:border-none focus:border-none "
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </p>
                {/* quantity */}
                <div className="flex mt-2 items-center">
                  <Button
                  onClick={() => dispatch(subtractCart(item))}
                    className="group hover:bg-white bg-gray-900 text-white hover:text-gray-900
                  w-fit h-fit rounded-lg text-sm duration-300"
                  >
                    <FaMinus className="h-2 w-2 group-hover:text-gray-900" />
                  </Button>
                  <div className="mx-2">{item.qty}</div>
                  <Button
                    onClick={() => dispatch(addCart(item))}
                    className="group hover:bg-white bg-gray-900 text-white hover:text-gray-900 w-fit h-fit rounded-lg text-sm duration-300"
                  >
                    <FaPlus className="h-2 w-2 group-hover:text-gray-900" />
                  </Button>
                </div>
                {/* price and delete */}
                <div className="lg:hidden flex-col mt-3 gap-2">
                  <h3 className="text-sm leading-none line-clamp-1 text-gray-900">
                    <span>Price:</span>${" "}
                    {item.discount > 0
                      ? (item.price - (item.price * item.discount) / 100) *
                        item.qty
                      : item.price * item.qty}
                  </h3>
                  <FaTrash
                    onClick={() => dispatch(delItem(item.uuid))}
                    className="font-semibold mt-2 text-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* price and delete */}
            <div className="hidden lg:flex flex-col items-end gap-5">
              <h3 className="text-sm leading-none line-clamp-1 text-gray-900">
                <span>Price:</span>$
                {item.discount > 0
                  ? (item.price - (item.price * item.discount) / 100) * item.qty
                  : item.price * item.qty}
              </h3>
              <FaTrash
                onClick={() => dispatch(delItem(item.uuid))}
                className="font-semibold text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
