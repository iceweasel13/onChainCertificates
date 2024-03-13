import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Renovate the certificates on{" "}
                <span className="text-primary dark:text-white">
                  blockchain
                </span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300"></p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <Link
                  href="/projects"
                  className="relative flex h2-bold "
                >
                  <Button className="text-dark400_light900 light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Explore Projects
                  </Button>
                </Link>
              </div>
              <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className=" flex flex-col  justify-center items-center">
                  <h6 className="text-lg font-semibold  text-gray-700 dark:text-white">
                    Decentralized
                  </h6>
                  <Image
                    src="/assets/icons/transparent.svg"
                    width={40}
                    height={40}
                    alt="decentralized"
                    className="mt-2 dark:invert "
                  />
                </div>
                <div className=" flex flex-col  justify-center items-center">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Transparent
                  </h6>
                  <Image
                    src="/assets/icons/decentralized.svg"
                    width={40}
                    height={40}
                    alt="decentralized"
                    className="mt-2 dark:invert"
                  />
                </div>
                <div className="flex flex-col justify-center items-center  ">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Reliable
                  </h6>
                  <Image
                    src="/assets/icons/secure.svg"
                    width={40}
                    height={40}
                    alt="decentralized"
                    className="mt-2 dark:invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
