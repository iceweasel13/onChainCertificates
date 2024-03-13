import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="background-light900_dark200 shadow-light-300 dark:shadow-none ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/images/site-logo.svg"
              className="h-8"
              alt="Logo"
              width={32}
              height={32}
            />
            <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900">
              Block{" "}
              <span className="text-primary-500">Cred</span>
            </p>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-spaceGrotesk text-dark-100 dark:text-light-900">
            <li>
              <a
                href="#"
                className="text-dark300_light900 
               flex items-center justify-start gap-4 bg-transparent p-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark300_light900 
                flex items-center justify-start gap-4 bg-transparent p-4"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark300_light900 
                flex items-center justify-start gap-4 bg-transparent p-4"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark300_light900 
               flex items-center justify-start gap-4 bg-transparent p-4"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-dark300_light900">
          © 2024{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline"
          >
            Block Cred™
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
