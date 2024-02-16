"use client";
import React, { useState } from "react";
import PromoBanner from "./PromoBanner";
import InputComponent from "./InputComponent";
import Image from "next/image";

const DesktopNav = () => {
  return (
    <div className="hidden des:flex justify-between px-[90px] des-md:px-[135px]  pt-[40px] pb-[16px] border-b-2 border-gray-300">
      <div className="text-[24px] font-700 cursor-pointer">Exclusive</div>
      <ul className="flex text-[14px] font-500 gap-12 items-center">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Sign Up</li>
      </ul>
      <div className="flex gap-6">
        <InputComponent />
        <div className="flex gap-4">
          <Image
            alt="whislist icon"
            src="/assets/images/heartIcon.svg"
            width={32}
            height={32}
            className="cursor-pointer"
          />
          <Image
            alt="whislist icon"
            src="/assets/images/cartIcon.svg"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <div className="relative flex des:hidden justify-between px-10 border-b-2 border-gray-300 py-2">
      <div className="text-[24px] font-700  flex gap-2">
        <Image
          alt="menu"
          src="/assets/images/menuicon.png"
          width={24}
          height={24}
          className="object-contain cursor-pointer"
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />
        <span className="cursor-pointer"> Exclusive</span>
      </div>

      <div className="flex gap-6">
        <div className="flex gap-4">
          <Image
            alt="whislist icon"
            src="/assets/images/heartIcon.svg"
            width={32}
            height={32}
            className="cursor-pointer"
          />
          <Image
            alt="whislist icon"
            src="/assets/images/cartIcon.svg"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </div>
      </div>
      {isMenuVisible && (
        <div className="absolute z-50 top-0 right-0 w-full bg-white px-10 pt-[14px] py-2 flex flex-col gap-4">
          <Image
            alt="menu"
            src="/assets/images/cross.png"
            width={24}
            height={24}
            className="object-contain cursor-pointer"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          />
          <InputComponent />
          <ul className="flex flex-col text-[14px] font-500 items-center bg-white  px-3 py-3">
            <li className="cursor-pointer border-b-2 border-gray-400 w-full text-center py-3">
              Contact
            </li>
            <li className="cursor-pointer border-b-2 border-gray-400 w-full text-center py-3">
              Home
            </li>
            <li className="cursor-pointer border-b-2 border-gray-400 w-full text-center py-3">
              About
            </li>
            <li className="cursor-pointer w-full text-center py-3">Sign Up</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <PromoBanner />
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Header;
