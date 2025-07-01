import React from "react";
import Image from "next/image";
import Link from "next/link";
import Experiance from "../components/experiance/Experiance";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaAws, FaLinux, FaMobileAlt, FaTerminal, FaWindows } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiShadcnui, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiPostman, SiExpo, SiJavascript } from "react-icons/si";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TechBadge from "@/components/ui/TechBadge";
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

export default function About() {
  return (
    <main className="min-h-[100vh] w-full bg-secondary dark:bg-black flex flex-col items-center pt-24 px-2">
      {/* Hero Section */}
      <SectionWrapper className="mb-12">
        <div className="bg-white/30 dark:bg-[#18181c]/70 backdrop-blur-xl border border-white/30 dark:border-gray-700 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-lg">
          <div className="flex flex-col items-center md:items-start flex-1">
            <h1 className="font-inter text-4xl md:text-5xl font-extrabold text-primary mb-2">About Me</h1>
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
              I
              <span className="text-3xl animate-pulse">❤️</span>
              to Code
            </h2>
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-4 max-w-xl">
              I am a passionate full-stack web developer with proficiency in the MERN stack and a strong interest in blockchain and DevOps. As an IT undergrad at VSSUT Burla, I build secure, scalable web applications and love exploring new technologies. I thrive on crafting innovative solutions and am committed to continuous learning and contributing to technological advancement.
            </p>
            <Button asChild className="rounded-full font-bold bg-green-600 text-white hover:bg-green-700">
              <Link href="/resume">Download Resume</Link>
            </Button>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/me.jpg"
              alt="Gyanaranjan Patra"
              width={180}
              height={180}
              className="rounded-full border-4 border-white/60 dark:border-black/60 shadow-lg object-cover w-44 h-44"
            />
          </div>
        </div>
      </SectionWrapper>
      {/* Details & Experience */}
      <SectionWrapper className="mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Details Card */}
          <div className="flex-1 bg-white/30 dark:bg-[#18181c]/70 backdrop-blur-xl border border-white/30 dark:border-gray-700 rounded-2xl p-8 shadow-lg flex flex-col gap-6 min-w-[260px]">
            <h3 className="text-xl font-bold mb-2 text-primary">Details</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              I love building things that live on the internet. My focus is on full-stack web development, DevOps, and blockchain. I enjoy collaborating, learning, and solving real-world problems with code.
            </p>
            <hr className="my-2 border-gray-300 dark:border-gray-700" />
            <div className="flex flex-col gap-3 mb-4">
              <div>
                <span className="text-gray-500 dark:text-gray-300">Experience:</span>
                <span className="ml-2 font-semibold text-gray-800 dark:text-gray-100">1 Year</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-300">Time zone:</span>
                <span className="ml-2 font-semibold text-gray-800 dark:text-gray-100">Asia/Kolkata UTC+5:30</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-300">Email:</span>
                <Link className="ml-2 underline font-semibold text-primary" href="mailto:hi.gyanaranjanpatra@gmail.com">hi.gyanaranjanpatra@gmail.com</Link>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-300">GitHub:</span>
                <Link className="ml-2 underline font-semibold text-primary" href="https://github.com/Gyannnnn" target="_blank">Gyannnnn</Link>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-300">X.com:</span>
                <Link className="ml-2 underline font-semibold text-primary" href="https://x.com/hi_gyaan?s=08" target="_blank">hi_gyan</Link>
              </div>
            </div>
            {/* Stacks Subsection */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Stacks</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((stack) => (
                  <TechBadge key={stack.name} icon={stack.icon} name={stack.name} />
                ))}
              </div>
            </div>
            {/* Interests Subsection */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Trekking", "Watching Movie", "Travelling"].map((interest) => (
                  <span
                    key={interest}
                    className="bg-[#1e1e1e] text-white px-3 py-1 rounded-md shadow-md transition-transform hover:bg-gray-700 active:scale-95 text-xs font-medium cursor-pointer"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Experience Card */}
          <div className="flex-1 bg-white/30 dark:bg-[#18181c]/70 backdrop-blur-xl border border-white/30 dark:border-gray-700 rounded-2xl p-8 shadow-lg flex flex-col gap-4 min-w-[260px]">
            <h3 className="text-xl font-bold mb-4 text-primary">Experience</h3>
            <Experiance />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
