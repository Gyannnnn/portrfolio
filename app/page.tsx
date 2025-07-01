import React from "react";
import Link from "next/link";
import Projects from "./components/projects/Projects";
import Connectme from "./components/coneectme/Connectme";
import Image from "next/image";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaAws, FaLinux, FaMobileAlt, FaTerminal, FaWindows } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiShadcnui, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiPostman, SiExpo, SiJavascript } from "react-icons/si";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";

const techStack = [
  { name: "React.js", icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "ShadCN UI", icon: <SiShadcnui className="text-violet-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
  { name: "REST APIs", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-black dark:text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Linux (Ubuntu)", icon: <FaLinux className="text-yellow-600" /> },
  { name: "AWS (Basics)", icon: <FaAws className="text-orange-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Bash", icon: <FaTerminal className="text-green-700" /> },
  { name: "PowerShell", icon: <FaWindows className="text-blue-700" /> },
  { name: "React Native", icon: <FaMobileAlt className="text-blue-500" /> },
  { name: "Expo", icon: <SiExpo className="text-black dark:text-white" /> },
  { name: "Native Wind", icon: <SiTailwindcss className="text-cyan-400" /> },
];

export default function page() {
  return (
    <main className="min-h-screen w-full bg-secondary dark:bg-black flex flex-col items-center px-2">
      {/* Hero Section */}
      <SectionWrapper className="flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-10">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/me.jpg"
            alt="Gyanaranjan Patra"
            width={160}
            height={160}
            className="rounded-full border-4 border-white/60 dark:border-black/60 shadow-lg object-cover w-40 h-40"
          />
          <h1 className="font-inter text-4xl md:text-5xl font-extrabold text-primary text-center">Gyanaranjan Patra</h1>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center">Full-Stack Developer | DevOps & Blockchain Enthusiast</h2>
          <p className="font-inter text-base md:text-lg text-gray-800 dark:text-gray-200 text-center max-w-xl">
            I build modern, scalable web and mobile applications with a focus on clean design, performance, and user experience.
          </p>
          <div className="flex gap-4 mt-2">
            <Button asChild className="rounded-full font-bold bg-green-600 text-white hover:bg-green-700">
              <Link href="/resume">View Resume</Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-full font-bold">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
      {/* Tech Stack Section */}
      <SectionWrapper className="flex flex-col items-center mb-16">
        <h3 className="text-2xl font-extrabold mb-8 text-primary text-center">Tech Stack</h3>
        <div className="w-full bg-white/30 dark:bg-[#18181c]/70 backdrop-blur-xl border border-white/30 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techStack.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <span className="text-5xl mb-2">{item.icon}</span>
                <span className="text-xs text-center text-gray-700 dark:text-gray-200 font-medium mt-1">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      {/* Projects Section */}
      <SectionWrapper className="flex flex-col items-center mb-16">
        <h3 className="text-xl font-bold mb-6 text-primary text-center">Featured Projects</h3>
        <div className="w-full flex justify-center">
          <Projects />
        </div>
        <Button asChild className="mt-6 rounded-full font-semibold">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </SectionWrapper>
      
      
      {/* Connect Section */}
      <SectionWrapper className="flex flex-col items-center mb-10">
        <h3 className="text-xl font-bold mb-4 text-primary text-center">Connect</h3>
        <div className="w-full flex justify-center">
          <Connectme />
        </div>
      </SectionWrapper>
    </main>
  );
}
