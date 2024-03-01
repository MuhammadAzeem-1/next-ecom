import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Image from "next/image";
import Icons from "@/utils/icons";
import ColorOptions from "./ColorOptions";
import CustomSelector from "./CustomSelector";
import QuantityHandler from "./QuantityHandler";
import ExtraOffers from "./ExtraOffers";

const EXTRA_OFFERS = [
  {
    title: "Free Delivery",
    des: "Enter your postal code for Delivery Availability",
    icon: Icons.TbTruckDelivery(34),
  },
  {
    title: "Free Delivery",
    des: "Free 30 Days Delivery Returns.",
    icon: Icons.PiArrowsClockwiseFill(34),
  },
];

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
        <div className="ml-8 max-w-[400px]">
          <h3 className="text-[24px] font-600 pb-4">Havic HV G-92 Gamepad</h3>
          <div className="flex gap-4 items-center">
            <div className="flex gap-[2px]">
              {Array(4)
                .fill("text-yellowClr")
                ?.map((item) => Icons.TiStar(24, item))}
              {Icons.TiStar(24, "text-[rgba(0,0,0,0.25)]")}
            </div>
            <span className="text-[14px] font-400 text-[rgba(0,0,0,0.5)]">
              {"(150 Reviews)"}
            </span>
            <div className="w-[2px] h-4 bg-[rgba(0,0,0,0.25)]" />
            <span className="text-[14px] font-400 text-lightGreen">
              In Stock
            </span>
          </div>
          <div className="flex flex-col gap-6 pt-4">
            <p className="text-[24px]">$192.00</p>
            <p className="text-[14px]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="h-[1px] w-full bg-[gray]" />
            <ColorOptions
              title="Colors:"
              colors={["#E07575", "black", "gray"]}
            />
            <CustomSelector />
            <div className="flex justify-between">
              <QuantityHandler />
              <button className="bg-lightRed text-[16px] text-white w-[165px] rounded-[4px] h-10 flex justify-center items-center">
                Buy Now
              </button>
              <div className="cursor-pointer size-10 border-[1px] border-[gray] rounded-[4px] flex justify-center items-center">
                {Icons.FaRegHeart(20)}
              </div>
            </div>
          </div>
          <div className="pt-10">
            <ExtraOffers data={EXTRA_OFFERS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailCard;
