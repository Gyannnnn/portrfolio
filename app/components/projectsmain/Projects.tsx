import React from "react";
import projectdata from "./projectdata";
import Image from "next/image";


import { Card } from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 hover:cursor-pointer">
      {projectdata.map((item, index) => (
        <Card>
          <div className="flex items-center justify-start">
            <Image
              src="/images/experiance/enigma1.png"
              height={100}
              width={100}
              alt="image"
            />
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="flex gap-2">{
            
            item.teckstack.map((item2,index2)=>(
                <div className="px-2 py-0 dark:bg-gray-900 bg-black text-white rounded-md">{item2}</div>
            ))
            
            }</div>
        </Card>
      ))}
    </div>
  );
}
