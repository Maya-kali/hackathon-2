"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const SlugComponent = ({
  image,
}: string | string[] | StaticImageData | any) => {
  const [path, setPath] = useState("");
  // console.log(image);
  return (
    <div className="mx-auto">
      <Image
        src={path ? path : image[0]}
        alt="Ecommerce"
        width={400}
        height={400}
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        {image.map((item:string, i:number) => (
          <div key={i} className="cursor-pointer hover:border-black border-2 duration-200">
            <Image
              src={item}
              alt="abc"
              width={60}
              height={60}
              onClick={() => setPath(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlugComponent;
