import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Projects from "../components/projects/Projects";

export default function About() {
  return (
    <div className="min-h-[100vh] w-screen bg-secondary dark:bg-black flex flex-col items-center ">
      <div className="w-[67vw] flex flex-col items-start justify-center gap-10 mt-10">
        <h1 className="font-inter text-4xl">About Me</h1>
        <h1 className="font-inter text-3xl">
          I{" "}
          <span className="text-4xl hover:cursor-wait hover:grayscale">❤️</span>{" "}
          To Code
        </h1>
        <div className="flex max-h-80 relative group">
          <div className="flex flex-col items-start justify-center gap-10 w-[67vw] text-lg">
            <p className="w-[45vw] tracking-tight">
              I am a proficient full-stack web developer specializing in
              blockchain and artificial intelligence (AI) with 8 years of
              experience. I excel in crafting secure, scalable web applications
              that leverage blockchain for decentralized solutions. I integrate
              AI technologies for advanced analytics and machine learning,
              enhancing user interaction and operational efficiency. My passion
              lies in delivering innovative, cutting-edge solutions that drive
              technological advancement and business success.
            </p>
            <Link className="underline" href="/resume">
              Download Resume
            </Link>
          </div>
          <Image
            className="rounded-xl drop-shadow-sm mb-10 absolute top-[-60px] right-0 transition-transform duration-500 group-hover:scale-105"
            src="/images/me.jpg"
            height={265}
            width={265}
            alt="me"
          />
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-2xl mt-5 mb-5">Details</h1>
        <div className="flex h-screen w-[67vw]">
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
              <div className="mt-5">
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
              <div className="mt-5">
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

          <Card className="bg-secondary dark:bg-black w-[37vw]"></Card>

        </div>
        <Projects/>
      </div>
    </div>
  );
}
