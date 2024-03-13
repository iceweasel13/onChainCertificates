"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";
import MobileNav from "./MobileNav";

import { ConnectButton } from "thirdweb/react";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="DevFlow"
          width={23}
          height={23}
        />
        <p className=" h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden ">
          Block
          <span className="text-primary-500">Cred</span>
        </p>
      </Link>
      <div className="flex-between gap-5  font-spaceGrotesk text-dark-100 dark:text-light-900 max-lg:hidden">
        {navbarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) &&
              item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900 "
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                }`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex-between gap-5">
        <Theme />
        <ConnectButton />
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
