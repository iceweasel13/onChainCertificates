import React from "react";
import Image from "next/image";
import Link from "next/link";
import NFTCard from "@/components/cards/CertificateCard";
import Pagination from "@/components/shared/pagination/Pagination";

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
const page = () => {
  return (
    <div className=" ">
      <form className="w-1/2 mx-auto">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Image
              src="/assets/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="cursor-pointer w-5 h-5"
            />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 body-medium  rounded-lg light-border  text-light400_light500 background-light700_dark400"
            placeholder="Please input your certificated email"
            required
          />
          <button
            type="submit"
            className="text-dark400_light800 absolute light-border-2 end-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 primary-gradient"
          >
            Search
          </button>
        </div>
      </form>
      <div className="  mx-auto justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center  gap-20 mt-10  ">
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
    </div>
  );
};

export default page;
