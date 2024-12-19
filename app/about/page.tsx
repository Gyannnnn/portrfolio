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
      <div className="w-[67vw] max-xl:w-[80vw]  min-h-[100vh] dark:bg-black flex flex-col lg:items-start lg:justify-start gap-10 mt-10">
        <h1 className="font-inter text-4xl">About Me</h1>
        <h1 className="font-inter  text-4xl">
          I{" "}
          <span className="text-4xl hover:cursor-wait hover:grayscale">❤️</span>{" "}
          to Code
        </h1>
        <div className="flex min-h-80  w-[67vw] max-lg:w-[80vw] relative group max-lg:items-center max-lg:justify-center  max-lg:flex-col-reverse ">
          <div className="flex flex-col max-lg:gap-5 gap-10  text-lg ">
            <p className="w-[45vw] max-lg:w-[70vw] max-md:w-[80vw]   lg:tracking-tight">
            I am a passionate full-stack web developer with proficiency in the MERN stack and a strong interest in blockchain and artificial intelligence (AI). As a 2nd-year Information Technology student, I have been actively building secure and scalable web applications, leveraging technologies like Node.js, Express.js, MongoDB, and React. I'm exploring blockchain to create decentralized solutions and integrating AI technologies to enable advanced analytics and improve user experiences. I thrive on crafting innovative solutions and am driven by a commitment to continuous learning and contributing to technological advancement.
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
      <div className="flex flex-col ">
        <h1 className="text-2xl mt-5 mb-5">Details</h1>
        <div className="flex  max-xl:flex-col max-h-screen w-[67vw]">
          <div className=" w-[30vw] flex flex-col items-start justify-start">
            <Card className="w-[28vw] min-h-96 bg-secondary dark:bg-black flex flex-col justify-around pl-5  drop-shadow-3xl hover:cursor-pointer pt-5 pb-5">
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
            <div className="h-60 w-[28vw] bg-secondary dark:bg-black mt-5">
              <h1 className="text-2xl">Stacks</h1>
              <div className="mt-5 max-lg:mt-0">
                <span className="mr-2">
                  <Button >Next Js</Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-2">
                    ShadcnUI
                  </Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-2">
                    Typescript
                  </Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-2">
                    Prisma & ORMs
                  </Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-2">
                    PostgrSql
                  </Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-2">
                    MongoDB
                  </Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-1">
                    Express.js
                  </Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-1">
                    Node.Js
                  </Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-0">
                    React.Js
                  </Button>
                </span>
                <span className="mr-1">
                  <Button className="pt-0 pb-0 mt-2">
                    Javascript
                  </Button>
                </span>
              </div>
            </div>
            <div className="h-60 w-[28vw] bg-secondary dark:bg-black mt-5">
              <h1 className="text-2xl">Intrests</h1>
              <div className="mt-5 max-lg:mt-0">
                <span className="mr-1">
                  <Button >Trekking</Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-2">
                    Watching Movie
                  </Button>
                </span>
                <span className="mr-1">
                  <Button  className="pt-0 pb-0 mt-2">
                    Travelling
                  </Button>
                </span>
              </div>
            </div>
          </div>

          <Card className="bg-secondary dark:bg-black w-[37vw] min-h-96 pl-5 flex flex-col">
            <h1 className="text-xl font-bold mt-2 mb-2">Experiance</h1>
          <Experiance/>
          </Card>

        </div>
        <Projects/>
      </div>
    </div>
  );
}
