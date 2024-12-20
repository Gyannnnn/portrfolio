import React from "react";
import projectdata from "./projectdata";
import Image from "next/image";



import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 hover:cursor-pointer">
      {projectdata.map((item, index) => (
        <Link key={index} className="bg-red-900 h-96 w-96" href={`/projects/${item.id}`}>
        <Card key={index} className="rounded-md">
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
                <div key={index2} className="px-2 py-0 dark:bg-gray-900 bg-black text-white rounded-md">{item2}</div>
            ))
            
            }</div>
        </Card></Link>
      ))}
    </div>
  );
}
