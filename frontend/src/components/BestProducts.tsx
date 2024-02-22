"use client";

import React from "react";
import SectionHeader from "./common/SectionHeader";

import { productList2 } from "@/utils/dummyData";
import Card from "./common/Card";
import Image from "next/image";

const BestProducts = () => {
  return (
    <section className="mt-[2rem] tab:mt-[5rem]">
      <SectionHeader
        button
        sectionHeading={"Best Selling Products"}
        sectionName={"This Month"}
      />

      <div className="flex flex-wrap pt-8 justify-center mx-4 tab:mx-[8rem] m-auto gap-[1rem] tab:gap-[2rem]">
        {productList2.slice(0, 4).map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

      <div className="relative  m-auto tab-lg:mx-[8rem]  des:mx-[8rem] mx-[1rem] my-8 ">
        <Image
          src="/assets/images/frame.svg"
          alt="bannar Image"
          width={1400}
          height={1200}
        />
      </div>
    </section>
  );
};

export default BestProducts;
