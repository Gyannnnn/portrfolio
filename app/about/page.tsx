import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Projects from "../components/projects/Projects";

import Experiance from "../components/experiance/Experiance";

export default function About() {
  return (
    <div className="min-h-[100vh] w-screen bg-secondary dark:bg-black flex flex-col items-center pt-16">
      <div className="w-[67vw] max-xl:w-[80vw] max-sm:w-[90vw]  min-h-[60vh] flex flex-col  lg:items-start lg:justify-start gap-10 mt-10">
        <h1 className="font-inter text-4xl">About Me</h1>
        <h1 className="font-inter  text-4xl">
          I{" "}
          <span className="text-4xl hover:cursor-not-allowed animate-heartbeat">
            ❤️
          </span>{" "}
          to Code
        </h1>
        <div className="flex min-h-80   max-sm:w-[90vw] max-xl:w-[80vw] max-xl:justify-between w-[67vw] max-lg:w-[80vw] relative group max-lg:items-center max-lg:justify-center xl:gap-16  max-lg:flex-col-reverse ">
          <div className="flex flex-col max-lg:gap-5 gap-10 max-sm:w-[90vw] text-lg  ">
            <p className="w-[45vw] max-lg:w-[70vw] max-md:w-[80vw] max-sm:tracking-wider  max-sm:pl-2   lg:tracking-tight">
              I am a passionate full-stack web developer with proficiency in the
              MERN stack and a strong interest in blockchain and DevOps . As an
              Information Technology student of VSSUT Burla , I have been
              actively building secure and scalable web applications, leveraging
              technologies like NextJs, Typescript , Node.js, Express.js,
              MongoDB, and ReactJs. I'm exploring blockchain and DevOps to
              create decentralized solutions to improve user experiences. I
              thrive on crafting innovative solutions and am driven by a
              commitment to continuous learning and contributing to
              technological advancement.
            </p>
            <Link className="underline" href="/resume">
              Download Resume
            </Link>
          </div>
          <Image
            className="rounded-xl drop-shadow-sm mb-10 xl:absolute xl:top-[-60px] xl:right-1  transition-transform duration-500 group-hover:scale-105"
            src="/images/me.jpg"
            height={280}
            width={280}
            alt="me"
          />
        </div>
      </div>
      <div className="flex flex-col  ">
        <h1 className="text-2xl mt-5 mb-5">Details</h1>
        <div className="flex justify-between max-xl:justify-center max-xl:gap-10 max-lg:flex-col max-xl:w-[80vw] min-h-screen w-[67vw] max-sm:w-[90vw]">
          <div className=" min-w-[35vw] max-lg:w-[80vw] flex flex-col xl:items-start max-xl:items-center  justify-start max-sm:w-[90vw]">
            <Card className="min-w-[30vw] max-lg:w-[80vw] max-xl:w-[35vw] min-h-96 bg-secondary dark:bg-black flex flex-col justify-around pl-5  drop-shadow-3xl hover:cursor-pointer pt-5 pb-5 max-sm:w-[90vw]">
              <div>
                <h1 className="font font-inter font-light dark:text-gray-300 tracking-tighter text-black">
                  Experiance
                </h1>
                <h1 className="text-xl font-bold font-inter">1 Year</h1>
              </div>
              <div>
                <h1 className="font font-inter font-light dark:text-gray-300 tracking-tighter text-black">
                  Time zone
                </h1>
                <h1 className="text-xl font-bold font-inter">
                  Asia/Kolkata UTC+5:30
                </h1>
              </div>
              <div>
                <h1 className="font font-inter font-light dark:text-gray-300 tracking-tighter text-black">
                  Email
                </h1>
                <Link
                  className="underline text-xl font-bold font-inter tracking-tighter"
                  href="mailto:hi.gyanaranjanpatra@gmail.com"
                >
                  hi.gyanaranjanpatra@gmail.com
                </Link>
              </div>
              <div>
                <h1 className="font font-inter font-light dark:text-gray-300 tracking-tighter text-black">
                  Github
                </h1>
                <Link
                  className="underline text-xl font-bold font-inter tracking-tighter"
                  href=""
                >
                  Gyannnnn
                </Link>
              </div>
              <div>
                <h1 className="font font-inter font-light dark:text-gray-300 tracking-tighter text-black">
                  X.com
                </h1>
                <Link
                  className="underline text-xl font-bold font-inter tracking-tighter"
                  href=""
                >
                  hi_gyan
                </Link>
              </div>
            </Card>
            <div className="h-60 w-[28vw] max-lg:w-[80vw] max-xl:w-[35vw] bg-secondary dark:bg-black mt-5 max-sm:w-[90vw] rounded-md flex flex-col p-4">
              <h1 className="text-2xl mb-4">Stacks</h1>
              <div className="mt-5 max-lg:mt-0 flex flex-wrap gap-2">
                {[
                  "Nextjs",
                  "ShadcnUI",
                  "Typescript",
                  "Prisma&ORMs",
                  "PostgrSql",
                  "MongoDB",
                  "Express.js",
                  "Node.Js",
                  "React.Js",
                  "Javascript",
                ].map((stack) => (
                  <div
                    key={stack}
                    className="bg-[#1e1e1e] text-white px-3 py-1 rounded-md cursor-pointer shadow-md transition-transform hover:bg-gray-700 active:scale-95"
                  >
                    {stack}
                  </div>
                ))}
              </div>
            </div>

            <div className="h-20 w-[28vw] max-xl:w-[35vw] max-lg:w-[80vw] bg-secondary dark:bg-black mt-5 max-sm:w-[90vw] rounded-md p-4">
              <h1 className="text-2xl mb-4">Interests</h1>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-[#1e1e1e] text-white px-3 py-1 rounded-md shadow-md transition-transform hover:bg-gray-700 active:scale-95">
                  Trekking
                </Button>
                <Button className="bg-[#1e1e1e] text-white px-3 py-1 rounded-md shadow-md transition-transform hover:bg-gray-700 active:scale-95">
                  Watching Movie
                </Button>
                <Button className="bg-[#1e1e1e] text-white px-3 py-1 rounded-md shadow-md transition-transform hover:bg-gray-700 active:scale-95">
                  Travelling
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-secondary dark:bg-black   min-h-96 pl-5 flex flex-col max-xl:items-start">
            <h1 className="text-xl font-bold mt-2 mb-2">Experiance</h1>
            <Experiance />
          </Card>
        </div>
        <div className="flex max-md:items-center max-lg:justify-center">
          <Projects />
        </div>
      </div>
    </div>
  );
}
