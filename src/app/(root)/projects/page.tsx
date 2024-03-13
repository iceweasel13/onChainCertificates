import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/cards/ProjectCard";
import Pagination from "@/components/shared/pagination/Pagination";
const projects = [
  {
    _id: "1",
    imgSrc: "/assets/images/hero.png",
    title: "Project 1",
  },
  {
    _id: "2",
    imgSrc: "/assets/images/hero.png",
    title: "Project 2",
  },
  {
    _id: "3",
    imgSrc: "/assets/images/hero.png",
    title: "Project 3",
  },
  {
    _id: "4",
    imgSrc: "/assets/images/hero.png",
    title: "Project 4",
  },
  {
    _id: "5",
    imgSrc: "/assets/images/hero.png",
    title: "Project 5",
  },
  {
    _id: "6",
    imgSrc: "/assets/images/hero.png",
    title: "Project 6",
  },
];

const page = () => {
  return (
    <div className="flex-col w-full background-light850_dark100 ">
      <div>
        <h1 className="h1-bold w-full items-start border-b py-4  text-dark100_light900">
          Projects
        </h1>
      </div>
      <div className=" w-fit mx-auto justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center  gap-20 mt-10  ">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.title}`}
          >
            <ProjectCard
              _id={project._id}
              title={project.title}
              imgSrc={project.imgSrc}
            />
          </Link>
        ))}
      </div>
      <div className="my-10">
        <Pagination pageNumber={1} isNext={false} />
      </div>
    </div>
  );
};

export default page;
