"use client";
import { productList } from "../utils/dummyData";

import Card from "./common/Card";
import SectionHeader from "./common/SectionHeader";

const FlashSales = () => {
  const deadline = "2024-03-29T23:59:59";

  return (
    <section className=" py-12 ">
      <SectionHeader
        button
        sectionName={"Today's"}
        sectionHeading={"Flash Sales"}
        timer={true}
      />
      <div className="flex tab-lg:ml-[8rem] des:ml-[8rem] ml-[1rem] pt-8 gap-[1rem] tab:gap-[2rem] overflow-hidden">
        {productList.map((item: any) => (
          <Card item={item} key={item.name} />
        ))}
      </div>
      <div className="flex justify-center items-center my-12 text-white text-[12px] font-600 tracking-[1px] ">
        <button className="bg-[#db4444] px-12 py-4 capitalize rounded">
          View all Products
        </button>
      </div>
      <div className="flex justify-center">
        <div className="h-[1px] w-[80%] bg-[#9f9f9f] "></div>
      </div>
    </section>
  );
};

export default FlashSales;
