import React from "react";
import Projects from "../components/projectsmain/Projects";

export default function page() {
  return (
    <div className="w-screen min-h-screen bg-secondary dark:bg-black flex  justify-center ">
      <div className="min-h-screen w-[67vw] max-sm:w-[80vw] mt-28 mb-10 flex flex-col gap-10  justify-start">
        <h1 className="text-4xl font-inter">Projects</h1>
        <Projects/>
      </div>
    </div>
  );
}
