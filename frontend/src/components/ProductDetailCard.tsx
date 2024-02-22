import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Image from "next/image";
import Icons from "@/utils/icons";

const MiniCard = () => {
  return (
    <div className="w-[170px] h-[138px] bg-lightGray px-5">
      <div className="relative w-full h-full">
        <Image
          src="/assets/images/controller.png"
          fill
          className="object-contain"
          alt="product"
        />
      </div>
    </div>
  );
};

const ProductDetailCard = () => {
  return (
    <section className="py-20 px-32 flex flex-col gap-20">
      {/* <BreadCrumbs /> */}
      <div className="flex gap-7">
        <div className="flex flex-col gap-4">
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
        <div className="w-[500px] bg-lightGray px-7">
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/controller.png"
              fill
              className="object-contain"
              alt="product"
            />
          </div>
        </div>
        <div className="pl-8">
          <h3 className="text-[24px] font-600 pb-4">Havic HV G-92 Gamepad</h3>
          <div className="flex gap-4 items-center">
            <div className="flex gap-1">
              {Icons.TiStarFullOutline(24, "text-yellowClr")}
              {Icons.TiStarFullOutline(24, "text-yellowClr")}
              {Icons.TiStarFullOutline(24, "text-yellowClr")}
              {Icons.TiStarFullOutline(24, "text-yellowClr")}
              {Icons.TiStarFullOutline(24, "text-[rgba(0,0,0,0.25)]")}
            </div>
            <span className="text-[14px] font-400 text-[rgba(0,0,0,0.5)]">
              {"(150 Reviews)"}
            </span>
            <div className="w-[2px] h-4 bg-[rgba(0,0,0,0.25)]" />
            <span className="text-[14px] font-400 text-lightGreen">
              In Stock
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailCard;
