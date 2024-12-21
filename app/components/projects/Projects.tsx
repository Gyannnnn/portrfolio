import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import projectdata from "../projectsmain/projectdata";
const data = projectdata.filter((item) => item.featured === true);

export default function Projects() {
  return (
    <div className="min-h-[80vh] sm:w-[67vw] mt-20 mb-10 flex flex-col justify-around gap-5">
      <h1 className="font-inter font-extrabold text-4xl">Projects</h1>
      <div className="flex max-sm:flex-col justify-center items-center gap-4">
        {data.slice(0, 2).map((project, index) => (
          <Card key={index} className="sm:w-[33vw] max-sm:w-[90vw] flex flex-col gap-4 border h-[480px] rounded-xl">
            <div className="h-[250px] w-full overflow-hidden">
              <Image
                src={project.logo}
                width={500}
                height={500}
                alt="Project Image"
                className="rounded-t-lg filter grayscale-0 hover:grayscale object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
              <h1 className="font-inter text-3xl truncate">{project.title}</h1>
              <p className="text-sm text-gray-700 dark:text-white line-clamp-6">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <Link
        className="px-6 py-3 rounded-md font-bold bg-black text-white dark:text-black w-28 flex items-center justify-center dark:bg-white"
        href="/projects"
      >
        View All
      </Link>
    </div>
  );
}
