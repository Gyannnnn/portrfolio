import { notFound } from 'next/navigation';
import projectdata from '@/app/components/projectsmain/projectdata';
import Link from 'next/link';
import Image from 'next/image';

export default async function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Convert the id from string to number
  const projectId = parseInt(id, 10);

  // Find the project data by ID
  const project = projectdata.find((item) => item.id === projectId);

  // If the project is not found, show a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="h-screen w-screen bg-secondary dark:bg-black flex justify-center">
      <div className="min-h-screen w-[67vw] bg-red-900 mt-20 p-8 rounded-lg">
        <Link href="/projects">
          <button className="text-white bg-black px-4 py-2 rounded-md mb-4">Go Back</button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
          <Image src={project.logo} alt="Project Image" height={300} width={300} className="rounded-md" />
          <h2 className="text-xl text-white mt-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.teckstack.map((tech, index) => (
              <span key={index} className="bg-black text-white px-3 py-1 rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
          <h2 className="text-xl text-white mt-4">Description</h2>
          <p className="text-white">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
