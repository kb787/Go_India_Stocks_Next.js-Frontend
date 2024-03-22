"use client";
import React from "react";
import Image from "next/image";

const Card2 = () => {
  return (
    // <div className="min-xs:hidden min-xs-g:hidden mid-xs:hidden higher-mid-xs:hidden sm:hidden md:hidden greater-mid-xs:hidden greater-2xl-xs:flex flex-col ml-24 lg:ml-14 lg:mr-5 mid-xs:pr-5  min-xs:ml-2 min-xs:mr-2">
    <div>
      <p className="min-xs:hidden min-xs-g:hidden mid-xs:hidden higher-md-xs:hidden sm:hidden greater-mid-xs:bg-gray-200 text-red-700 px-3 py-3 font-semibold max-h-14 max-w-96 overflow-hidden text-center justify-center text-2xl mt-1 ml-2">
        MARKET STORIES
      </p>
      <div className="flex flex-col justify-center">
        <div className="min-xs:min-w-96  min-xs-g:min-w-96 mid-xs:min-w-96 higher-mid-xs:min-w-96 sm:min-w-96 md:min-w-96 mt-5 w-fit ml-2 border-2 border-slate-200 mb-5 min-xs:justify-center">
          <Image
            src="/images/card-2-Image.png"
            width={380}
            height={180}
            alt="Loading your image"
          />
          <p className="font-semibold text-base text-left p-2">
            The Coldest Sunset
          </p>
          <p className="text-base max-w-80 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum lectus nec ipsum eleifend,
          </p>
        </div>
        <div className="min-xs:min-w-96  min-xs-g:min-w-96 mid-xs:min-w-96 higher-mid-xs:min-w-96 sm:min-w-96 md:min-w-96 mt-5 w-fit ml-2 border-2 border-slate-200 mb-5 min-xs:justify-center">
          <Image
            src="/images/card-2-Image.png"
            width={380}
            height={180}
            alt="Loading your image"
          />
          <p className="font-semibold text-base text-left p-2">
            The Coldest Sunset
          </p>
          <p className="text-base max-w-80 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum lectus nec ipsum eleifend,
          </p>
        </div>
        <div className="min-xs:min-w-96  min-xs-g:min-w-96 mid-xs:min-w-96 higher-mid-xs:min-w-96 sm:min-w-96 md:min-w-96 mt-5 w-fit ml-2 border-2 border-slate-200 mb-5 min-xs:justify-center">
          <Image
            src="/images/card-2-Image.png"
            width={380}
            height={180}
            alt="Loading your image"
          />
          <p className="font-semibold text-base text-left p-2">
            The Coldest Sunset
          </p>
          <p className="text-base max-w-80 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum lectus nec ipsum eleifend,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
