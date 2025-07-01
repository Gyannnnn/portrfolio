import React from 'react'
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Resume() {
  return (
    <main className="min-h-screen w-full bg-secondary dark:bg-black flex flex-col items-center pt-24 px-2">
      <SectionWrapper className="flex flex-col items-center justify-center min-h-[80vh]">
        <iframe className="w-full h-[80vh] rounded-2xl shadow-lg border border-white/30 dark:border-gray-700 bg-white/30 dark:bg-[#18181c]/70" src="/resume/resume.pdf" />
      </SectionWrapper>
    </main>
  );
}
