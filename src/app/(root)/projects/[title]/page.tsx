import NFTCard from "@/components/cards/CertificateCard";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectDetail from "@/components/projects/ProjectDetail";
import Pagination from "@/components/shared/pagination/Pagination";
import Link from "next/link";
import React from "react";

const certifications = [
  {
    _id: "1",
    ipfs: "/assets/images/hero.png",
    projectName: "Project 1",
    title: "Certificate 1",
  },
  {
    _id: "2",
    ipfs: "/assets/images/hero.png",
    projectName: "Project 2",
    title: "Certificate 2",
  },
  {
    _id: "3",
    ipfs: "/assets/images/hero.png",
    projectName: "Project 3",
    title: "Certificate 3",
  },
  {
    _id: "4",
    ipfs: "/assets/images/hero.png",
    projectName: "Project 4",
    title: "Certificate 4",
  },
  {
    _id: "5",
    ipfs: "/assets/images/hero.png",
    projectName: "Project 5",
    title: "Certificate 5",
  },
  {
    _id: "6",
    ipfs: "/assets/images/hero.png",
    projectName: "Project 6",
    title: "Certificate 6",
  },
];

const Project = () => {
  return (
    <>
      <div className=" flex items-center justify-center ">
        <ProjectDetail
          _id="1"
          imgSrc="/assets/images/hero.png"
          instagram="https://instagram.com"
          twitter="https://twitter.com"
          website="https://website.com"
          description="Description"
          name="Project 1"
        />
      </div>
      <div className=" s mx-auto justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center  gap-20 mt-10  ">
        {certifications.map((item) => (
          <Link
            key={item._id}
            href={`/projects/${item.projectName}/${item._id}`}
          >
            <NFTCard
              _id={item._id}
              title={item.title}
              projectName={item.projectName}
              ipfs={item.ipfs}
            />
          </Link>
        ))}
      </div>
      <div className="my-10">
        <Pagination pageNumber={1} isNext={false} />
      </div>
    </>
  );
};

export default Project;
