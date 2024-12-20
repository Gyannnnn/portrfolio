import React from "react";
import projectdata from "@/app/components/projectsmain/projectdata";
import Link from "next/link";
import Image from "next/image";

export default async function page({ params }: { params: { id: string } }) {
  const filteredData = await projectdata.filter(
    (item) => item.id == parseInt(params.id)
  );
  const data = filteredData[0];

  return (
    <div className="h-screen w-screen bg-secondary dark:bg-black flex justify-center">
      <div className="min-h-screen w-[67vw] bg-red-900 mt-20">
        <Link href="/projects">Go Back</Link>
        <div>
          <h1>{data.title}</h1>
          <Image src={data.logo} alt="image" height={300} width={300} />
          <div>
            <div>
              <h1>Technologies</h1>
              <div>
                {data.teckstack.map((item, index) => (
                  <div>{item}</div>
                ))}
              </div>
              <Link href={data.githubLink}>Github</Link>
            </div>
            <h1>Description</h1>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
