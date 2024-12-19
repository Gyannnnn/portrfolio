import React from "react";
import Link from "next/link";
import Projects from "./components/projects/Projects";
import Connectme from "./components/coneectme/Connectme";

export default function page() {
  
  return (
    <div className="min-h-[100vh] w-[100vw] bg-secondary dark:bg-black flex flex-col items-center ">
      <div className="sm:w-[67vw] max-sm:w-[90vw]  min-h-80 flex flex-col items-start justify-around sm:mt-4 max-sm:mt-10">
        <h1 className="font-inter text-4xl pb-4 font-extralight max-sm:text-3xl">Gyanaranjan Patra</h1>
        <p className="font-inter  text-lg text-gray-800 dark:text-white">
        Hello! I am a budding Full-Stack Web Developer and a second-year IT student with a keen interest in AI and Blockchain technologies. With hands-on experience in the MERN stack, I specialize in developing efficient and user-friendly web applications. I am committed to continuous learning and exploration of cutting-edge technologies to create impactful AI and blockchain solutions that enhance user experiences and system performance. I am available to dedicate 25-30 hours per week, ensuring flexibility and effective collaboration in any time zone.
        </p>
        <Link className="px-6 py-3 rounded-md bg-primary text-secondary dark:bg-white dark:text-black font-bold max-sm:mt-5" href="/about">About Me</Link>
        
      </div>
      <Projects/>
      <Connectme/>
    </div>
  );
}
