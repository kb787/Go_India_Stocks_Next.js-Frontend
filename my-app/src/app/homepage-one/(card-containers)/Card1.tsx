"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Card1 = () => {
  return (
    <div className="min-xs:w-max min-xs-g:w-max higher-mid-xs:w-max sm:w-max md:w-max greater-mid-xs:w-max greater-2xl-xs:w-max">
      {/* <p className="min-xs:hidden min-xs-g:hidden mid-xs:hidden higher-mid-xs:hidden sm:hidden md:hidden greater-mid-xs:bg-gray-200 greater-mid-xs:text-red-700 greater-mid-xs:px-1 greater-mid-xs:py-3 greater-mid-xs:font-semibold greater-mid-xs:max-h-14 greater-mid-xs:max-h-14 greater-mid-xs:overflow-hidden greater-mid-xs:text-center greater-mid-xs:justify-center greater-mid-xs:text-2xl greater-mid-xs:mt-1 greater-mid-xs:ml-2 greater-2xl-xs:bg-gray-200 greater-2xl-xs:text-red-700 greater-2xl-xs:px-1 greater-2xl-xs:py-3 greater-2xl-xs:font-semibold greater-2xl-xs:max-h-14 greater-2xl-xs:max-w-96 greater-2xl-xs:overflow-hidden greater-2xl-xs:text-center greater-2xl-xs:justify-center greater-2xl-xs:text-2xl greater-2xl-xs:mt-1 greater-2xl-xs:ml-2 lg:bg-gray-200 lg:text-red-700 lg:px-1 lg:py-3 lg:font-semibold lg:max-h-14 lg:max-w-96 lg:overflow-hidden lg:text-center lg:justify-center lg:text-2xl lg:mt-1 lg:ml-2 bg-gray-200  px-1 py-3 font-semibold max-h-14 max-w-96 overflow-hidden text-center justify-center text-2xl mt-1 ml-2 xl:bg-gray-200 xl: text-red-700 xl:px-1 xl:py-3 xl:font-semibold xl:max-h-14 xl:max-w-96 xl:overflow-hidden xl:text-center xl:justify-center xl:text-2xl xl:mt-1 xl:ml-2 "> */}
      {/* <p className="min-xs:hidden min-xs-g:hidden mid-xs:hidden higher-mid-xs:hidden sm:hidden md:hidden bg-gray-200 text-red-700 px-1 py-3 font-semibold max-h-14 overflow-hidden text-center justify-center text-2xl mt-1 ml-2">
        DISCUSSION FOURM
      </p> */}
      <p className="min-xs:hidden min-xs-g:hidden mid-xs:hidden higher-mid-xs:hidden sm:hidden md:hidden lg:bg-gray-200 lg:text-red-700 lg:px-1 lg:py-3 lg:font-semibold lg:max-h-14  lg:text-center lg:justify-center lg:text-xl lg:mt-1 lg:ml-2 xl:bg-gray-200  xl:text-red-700  xl:px-1 xl:py-3 xl:font-semibold xl:max-h-14  xl:text-center xl:justify-center xl:text-xl xl:mt-1 xl:ml-2">
        DISCUSSION FORUM
      </p>
      {/* <div className="min-xs:w-full min-xs-g:w-full mid-xs:w-full higher-mid-xs:w-full sm:w-full md:w-full greater-mid-xs:min-w-96 md:min-w-96 md:pl-2 min-xs:min-w-96  greater-mid-xs : bg-gray-200 pt-1 pb-1 pr-1 pl-1 mt-10 mb-10 ml-2  "> */}
      <div className="min-xs:max-w-fit min-xs-g:max-w-fit mid-xs:max-w-fit higher-mid-xs:max-w-fit sm:max-w-fit md:max-w-fit greater-mid-xs: bg-gray-200 pt-1 pb-1 px-1 mt-10 mb-10 ml-2 max-w-fit">
        <div className="bg-white rounded-md p-2">
          <div className="flex gap-2 greater-mid-xs:gap-2">
            <Image
              src="/images/sampleImagePerson.png"
              alt="Loading your image"
              width={15}
              height={15}
              className="rounded-full"
            />
            <p className="text-lg max-wid-lg font-bold">Lorem Ipsum</p>
            <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl text-xs mt-1">
              Sector 2
            </button>
            <p className=" text-blue-600 text-sm text-right pl-64 pt-1 lg:pl-20 greater-2xl-xs:pl-8  greater-mid-xs:pl-6 md:pl-14 min-xs:pl-8">
              2 min ago
            </p>
          </div>
          <p className="pt-2 text-md font-semibold pr-5 pl-6 w-auto max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is
          </p>
          <div className="flex gap-4 pt-4 pl-6">
            <div className="flex gap-2 md:gap-1">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMessage} />
              <p className="text-xs">2k Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="min-xs:w-full min-xs-g:w-full mid-xs:w-full higher-mid-xs:w-full sm:w-full md:w-full greater-mid-xs:min-w-96 md:min-w-96 md:pl-2 min-xs:min-w-96  greater-mid-xs : bg-gray-200 pt-1 pb-1 pr-1 pl-1 mt-10 mb-10 ml-2 "> */}
      <div className="min-xs:min-w-fit min-xs-g:min-w-fit mid-xs:min-w-fit higher-mid-xs:min-w-fit sm:min-w-fit md:min-w-fit greater-mid-xs: bg-gray-200 pt-1 pb-1 px-1 mt-10 mb-10 ml-2 max-w-fit">
        <div className="bg-white rounded-md p-2">
          <div className="flex gap-2 greater-mid-xs:gap-2">
            <Image
              src="/images/sampleImagePerson.png"
              alt="Loading your image"
              width={15}
              height={15}
              className="rounded-full"
            />
            <p className="text-lg font-bold max-w-lg">Lorem Ipsum</p>
            <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl text-xs mt-1">
              Sector 2
            </button>
            <p className=" text-blue-600 text-sm text-right pl-64 pt-1 lg:pl-20 greater-2xl-xs:pl-8 greater-mid-xs:pl-6 md:pl-14 min-xs:pl-8">
              2 min ago
            </p>
          </div>
          <p className="pt-2 text-md font-semibold pr-5 pl-6 w-auto max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is
          </p>
          <div className="flex gap-4 pt-4 pl-6">
            <div className="flex gap-2 md:gap-1">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMessage} />
              <p className="text-xs">2k Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="min-xs:w-full min-xs-g:w-full mid-xs:w-full higher-mid-xs:w-full sm:w-full md:w-full greater-mid-xs:min-w-96 md:min-w-96 md:pl-2 min-xs:min-w-96  greater-mid-xs : bg-gray-200 pt-1 pb-1 pr-1 pl-1 mt-10 mb-10 ml-2 "> */}
      <div className="min-xs:min-w-fit min-xs-g:min-w-fit mid-xs:min-w-fit higher-mid-xs:min-w-fit sm:min-w-fit md:min-w-fit greater-mid-xs: bg-gray-200 pt-1 pb-1 px-1 mt-10 mb-10 ml-2 max-w-fit">
        <div className="bg-white rounded-md p-2">
          <div className="flex gap-2 greater-mid-xs:gap-2">
            <Image
              src="/images/sampleImagePerson.png"
              alt="Loading your image"
              width={15}
              height={15}
              className="rounded-full"
            />
            <p className="text-lg font-bold max-w-lg">Lorem Ipsum</p>
            <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl text-xs mt-1">
              Sector 2
            </button>
            <p className=" text-blue-600 text-sm text-right pl-64 pt-1 lg:pl-20 greater-2xl-xs:pl-8 greater-mid-xs:pl-6  md:pl-14 min-xs:pl-8">
              2 min ago
            </p>
          </div>
          <p className="pt-2 text-md font-semibold pr-5 pl-6 w-auto max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is
          </p>
          <div className="flex gap-4 pt-4 pl-6">
            <div className="flex gap-2 md:gap-1">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMessage} />
              <p className="text-xs">2k Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="min-xs:w-full min-xs-g:w-full mid-xs:w-full higher-mid-xs:w-full sm:w-full md:w-full greater-mid-xs:min-w-96 md:min-w-96 md:pl-2 min-xs:min-w-96  greater-mid-xs : bg-gray-200 pt-1 pb-1 pr-1 pl-1 mt-10 mb-10 ml-2 "> */}
      <div className="min-xs:min-w-fit min-xs-g:min-w-fit mid-xs:min-w-fit higher-mid-xs:min-w-fit sm:min-w-fit md:min-w-fit greater-mid-xs: bg-gray-200 pt-1 pb-1 px-1 mt-10 mb-10 ml-2 max-w-fit">
        <div className="bg-white rounded-md p-2">
          <div className="flex gap-2 greater-mid-xs:gap-2">
            <Image
              src="/images/sampleImagePerson.png"
              alt="Loading your image"
              width={15}
              height={15}
              className="rounded-full"
            />
            <p className="text-lg font-bold max-w-lg">Lorem Ipsum</p>
            <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl text-xs mt-1">
              Sector 2
            </button>
            <p className=" text-blue-600 text-sm text-right pl-64 pt-1 lg:pl-20 greater-2xl-xs:pl-8 greater-mid-xs:pl-6 md:pl-14 min-xs:pl-8">
              2 min ago
            </p>
          </div>
          <p className="pt-2 text-md font-semibold pr-5 pl-6 w-auto max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is
          </p>
          <div className="flex gap-4 pt-4 pl-6">
            <div className="flex gap-2 md:gap-1">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMessage} />
              <p className="text-xs">2k Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
