import React from "react";
import Image from "next/image";

export default function SmallCard({ img, location, distance }) {
  //   console.log(img);

  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out ">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt="explore images"
          fill
          className="rounded-lg "
          sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500" >{distance}</h3>
      </div>
    </div>
  );
}
