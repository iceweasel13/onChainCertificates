import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  _id: string;
  ipfs: string;
  projectName: string;
  title: string;
}
const NFTCard = ({
  _id,
  ipfs,
  projectName,
  title,
}: Props) => {
  return (
    <div
      key={_id}
      className="w-72 p-4 bg-navy background-light800_dark300 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    >
      <Image
        src={ipfs}
        alt="Certificate"
        height={280}
        width={280}
        className="object-cover rounded-md"
      />
      <div className="px-4 py-3 w-72">
        <span className="base-semibold text-dark400_light700 mr-3 uppercase text-xs">
          {projectName}
        </span>
        <p className="base-bold text-dark400_light800 truncate block capitalize">
          {title}
        </p>
      </div>
    </div>
  );
};

export default NFTCard;
