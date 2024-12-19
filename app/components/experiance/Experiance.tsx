import React from "react";
import data from "../../about/data";
import Image from "next/image";

export default function Experiance() {
  return (
    <div className="experience-container flex flex-col gap-5">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-4">
            <Image
              src={item.logo}
              height={50}
              width={50}
              alt={`${item.name} logo`}
              className="bg-black rounded-md"
            />
            <div>
              <h1 className="text-lg font-inter font-semibold">{item.role}</h1>
              <h2 className="text-sm text-gray-300 font-light ">{item.name}</h2>
            </div>
          </div>
          <h1 className="text-sm  text-gray-300 font-light ">{item.duration}</h1>
          <p className="text-sm  text-gray-300 font-light tracking-tight ">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
