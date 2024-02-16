"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

const BannerSlide = () => {
  return (
    <div className="h-[400px] flex-1 w-full bg-black px-16 des-lg:px-36 flex items-center justify-between">
      <div className="text-[48px] text-textWhite font-600 max-w-[300px]">
        <h2> Up to 10% off Voucher</h2>
        <div className="flex items-center gap-2 pt-5">
          <span className="text-[16px] font-400">Shop Now</span>
          <Image
            src="/assets/images/rightArrow.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </div>
      </div>
      <div className="relative h-full w-[40%] min-w-[200px]">
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
    <div className="bg-black px-36 des-lg:px-40 des-lg:py-8 relative">
      <Slider ref={sliderRef} {...settings} className="flex flex-1 h-full">
        <BannerSlide />
        <BannerSlide />
        <BannerSlide />
      </Slider>
      <div className="absolute flex justify-end gap-5 bottom-10 right-10">
        <div
          onClick={() => sliderRef?.current?.slickPrev()}
          className="p-2 border-textWhite border-2 rounded-full cursor-pointer"
        >
          <Image
            src="/assets/images/rightArrow.svg"
            width={24}
            height={24}
            alt="arrow"
            className="rotate-180"
          />
        </div>
        <div
          onClick={() => sliderRef?.current?.slickNext()}
          className="p-2 border-textWhite border-2 rounded-full cursor-pointer"
        >
          <Image
            src="/assets/images/rightArrow.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
