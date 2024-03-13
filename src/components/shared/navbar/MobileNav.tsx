"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "../../../constants";
import { usePathname } from "next/navigation";
import { ConnectButton } from "thirdweb/react";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {navbarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) &&
            item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
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
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="hamburger menu"
          className="invert-colors lg:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="DevFlow"
            width={23}
            height={23}
          />
          <p className=" h2-bold  text-dark100_light900 font-spaceGrotesk ">
            Block{" "}
            <span className="text-primary-500">Cred</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <div className="flex flex-col gap-3 mt-6">
            <ConnectButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
