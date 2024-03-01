import React from "react";
import Image from "next/image";
import Icons from "@/utils/icons";
import Link from "next/link";
import { PRODUCT_PAGE_LINK } from "@/utils/constant";

const Card = ({ item }: any) => {
  return (
    <Link href={`${PRODUCT_PAGE_LINK}/2`} className="">
      <div className="relative w-[17rem] tab-lg:w-[20rem] des:w-[17rem] h-[14rem] tab:h-[17rem] bg-[#f5f5f5] p-4 rounded">
        <div className="flex justify-between">
          {item.sale ? (
            <div className="bg-[#db4444] rounded-[5px] h-[1.5rem] w-[4rem] text-center p-[2px] text-[12px] text-white">
              <p className=" px-[5px] py-[2px] ">-{item.sale}%</p>
            </div>
          ) : (
            <p></p>
          )}
          <button className="bg-white p-[0.5rem] rounded-[50%]">
            {Icons.FaRegHeart(20)}
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/assets/images/productImage.png"}
            alt="product image"
            width={160}
            height={1600}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black text-[12px] capitalize h-[2rem] opacity-0 transition-opacity duration-300">
          <button>
            <p className="text-white text-center font-600">Add To Card</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <h2 className="text-[14px] tab:text-[16px] font-500 leading-4 uppercase">
          {item.name}
        </h2>
        <div className="flex justify-start gap-4 text-[14px] font-600">
          <p className=" text-[#db4444]">${item.price}</p>
          <p className=" text-[#9f9f9f]">
            <s>${item.originalPrice}</s>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-[5px]">
        <div className="flex items-center">
          {/* Temporary */}
          {Icons.TiStarFullOutline(20, "text-yellowClr")}
          {Icons.TiStarFullOutline(20, "text-yellowClr")}
          {Icons.TiStarFullOutline(20, "text-yellowClr")}
          {Icons.TiStarHalfOutline(20, "text-yellowClr")}
          {Icons.TiStarOutline(20, "text-yellowClr")}
        </div>

        <p className="text-[12px] font-500 text-[#9f9f9f] ">({item.reviews})</p>
      </div>
    </Link>
  );
};

export default Card;
