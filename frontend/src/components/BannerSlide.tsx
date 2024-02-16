"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

const BannerSlide = () => {
  return (
    <div className="h-[270px] tab:h-[400px] flex-1 w-full bg-black des:px-16 des-lg:px-36 flex items-center justify-between">
      <div className="text-[24px] tab:text-[30px] des:text-[48px] des-lg:text-[60px] text-textWhite font-600 max-w-[300px] des-lg:max-w-[500px]">
        <h2> Up to 10% off Voucher</h2>
        <div className="flex items-center gap-2 pt-5">
          <span className="text-[12px] tab:text-[16px] des-lg:text-[20px] font-400">
            Shop Now
          </span>
          <Image
            src="/assets/images/rightArrow.svg"
            width={24}
            height={24}
            alt="arrow"
            className="size-3 tab:size-6"
          />
        </div>
      </div>
      <div className="relative h-full w-[40%] min-w-[180px] tab:min-w-[300px]">
        <Image
          alt="product"
          src="/assets/images/iphone.png"
          fill
          className="min-h-full w-[50%] object-contain"
        />
      </div>
    </div>
  );
};

const BannerSlider = () => {
  const sliderRef = useRef<any>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="bg-black px-4 tab:px-12 tab-lg:px-36 des-lg:px-40 des-lg:py-8 relative">
      <Slider ref={sliderRef} {...settings} className="flex flex-1 h-full">
        <BannerSlide />
        <BannerSlide />
        <BannerSlide />
      </Slider>
      <div className="absolute flex justify-end gap-5 bottom-10 right-10">
        <div
          onClick={() => sliderRef?.current?.slickPrev()}
          className="p-2 border-textWhite border-[1.5px] tab:border-2 rounded-full cursor-pointer"
        >
          <Image
            src="/assets/images/rightArrow.svg"
            width={24}
            height={24}
            alt="arrow"
            className="size-3 tab:size-6 rotate-180"
          />
        </div>
        <div
          onClick={() => sliderRef?.current?.slickNext()}
          className="p-2 border-textWhite border-[1.5px] tab:border-2 rounded-full cursor-pointer"
        >
          <Image
            src="/assets/images/rightArrow.svg"
            width={24}
            height={24}
            alt="arrow"
            className="size-3 tab:size-6"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
