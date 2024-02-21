"use client";

import React from "react";
import SectionHeader from "./common/SectionHeader";
import Card from "./common/Card";
import { productList2, services } from "@/utils/dummyData";

import { TbTruckDelivery } from "react-icons/tb";

import Image from "next/image";

const ProductsSection = () => {
  return (
    <section>
      <SectionHeader
        timer={false}
        arrows={true}
        button={false}
        sectionHeading={"Explore Our Products"}
        sectionName={"Our Products"}
      />

      <div className="mx-4 tab:mx-[8rem] m-auto grid justify-items-center grid-cols-1 tab:grid-cols-2 des:grid-cols-4 pt-[5rem] gap-[1rem] tab:gap-[2rem]">
        {productList2.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

      <div className="flex justify-center items-center my-12 text-white text-[12px] font-600 tracking-[1px] ">
        <button className="bg-[#db4444] px-12 py-4 capitalize rounded">
          View all Products
        </button>
      </div>

      <section>
        <SectionHeader
          timer={false}
          arrows={false}
          button={false}
          sectionHeading={"New Arrival"}
          sectionName={"Featured"}
        />
        <div className="flex mx-4 tab:mx-[8rem] m-auto gap-2 tab:gap-6">
          <div>
            <Image
              src="/assets/images/PS5.svg"
              alt="ps5"
              width={720}
              height={900}
              className="cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2 tab:gap-6">
            <div>
              <Image
                src="/assets/images/collection.svg"
                alt="colection"
                width={700}
                height={200}
                className="cursor-pointer"
              />
            </div>
            <div className="flex  gap-2 tab:gap-6 ">
              <Image
                src={"/assets/images/speakers.svg"}
                alt="speakers"
                width={350}
                height={350}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/images/gucci.svg"}
                alt="gucci"
                width={350}
                height={350}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto mx-4 tab:mx-[8rem] py-20 flex justify-center gap-[6rem] flex-wrap">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center flex-col gap-8"
          >
            <div className="bg-black border-[8px] border-solid border-[#e9e8e855] rounded-[50%] text-white p-2">
              {item.icon}
            </div>
            <div className="flex justify-center items-center flex-col gap-2   ">
              <h2 className="font-600 text-[22px]">{item.name}</h2>
              <p className="text-[14px]">{item.para}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProductsSection;
