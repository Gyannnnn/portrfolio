import React from "react";
import projectdata from "./projectdata";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiShadcnui, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiAppwrite, SiReact, SiJavascript, SiHtml5, SiCss3, SiExpo } from "react-icons/si";
import TechBadge from "@/components/ui/TechBadge";

const techIconMap: Record<string, React.ReactNode> = {
  "NextJs": <SiNextdotjs title="Next.js" className="text-black dark:text-white" />,
  "ShadcnUI": <SiShadcnui title="ShadCN UI" className="text-violet-500" />,
  "TailwindCSS": <SiTailwindcss title="Tailwind CSS" className="text-cyan-400" />,
  "Typescript": <SiTypescript title="TypeScript" className="text-blue-600" />,
  "NodeMailer": <SiNodedotjs title="NodeMailer" className="text-green-600" />,
  "Appwrite": <SiAppwrite title="Appwrite" className="text-pink-500" />,
  "React.Js": <SiReact title="React.js" className="text-sky-500" />,
  "Node.Js": <SiNodedotjs title="Node.js" className="text-green-600" />,
  "Express.Js": <SiExpress title="Express.js" className="text-gray-700 dark:text-gray-200" />,
  "MongoDB": <SiMongodb title="MongoDB" className="text-green-700" />,
  "PostgrSql": <SiPostgresql title="PostgreSQL" className="text-blue-700" />,
  "Prisma&ORMs": <SiPrisma title="Prisma & ORMs" className="text-black dark:text-white" />,
  "Prisma": <SiPrisma title="Prisma" className="text-black dark:text-white" />,
  "Javascript": <SiJavascript title="JavaScript" className="text-yellow-500" />,
  "HTML": <SiHtml5 title="HTML" className="text-orange-600" />,
  "Css": <SiCss3 title="CSS" className="text-blue-500" />,
  "Expo": <SiExpo title="Expo" className="text-black dark:text-white" />,
};

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectdata.map((item, index) => {
          const cardLink = item.githubLink || "#";
          return (
            <Link
              key={index}
              href={cardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/30 dark:bg-[#18181c]/70 backdrop-blur-xl border border-white/30 dark:border-gray-700 rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl focus:ring-2 focus:ring-primary outline-none cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.logo || item.displayLogo}
                  width={600}
                  height={300}
                  alt="Project Image"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${item.ongoing ? "bg-red-700 text-white" : "bg-green-700 text-white"}`}>
                  {item.ongoing ? "Ongoing" : "Completed"}
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  {item.githubLink && (
                    <span className="bg-white/80 dark:bg-black/60 rounded-full p-2 text-xl text-gray-800 dark:text-gray-200 shadow hover:scale-110 transition-transform" aria-label="GitHub">
                      <FaGithub />
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 gap-3">
                <h1 className="font-inter text-xl font-bold text-primary mb-1 truncate group-hover:underline">{item.title}</h1>
                <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-4 mb-2">{item.dpdescription}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.teckstack?.map((tech) => (
                    <TechBadge key={tech} icon={techIconMap[tech] || null} name={tech} className="bg-white/70 dark:bg-black/40 border border-white/30 dark:border-gray-700 transition-transform duration-200 hover:scale-110" />
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
