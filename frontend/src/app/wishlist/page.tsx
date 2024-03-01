"use client";

import React from "react";
import { productList2 } from "@/utils/dummyData";
import Card from "@/components/common/Card";
import SectionHeader from "@/components/common/SectionHeader";

const Wishlist = () => {
  return (
    <section className="tab-lg:mx-[8rem] mx-[1rem] m-auto my-16">
      <div>
        <div className="flex justify-between align-middle">
          <h2 className="tab:text-[20px]">Wishlist (4)</h2>

          <button className="text-[12px] tab:text-[16px] px-4 py-1  tab:px-8 tab:py-2 capitalize rounded text-black border border-black">
            Move All To Bag
          </button>
        </div>
      </div>

      <div className=" grid justify-items-center grid-cols-1 tab:grid-cols-2 des:grid-cols-4 pt-[5rem] gap-[1rem] tab:gap-[2rem]">
        {productList2.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

      <div>
        <div className="flex justify-between tab:align-middle py-12">
          <div className="flex items-center justify-start gap-6">
            <div className="w-4 h-8 bg-[#db4444] rounded-[2px]"></div>
            <p className="text-[16px] tab:text-[20px] font-semibold text-black ">
              Just For You
            </p>
          </div>

          <button className="text-[12px] tab:text-[16px] px-4 py-1   tab:px-8 tab:py-2 capitalize rounded border border-black text-black tab">
            See All
          </button>
        </div>

        <div className="flex flex-wrap justify-evenly pt-8  gap-[1rem] tab:gap-[2rem]">
          {productList2.slice(0, 4).map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
