"use client";
import React from "react";
import SectionHeader from "./common/SectionHeader";
import { TfiMobile } from "react-icons/tfi";

import { categories } from "@/utils/dummyData";

const Categories = () => {
  return (
    <div className="tab:pt-[5rem]">
      <SectionHeader
        timer={false}
        arrows={false}
        button={true}
        sectionName={"Categories"}
        sectionHeading={"Browse By Category"}
      />

      <div className="tab-lg:mx-[8rem] mx-[1rem] m-auto pt-[3rem]">
        <div className="flex flex-wrap items-center justify-between 	 ">
          {categories.map((item) => (
            <div
              key={item.id}
              className="border-2 rounded-sm border-solid gap-4 tab:m-4 m-2 border-[#cdc9c9] p-4 w-[8rem] tab:p-8 tab:w-[10rem] flex items-center flex-col cursor-pointer hover:border-none hover:text-white	hover:bg-[#db4444]"
            >
              <div>{item.icon}</div>
              <p className="text-[12px] tab:text-[16px] font-normal">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="h-[1px] w-[80%] bg-[#9f9f9f] "></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
