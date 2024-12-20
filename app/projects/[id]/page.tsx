import React from "react";
import projectdata from "@/app/components/projectsmain/projectdata";
import Link from "next/link";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  // Filter the project data synchronously
  const data = projectdata.find((item) => item.id === parseInt(params.id));

  if (!data) {
    return (
      <div className="h-screen w-screen bg-secondary dark:bg-black flex items-center justify-center">
        <h1 className="text-white text-xl">Project not found!</h1>
        <Link href="/projects" className="text-blue-500 mt-4">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-secondary dark:bg-black flex justify-center">
      <div className="min-h-screen w-[67vw] bg-red-900 mt-20 p-8 rounded-lg">
        <Link href="/projects">
          <button className="text-white bg-black px-4 py-2 rounded-md mb-4">Go Back</button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">{data.title}</h1>
          <Image src={data.logo} alt="image" height={300} width={300} className="rounded-md mx-auto" />
          <div className="mt-4">
            <h2 className="text-xl text-white mb-2">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {data.teckstack.map((tech, index) => (
                <span key={index} className="bg-black text-white px-3 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-xl text-white mt-4">Description</h2>
          <p className="text-white">{data.description}</p>
          {data.githubLink && (
            <Link href={data.githubLink} className="text-blue-500 mt-4 block">
              Visit GitHub Repository
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
