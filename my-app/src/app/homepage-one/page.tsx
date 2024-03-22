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
      <div className="min-xs:hidden min-xs-g:hidden mid-xs:hidden higher-mid-xs:hidden sm:hidden md:hidden greater-mid-xs:flex greater-mid-xs:w-full greater-2xl-xs:flex greater-2xl-xs:w-full lg:flex lg:w-full xl:flex xl:w-full">
        <Card1 />
        <Card2 />
      </div>
      <div className="min-xs:flex min-xs:w-full min-xs-g:flex min-xs-g:w-full mid-xs:flex mid-xs:w-full higher-mid-xs:flex higher-mid-xs:w-full sm:flex sm:w-full md:flex md:w-full greater-2xl-xs:hidden lg:hidden xl:hidden">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default HomepageOne;
