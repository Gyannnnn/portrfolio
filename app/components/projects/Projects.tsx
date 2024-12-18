import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-[80vh] w-[67vw]   mt-20 mb-10 flex flex-col justify-around gap-5">
      <h1 className="font-inter text-4xl">Projects</h1>
      <div className="flex justify-center items-center gap-4">
        <Link href="/projects">
          <Card className="w-[33vw] flex flex-col gap-4 border">
            <Image
              src="/images/chatgpt.webp"
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-t-lg "
            />
            <h1 className="px-4 pb-4 font-inter text-3xl">Project Title</h1>
            <p className="px-4 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              earum error, dolores laboriosam perspiciatis, vel deserunt eos
              itaque veniam dolor aperiam temporibus mollitia nostrum
              repudiandae. Ullam nostrum sunt quaerat doloribus?
            </p>
          </Card>
        </Link>
        <Link href="/projects">
          <Card className="w-[33vw] flex flex-col gap-4 border">
            <Image
              src="/images/chatgpt.webp"
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-t-lg"
            />
            <h1 className="px-4 pb-4 font-inter text-3xl">Project Title</h1>
            <p className="px-4 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              earum error, dolores laboriosam perspiciatis, vel deserunt eos
              itaque veniam dolor aperiam temporibus mollitia nostrum
              repudiandae. Ullam nostrum sunt quaerat doloribus?
            </p>
          </Card>
        </Link>
      </div>
      <Link className="px-6 py-3 rounded-md font-bold bg-black text-white dark:text-black w-32 flex items-center justify-center dark:bg-white" href="/projects">View All</Link>
    </div>
  );
}
