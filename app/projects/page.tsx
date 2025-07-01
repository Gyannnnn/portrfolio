import React from "react";
import Projects from "../components/projectsmain/Projects";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function page() {
  return (
    <main className="min-h-screen w-full bg-secondary dark:bg-black flex flex-col items-center pt-24 px-2">
      <SectionWrapper className="flex flex-col items-center gap-10 justify-start min-h-screen mt-4 mb-10">
        <h1 className="text-4xl font-inter">Projects</h1>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <Projects />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
