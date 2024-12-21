import React from "react";
import projectdata from "./projectdata";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 hover:cursor-pointer">
      {projectdata.map((item, index) => (
        <Card
          key={index}
          className="rounded-xl drop-shadow-sm bg-secondary dark:bg-black mt-2 flex flex-col justify-start max-sm:justify-between gap-5 max-sm:gap-[7.25rem] sm:py-5 px-5 pt-5 relative"
        >
          <div className="flex items-center justify-start gap-5 ">
            <Image
              src={item.displayLogo}
              height={130}
              width={130}
              alt="image"
              className="rounded-full max-sm:hidden"
            />
            <div className=" h-28 flex flex-col items-start justify-center gap-2 max-sm:pt-5">
              <h1 className="text-xl font-inter font-bold max-sm:mt-[100px] max-sm:w-[60vw]">{item.title}</h1>
              <p className="font-extralight text-black dark:text-gray-300">
                {item.dpdescription}
              </p>
            </div>
          </div>
          <div className="flex sm:justify-between items-center max-sm:flex-col max-sm:gap-2   max-sm:items-start max-sm:py-4  ">
            <div className="flex gap-2 max-sm:flex-wrap  flex-wrap">
              {item.teckstack.map((item2, index2) => (
                <span
                  key={index2}
                  className="px-2 py-[1.5px] dark:bg-[#171717] bg-gray-300 text-black dark:text-gray-300 dark:hover:text-gray-50 rounded-md"
                >
                  {item2}
                </span>
              ))}
            </div>
            <Link href={item.githubLink} className="dark:text-gray-300 dark:hover:text-gray-50 underline-offset-2 underline ">
              Github
            </Link>
          </div>
          {
              item.ongoing?<div className="bg-red-900 text-white w-24 flex items-center justify-center rounded-md fixed top-[-2px] right-0">On Going</div>:<div className="bg-green-900 text-white w-24 flex items-center justify-center rounded-md fixed top-0 right-0">Completed</div>

          }
          
        </Card>
      ))}
    </div>
  );
}
