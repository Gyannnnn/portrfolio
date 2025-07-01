import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiShadcnui, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiAppwrite, SiReact, SiJavascript, SiHtml5, SiCss3, SiGooglecloud } from "react-icons/si";
import TechBadge from "@/components/ui/TechBadge";

import projectdata from "../projectsmain/projectdata";
const data = projectdata.filter((item) => item.featured === true);

// Map tech names to icons
const techIconMap: Record<string, React.ReactNode> = {
  "NextJs": <SiNextdotjs className="text-black dark:text-white" />,
  "ShadcnUI": <SiShadcnui className="text-violet-500" />,
  "TailwindCSS": <SiTailwindcss className="text-cyan-400" />,
  "Typescript": <SiTypescript className="text-blue-600" />,
  "NodeMailer": <SiNodedotjs className="text-green-600" />,
  "Appwrite": <SiAppwrite className="text-pink-500" />,
  "React.Js": <SiReact className="text-sky-500" />,
  "Node.Js": <SiNodedotjs className="text-green-600" />,
  "Express.Js": <SiExpress className="text-gray-700 dark:text-gray-200" />,
  "MongoDB": <SiMongodb className="text-green-700" />,
  "PostgrSql": <SiPostgresql className="text-blue-700" />,
  "Prisma&ORMs": <SiPrisma className="text-black dark:text-white" />,
  "Prisma": <SiPrisma className="text-black dark:text-white" />,
  "Javascript": <SiJavascript className="text-yellow-500" />,
  "HTML": <SiHtml5 className="text-orange-600" />,
  "Css": <SiCss3 className="text-blue-500" />,
  "Gsap": <SiJavascript className="text-green-500" />,
  "Google Api": <SiGooglecloud className="text-blue-400" />,
  "Weather API": <SiGooglecloud className="text-blue-400" />,
};

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {data.slice(0, 2).map((project, index) => (
          <div
            key={index}
            className="bg-white/30 dark:bg-[#18181c]/70 backdrop-blur-xl border border-white/30 dark:border-gray-700 rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform duration-200 hover:scale-[1.025]"
          >
            <div className="h-56 w-full overflow-hidden relative">
              <Image
                src={project.logo || project.displayLogo}
                width={600}
                height={300}
                alt="Project Image"
                className="object-cover w-full h-full"
              />
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-white/80 dark:bg-black/60 rounded-full p-2 text-2xl text-gray-800 dark:text-gray-200 shadow hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
            </div>
            <div className="flex flex-col flex-1 p-6 gap-3">
              <h1 className="font-inter text-2xl font-bold text-primary mb-1 truncate">{project.title}</h1>
              <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-5 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.teckstack?.map((tech) => (
                  <TechBadge key={tech} icon={techIconMap[tech] || null} name={tech} className="bg-white/70 dark:bg-black/40 border border-white/30 dark:border-gray-700" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
