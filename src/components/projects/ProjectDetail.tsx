import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ProjectProps {
  _id: string;
  imgSrc: string;
  instagram: string;
  twitter: string;
  website: string;
  description: string;
  name: string;
}

const ProjectDetail = ({
  _id,
  imgSrc,
  instagram,
  twitter,
  website,
  description,
  name,
}: ProjectProps) => {
  return (
    <div
      key={_id}
      className="flex border-b mb-8 background-light800_dark300  light-border  rounded-md p-4 md:p-6 lg:p-8 items-center justify-center"
    >
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 mr-8">
        <Image
          src={imgSrc}
          alt={name}
          width={900}
          height={900}
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Right side - Project information */}
      <div className="w-full md:w-1/2 lg:w-2/3">
        <h2 className="text-2xl base-semibold text-dark200_light900 mb-2">
          {name}
        </h2>
        <p className="text-dark400_light700 mb-4 ">
          {description}
        </p>

        {/* Social links */}
        <div className="flex space-x-4 mb-4">
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/world.svg"
              alt="Website"
              width={20}
              height={20}
              className="cursor-pointer dark:invert"
            />
          </Link>
          <Link
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="cursor-pointer dark:invert"
            />{" "}
          </Link>
          <Link
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/twitter.svg"
              alt="Twitter"
              width={20}
              height={20}
              className="cursor-pointer dark:invert"
            />{" "}
          </Link>
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="cursor-pointer dark:invert"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
