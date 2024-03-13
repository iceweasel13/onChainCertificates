"use client";
import React, { useState } from "react";
import Image from "next/image";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const TabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="grid grid-cols-2 max-w-md mt-4 gap-4 text-blues bg-darker">
            <div className="flex items-center justify-start gap-2  ">
              <Image
                src="/assets/icons/message.svg"
                alt="Email"
                width={20}
                height={20}
                className="cursor-pointer w-4 h-4"
              />
              Email
            </div>
            <div className="flex items-center justify-center">
              nihatzaman1@gmail.com
            </div>
            <div className="flex items-center justify-start gap-2 ">
              <Image
                src="/assets/icons/avatar.svg"
                alt="Verified"
                width={20}
                height={20}
                className="cursor-pointer w-4 h-4"
              />
              KYC
            </div>
            <div className=" flex items-center justify-center">
              Verified
            </div>
            <div className="flex items-center justify-start gap-2  ">
              EVM Address
            </div>
            <div className="flex items-center justify-center">
              Address
            </div>
          </div>
        );
      case "kyc":
        return (
          <div className="flex flex-col items-center justify-center  ">
            <h1 className="text-center mt-24  text-blues  text-xl font-bold ">
              Start Your KYC Verification
            </h1>
            <button
              type="submit"
              className="bg-asd text-white px-2 py-2 rounded-md mt-8  font-bold"
            >
              Apply
            </button>
          </div>
        );
      case "certificates":
        return (
          <div className=" w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 text-blues bg-darker "></div>
        );
      default:
        return <div>Seçili Bir Sekme Yok</div>;
    }
  };

  return (
    <div className="min-h-screen text-blues bg-darker">
      <h1 className="flex text-asd  justify-start container mx-auto font-bold pt-8 text-xl">
        Settings
      </h1>

      <div className="container mx-auto p-4 h-screen">
        <div className="border-b border-gray-200">
          <ul className="flex flex-wrap text-sm font-medium text-center">
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === "profile"
                    ? "text-blue-600 border-blue-600 border-b-2"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                Profile
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === "kyc"
                    ? "text-blue-600 border-blue-600 border-b-2"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("kyc")}
              >
                KYC
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === "certificates"
                    ? "text-blue-600 border-blue-600 border-b-2"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("certificates")}
              >
                My Certificates
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <TabContent />
        </div>
      </div>
    </div>
  );
};

export default Profile;
