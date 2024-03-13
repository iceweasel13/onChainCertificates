import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
const Certificate = [
  {
    _id: "1",
    ipfs: "/assets/images/hero.png",
    projectName: "Project 1",
    title: "Certificate 1",
  },
];

const page = () => {
  return (
    <div className="flex min-h-screen  justify-between gap-4 max-lg:flex-col max-lg:items-center my-8">
      <div className="w-3/4 mt-0  bg-dark8 mr-8 ">
        <Image
          src="/assets/images/hero.png"
          alt="Certificate"
          height={280}
          width={280}
          className="object-contain rounded-md w-full  mt-0 "
        />
      </div>
      <div className="w-1/4 max-lg:w-full max-lg:px-6 h-screen flex flex-col ">
        <h1 className="h1-bold w-full items-start border-b py-4  text-dark100_light900">
          Memories
        </h1>
        <p className="mt-6 min-h-[24px] text-dark100_light900 base">
          in Memory of this platform
        </p>
        <Button className="primary-gradient mt-6 bg-black text-white">
          Mint
        </Button>
      </div>
    </div>
  );
};

export default page;
