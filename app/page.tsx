import React from "react";
import Link from "next/link";
import Projects from "./components/projects/Projects";
import Connectme from "./components/coneectme/Connectme";

export default function page() {
  return (
    <div className="min-h-[100vh] w-[100vw] bg-secondary dark:bg-black flex flex-col items-center pt-20 ">
      <div className="sm:w-[67vw] max-sm:w-[90vw] min-h-80 flex flex-col items-start justify-around sm:mt-4 max-sm:mt-10">
        <h1 className="font-inter text-4xl pb-4 font-extralight max-sm:text-4xl max-sm:mb-5">
          Gyanaranjan Patra
        </h1>
        <p className="font-inter text-lg text-gray-800 dark:text-white max-sm:tracking-tight">
          Hello! i am a budding Full-Stack Web Developer and an IT undergrad of
          VSSUT Burla with a keen interest in DevOps & Blockchain technologies.
          With hands-on experience in the MERN stack, I specialize in developing
          efficient and user-friendly web applications. I am committed to
          continuous learning and exploration of cutting-edge technologies to
          create impactful DevOps & blockchain solutions that enhance user
          experiences and system performance. I am available to dedicate 25-30
          hours per week, ensuring flexibility and effective collaboration in
          any time zone.
        </p>
        <Link
          className="px-6 py-3 dark:bg-white dark:text-black rounded-md bg-black text-white mt-5"
          href="/about"
        >
          About Me
        </Link>
      </div>
      <Projects />
      <Connectme />
    </div>
  );
}
