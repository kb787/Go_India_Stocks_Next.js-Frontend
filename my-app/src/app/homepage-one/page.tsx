"use client";
import React from "react";
import { useState } from "react";
import Card1 from "./(card-containers)/Card1";
import Card2 from "./(card-containers)/Card2";
import Card3 from "./(card-containers)/Card3";
import Tabs from "@/app/homepage-one/(components)/Tabs";
const HomepageOne = () => {
  const [currentTab, setCurrentTab] = useState("Card1");
  const renderTabContent = () => {
    switch (currentTab) {
      case "Card1":
        return <Card1 />;
      case "Card2":
        return <Card2 />;
      case "Card3":
        return <Card3 />;
      default:
        return null;
    }
  };
  const handleTabClick = (tabName: any) => {
    setCurrentTab(tabName);
  };
  return (
    <div className="flex flex-col min-h-screen greater-mid-xs:w-full greater-2xl-xs:w-full lg:w-full xl:w-full bg-white">
      <Tabs handleDisplayTab={handleTabClick} currentTab={currentTab} />
      <button className="min-xs:hidden min-xs-g:hidden mid-xs:hidden higher-mid-xs:hidden sm:hidden md:hidden greater-mid-xs:bg-blue-600 greater-mid-xs: text-white greater-mid-xs:px-5 greater-mid-xs:py-1 greater-mid-xs:rounded-2xl greater-mid-xs:text-xs greater-mid-xs:mt-1 lg:bg-blue-600 lg:text-white lg:px-5 lg:py-1 lg:rounded-2xl lg:text-xs lg:mt-1">
        Sidebar
      </button>
      <div className="min-xs:hidden min-xs-g:hidden mid-xs:hidden higher-mid-xs:hidden sm:hidden md:hidden greater-mid-xs:flex greater-mid-xs:w-full greater-2xl-xs:flex greater-2xl-xs:w-full lg:flex lg:w-full xl:flex xl:w-full">
        <Card1 />
        <Card2 />
      </div>
      <div className="min-xs:flex min-xs:w-max min-xs-g:flex min-xs-g:w-max mid-xs:flex mid-xs:w-max higher-mid-xs:flex higher-mid-xs:w-max sm:flex sm:w-max md:flex md:w-max greater-2xl-xs:hidden lg:hidden xl:hidden">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default HomepageOne;
