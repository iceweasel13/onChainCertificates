import React from "react";
import Image from "next/image";

interface Props {
  _id: string;
  imgSrc: string;
  title: string;
}
const ProjectCard = ({ imgSrc, title }: Props) => {
  return (
    <div className="w-72 background-light900_dark200 light-border p-4  shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Image
        src={imgSrc}
        alt="Product"
        height={288}
        width={288}
        className=" object-cover rounded-md "
      />
      <div className=" pt-3 w-72">
        <span className=" mr-3 uppercase small-semibold text-dark300_light900">
          {title}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
